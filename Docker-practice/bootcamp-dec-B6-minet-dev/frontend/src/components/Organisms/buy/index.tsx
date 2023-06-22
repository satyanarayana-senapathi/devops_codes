import { Paper, Divider, Stack, styled } from "@mui/material";
import Image from "../../Atoms/Image";
import TypographyMinet from "../../Atoms/TypographyMinet";
import Button from "../../Atoms/Button";
import payment from "../../../../public/assets/images/payment.svg";
import delivery from "../../../../public/assets/images/delivery.svg";
import wallet from "../../../../public/assets/images/wallet.svg";
import stepper from "../../../../public/assets/images/stepper.svg";
import { useSelector, useDispatch } from "react-redux";
import { total } from "../../../../public/store/features/totalAmount";
import { remaining } from "../../../../public/store/features/remaining";
import { store } from "../../../../public/store";
import { TextDot } from "../../Molecules/textWithDot";
import { BASE_URL,surnames, names,  months , Data, Max, Transaction, USDollar} from "../../../utils/constants";
import { IconTypo } from "../../Molecules/IconTypo";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const StyledPaper = styled(Paper)(() => ({
  width: "100%",
  height: "650px",
  borderRadius: "4px",
  border: "1px solid #E8E8F7",
}));

const randomGen = (n: number) => {
  const randomBytes = new Uint32Array(1);
  window.crypto.getRandomValues(randomBytes);
  const maxValue = Math.pow(2, 32) - 1;
  const randomNum = randomBytes[0] / maxValue;
  return Math.floor(randomNum * n);
};

export const Buy = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const coinData = useSelector(
    (state: { cryptoData: { value: Data } }) => state.cryptoData.value
  );
  const max = useSelector(
    (state: { maxValue: { value: Max } }) => state.maxValue.value
  );
  const transaction = useSelector(
    (state: { transaction: { value: Transaction } }) => state.transaction.value
  );
 
  const handleClick = () => {
    const date = new Date();
    let status = "";
    let img = "";
    
    dispatch(total({ total: max.max + transaction.fee * coinData.price }));
    let name = names[randomGen(names.length)] + " " + surnames[randomGen(surnames.length)];
    let p: any = {
      "assets/tick.svg": "#E9F7EC",
      "assets/more_horiz.svg": "#FFF6ED",
      "assets/danger.svg": "#F3E6EB",
    };
    if (
      store.getState().remainingAmountDetails.value.remaining -
        (max.max + transaction.fee * coinData.price) >=
      0
    ) {
      status = "purchased";
      dispatch(
        remaining({
          remaining:
            store.getState().remainingAmountDetails.value.remaining -
            (max.max + transaction.fee * coinData.price),
        })
      );
      let storeValue = store.getState().remainingAmountDetails.value.remaining;
      status = storeValue <= 100 ? status + " (low Balance)" : status;
      img = storeValue <= 100 ? "assets/more_horiz.svg" : "assets/tick.svg";
    } else {
      status = "failed";
      img = "assets/danger.svg";
      
    }
    let Transaction = {
      month: `${months[date.getMonth()]}`,
      date: `${date.getDate()}`,
      image: img,
      tag: `from ${name}`,
      value: `+${(max.max / coinData.price).toFixed(4)}  ${coinData.symbol}`,
      val: `+${USDollar.format(Math.round(max.max))}`,
      status: `${status}`,
      bgColor: `${p[img]}`,
    };

    if (coinData && coinData.transactions) {
      const transactionsCopy = [...coinData.transactions];
      transactionsCopy.unshift(Transaction);
      const coinDataCopy = { ...coinData, transactions: transactionsCopy };
      axios.patch(`${BASE_URL}/data/${coinData.id}`, coinDataCopy);
      navigate(`/buy/details/${Transaction.value}`)
    }
  };
  return (
    <StyledPaper elevation={0}>
      <Stack sx={{ display: "flex", alignItems: "center" }}>
        <TypographyMinet
          variant="caption1"
          sx={{
            fontweight: 500,
            color: "text.secondary",
            padding: "28px 0px 0px 0px",
          }}
        >
          You are Buying
        </TypographyMinet>
        <TypographyMinet
          variant="h6"
          sx={{ fontweight: "400", color: "text.disabled", padding: "12px" }}
        >
          {(max.max / coinData.price).toFixed(7)}
          {coinData.symbol}
        </TypographyMinet>
        <TypographyMinet
          variant="caption1"
          sx={{
            fontweight: 500,
            color: "text.secondary",
            padding: "0px 0px 32px 0px",
          }}
        >
          1{coinData.symbol} = {USDollar.format(coinData.price)}
        </TypographyMinet>
      </Stack>
      <Divider />

      <Stack sx={{ paddingTop: "24px" }}>
        <IconTypo
          image={payment}
          firstText="Payment method"
          secondText="Visa credit ...8845"
        ></IconTypo>
      </Stack>
      <Stack sx={{ padding: "4px 45px" }}>
        <Image src={stepper} alt="stepper" width="2px" height="32px"></Image>
      </Stack>
      <IconTypo
        image={delivery}
        firstText="Delivery fees"
        secondText={`${transaction.fee}${coinData.symbol}`}
      ></IconTypo>
      <Stack sx={{ padding: "4px 45px" }}>
        <Image src={stepper} alt="stepper" width="2px" height="32px"></Image>
      </Stack>
      <Stack sx={{ paddingBottom: "24px" }}>
        <IconTypo
          image={wallet}
          firstText="Deposit to"
          secondText="Bitcoin wallet"
        ></IconTypo>
      </Stack>

      <Divider />
      <Stack sx={{ width: "90%", padding: "32px 24px" }}>
        <TextDot
          variant1="overline"
          variant2="overline"
          fontWeight="400"
          firstText={`${(max.max / coinData.price).toFixed(7)} ${
            coinData.symbol
          } ${" "}`}
          secondText={USDollar.format(max.max)}
        ></TextDot>
        <TextDot
          variant1="overline"
          variant2="overline"
          fontWeight="400"
          firstText="transacton fee "
          secondText={USDollar.format(transaction.fee * coinData.price)}
        ></TextDot>
        <TextDot
          variant1="body1"
          variant2="body1"
          fontWeight="600"
          firstText="Total "
          secondText={USDollar.format(
            max.max + transaction.fee * coinData.price
          )}
        ></TextDot>
      </Stack>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          width: "90%",
          height: "42px",
          padding: "0px 16px",
          borderRadius: "4px",
          backgroundColor: "primary.main",
          margin: "0px 24px 70px 24px",
        }}
      >
        BUY NOW
      </Button>
    </StyledPaper>
  );
};
