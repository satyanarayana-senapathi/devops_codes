import {
  Avatar,
  Box,
  Card,
  Chip,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";
import Image from "../../Atoms/Image";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Dropdown } from "../../Atoms/dropdown";
import { useState, useEffect } from "react";
import axios from "axios";
import TypographyMinet from "../../Atoms/TypographyMinet";
import { Data, Remaining, USDollar, transactions } from "../../../utils/constants";
import remaining from "../../../../public/store/features/remaining";
import { useSelector } from "react-redux";

interface Coin {
  coinName: string;
  mock: (arg0: string) => void;
}

type Transactions = {
  month: string;
  date: string;
  image: string;
  tag: string;
  value: string;
  val: string;
  status: string;
  bgColor: string;
};

const Wallet = ({ coinName, mock }: Coin) => {
  const remaining = useSelector(
    (state: { remainingAmountDetails: { value: Remaining } }) =>
      state.remainingAmountDetails.value
  );
  const [list, setList] = useState<Transactions[]>([
    {
      "month": "mar",
      "date": "27",
      "image": "assets/tick.svg",
      "tag": "from Jason Smith",
      "value": "+0.0000",
      "val": "+$0.00",
      "status": "purchased",
      "bgColor": "#E9F7EC"
    }]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    store();
  }, []);
  const store = async () => {
    await axios
      .get("http://localhost:5000/data")
      .then((res) => {
        res.data.filter((key: Data) => {
          if (coinName === key.name) {
            setList(key.transactions);
          }
        });
      })
      .catch(() => setError("Error while fetching data"));
  };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#F2F2F7",
          borderRadius: "2px",
          padding: "16px",
          mt: "20px",
        }}
      >
        <TypographyMinet variant="subtitle1">
          Total balance {USDollar.format(34000 - remaining.remaining)}
        </TypographyMinet>
      </Box>
      <Stack
        direction={"row"}
        spacing={2}
        padding={2}
        justifyContent={"flex-end"}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 330,
            height: "40px",
            boxShadow: "none",
            border: "1px solid #E8E8F7",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search all assets"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <FilterListIcon sx={{ color: "#4B4B60" }} />
          </IconButton>
        </Paper>
        <Dropdown
          Menu={["1M", "2M", "3M"]}
          sx={{ height: "44px" }}
          mock={mock}
        />
      </Stack>
      <Card
        sx={{
          padding: "24px",
          mt: "12px",
          color: "black",
          boxShadow: "none",
          border: "1px solid #E8E8F7",
        }}
      >
        {error && <p>{error}</p>}
        { list.map((key) => (
            <Stack key={coinName}>
              <Stack direction={"row"} justifyContent="space-between" pb="20px">
                <Stack direction={"row"} spacing={3} pt="12px">
                  <Stack direction={"column"} alignItems="center">
                    <TypographyMinet color="#7D7D89" variant="caption2">
                      {key.month}
                    </TypographyMinet>
                    <TypographyMinet variant="subtitle2">
                      {key.date}
                    </TypographyMinet>
                  </Stack>
                  <Avatar sx={{ bgcolor: `${key.bgColor}` }}>
                    <Image src={transactions[key.image]} alt={coinName} />
                  </Avatar>
                  <Stack direction={"column"}>
                    <TypographyMinet variant="body1">
                      {coinName}
                    </TypographyMinet>
                    <TypographyMinet color="#7D7D89" variant="caption2">
                      {key.tag}{" "}
                      <Chip
                        label={key.status}
                        sx={{ color: "black", padding: "0" }}
                      />
                    </TypographyMinet>
                  </Stack>
                </Stack>
                <Stack direction={"column"} spacing={1} pt="12px">
                  <TypographyMinet variant="body1">{key.value}</TypographyMinet>
                  <Stack alignItems={"flex-end"}>
                    <TypographyMinet color="#7D7D89" variant="caption2">
                      {key.val}
                    </TypographyMinet>
                  </Stack>
                </Stack>
              </Stack>
              <Divider />
            </Stack>
          ))}
      </Card>
    </div>
  );
};

export default Wallet;
