import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, Box, Chip, Stack } from "@mui/material";
import Button from "../../Atoms/Button";
import { useSelector } from "react-redux";
import TypographyMinet from "../../Atoms/TypographyMinet";
import transcImage from "../../../../public/assets/transc.svg";
import { transactions } from "../../../utils/constants";
import Image from "../../Atoms/Image";
import { theme } from "../../../theme/theme";

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  transactions: Transaction[];
}

interface Transaction {
  id: string;
  month: string;
  date: string;
  image: string;
  tag: string;
  value: string;
  val: string;
  status: string;
  bgColor: string;
  coinData: CoinData;
}

interface Remaining {
  remaining: number;
}
export let sortedTransactions: any = [];
const RecentTransactions = () => {
  const remaining = useSelector(
    (state: { remainingAmountDetails: { value: Remaining } }) =>
      state.remainingAmountDetails.value
  );
  console.log(remaining);
  const [transactionsData, setTransactions] = useState<Transaction[]>([]);
  const [showTransactions, setShowTransactions] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const handleClickViewAll = () => {
    setShowTransactions(true);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((response) => {
        const coinData = response.data;
        const allTransactions: Transaction[] = [];
        console.log(allTransactions);

        coinData.forEach((coin: CoinData) => {
          const transaction = coin.transactions[0];
          transaction.coinData = {
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            transactions: coin.transactions,
          };
          allTransactions.push(transaction);
          setLoading(false);
        });

        setTransactions(allTransactions);
      })
      .catch((_err) => {
        setError("Data is not fetched");
        setLoading(false);
      });
  }, [remaining]);

  return (
    <>
      {loading ? (
        <h1 data-testid="header">Loading...</h1>
      ) : (
        <div>
          {error && <TypographyMinet>{error}</TypographyMinet>}
          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width="100%"
            marginTop={"30px"}
          >
            <TypographyMinet variant="h6" gutterBottom>
              Recent Transactions
            </TypographyMinet>
            <Button variant="text" onClick={handleClickViewAll}>
              View All
            </Button>
          </Stack>

          {showTransactions ? (
            <>
              <Stack data-testid="transactions" spacing={5} maxHeight="450px" sx={{overflowY:"scroll",
            "&::-webkit-scrollbar": {
              width: 6,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "",
            },
            "&:hover::-webkit-scrollbar-thumb": {
              backgroundColor: `${theme.palette.text.primary}`,
            },
            }}>
                {transactionsData.map(
                  ({
                    id,
                    month,
                    date,
                    status,
                    image,
                    value,
                    val,
                    bgColor,
                    coinData: { name, symbol },
                  }) => (
                    <Stack
                      key={id}
                      data-testid={name}
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={5}
                    >
                      <Stack
                        direction="column"
                        alignItems="flex-start"
                        spacing={1}
                      >
                        <TypographyMinet variant="caption2">{` ${month} ${date}`}</TypographyMinet>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Avatar sx={{ bgcolor: `${bgColor}` }}>
                            <Image src={transactions[image]} alt={name} />
                          </Avatar>
                          <Stack direction="column">
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={1}
                            >
                              <TypographyMinet variant="body1">
                                {name}
                              </TypographyMinet>
                              <TypographyMinet variant="body1">
                                {symbol}
                              </TypographyMinet>
                            </Stack>
                            <Chip label={status} color="default" size="small" />
                          </Stack>
                        </Stack>
                      </Stack>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-end"
                        sx={{ width: "100%" }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            textAlign: "right",
                            paddingTop: "10px",
                          }}
                        >
                          <TypographyMinet variant="body1">
                            {value}
                          </TypographyMinet>
                          <TypographyMinet variant="caption2" color="#7D7D89">
                            {val}
                          </TypographyMinet>
                        </Box>
                      </Stack>
                    </Stack>
                  )
                )}
              </Stack>
            </>
          ) : (
            <Stack
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              sx={{ mt: 2 }}
            >
              <img
                src={transcImage}
                alt="transactions"
                height={120}
                width="100%"
                style={{ padding: "50px 35px 0px 0px" }}
              />
              <TypographyMinet variant="body1" color="#7D7D89">
                You don't own any crypto. Send yourself some crypto to get
                started.
              </TypographyMinet>
            </Stack>
          )}
        </div>
      )}
    </>
  );
};

export default RecentTransactions;
