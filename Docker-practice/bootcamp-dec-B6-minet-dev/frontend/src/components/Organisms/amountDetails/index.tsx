import { useEffect, useState } from "react";
import { Card, Paper,styled} from "@mui/material";
import TypographyMinet from "../../Atoms/TypographyMinet";
import Button from "../../Atoms/Button";
import { SliderBar } from "../../Atoms/Slider";
import { useDispatch,useSelector } from "react-redux";
import { max } from "../../../../public/store/features/maxValue";
import { Data, USDollar } from "../../../utils/constants";
const StyledPaper = styled(Paper)(() => ({
  height: "300px",
  width: "100%",
  padding: "24px",
  border: "1px solid #E8E8F7",
}));
const StyledCard = styled(Card)(() => ({
  width: "100%",
  height: "74px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  border: "1px solid #E8E8F7",
}));
const StyledPaperSX = {
  height: "100px",
  padding: "0px 50px",
};


export const AmountDetails = () => {
  const coinData = useSelector(
    (state: { cryptoData: { value: Data } }) => state.cryptoData.value
  );
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number>(0);
  const [valueFormat, setValueFormat] = useState("1 BTC = $2,015,273.74");
  const handleAmount = (event: Event, newValue: number | number[]) => {
    setAmount(newValue as number);
    dispatch(max({ max: newValue as number }));
  };
  const handleClick = () => {
    dispatch(max({ max: 34000 }));
    setAmount(34000);
  };
  useEffect(() => {
    setAmount(0);
    setValueFormat(`1 ${coinData.symbol} = ${USDollar.format(coinData.price)}`);
  }, [coinData]);
  return (
      <StyledPaper elevation={0}>
        <TypographyMinet
          variant="body1"
          sx={{
            fontWeight: "500",
            color: "text.disabled",
            padding: "0px 0px 12px 0px",
          }}
        >
          Amount Details
        </TypographyMinet>
        <StyledCard elevation={0}>
          <TypographyMinet
            variant="subtitle1"
            sx={{
              padding: "23px 16px",
              fontWeight: "500",
              color: "text.disabled",
            }}
          >
            {" "}
            {USDollar.format(amount)}
          </TypographyMinet>
          <Button
            variant="outlined"
            sx={{
              width: "100px",
              height: "42px",
              fontWeight: "500",
              padding: "0px 16px",
              textTransform: "none",
              margin: "16px",
            }}
            onClick={handleClick}
          >
            Buy max
          </Button>
        </StyledCard>

        <Paper sx={StyledPaperSX} elevation={0}>
            <SliderBar
              data-testid="slider"
              size="small"
              sx={{
                color: "text.primary",
                width: "3px",
                height: "100px",
                "& .MuiSlider-valueLabel": {
                  backgroundColor: "transparent",
                  color: "text.secondary",
                  left: "80px",
                  top:"18px"
                },
              }}
              orientation="vertical"
              defaultValue={34000.0}
              aria-label="Amount"
              valueLabelDisplay="on"
              valueLabelFormat={valueFormat}
              min={0}
              max={34000}
              value={amount}
              onChange={handleAmount}
            />
        </Paper>

        <StyledCard elevation={0}>
          <TypographyMinet
            variant="subtitle1"
            sx={{
              padding: "23px 16px",
              fontWeight: "500",
              color: "text.disabled",
            }}
          >
            {(amount / coinData.price).toFixed(7)}
            {coinData.symbol}
          </TypographyMinet>
          <TypographyMinet
            variant="body1"
            sx={{
              padding: "26px 26px",
              fontWeight: "500",
              color: "text.secondary",
            }}
          >
            {coinData.symbol}
          </TypographyMinet>
        </StyledCard>
      </StyledPaper>
  );
};
