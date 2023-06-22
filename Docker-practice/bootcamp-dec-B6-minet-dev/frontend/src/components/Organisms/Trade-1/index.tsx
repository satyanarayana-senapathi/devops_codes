import { Box, Tabs, Tab, Card, Stack, Divider, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "../../Atoms/Image";
import { theme } from "../../../theme/theme";
import { Data} from "../../../utils/constants";
import TypographyMinet from "../../Atoms/TypographyMinet";
import { store } from "../../../../public/store/index";
import OverView from "../Overview";
import Wallet from "../Wallet";
import { changed } from "../../../../public/store/features/WatchList";
import upArrow from '../../../../public/assets/images/upArrow.svg'
import downArrow from '../../../../public/assets/images/downArrow.svg'
import starIcon from "../../../../public/assets/star.svg"
import ustarIcon from "../../../../public/assets/ustar.svg"

interface Currencyprops {
  currency: string;
}

const TradeScreen = ({ currency }: Currencyprops) => {
  const [watch, setWatch] = useState(store.getState().WatchSlice.watchList[currency]);
  const [value, setValue] = useState(1);
  const [error, serError] = useState<string | null>(null);
  const [list, setList] = useState<Data[]>();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios
      .get("http://localhost:5000/data")
      .then((res) => setList(res.data))
      .catch(() => serError("Error while fetching data"));
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const toggle = (event: any) => {
    try {
      event.stopPropagation();
      watch ? setWatch(false) : setWatch(true);
      store.dispatch(changed(currency));
    } catch (err) {}
  };

  return (
    <div style={{ backgroundColor: "#FAFCFF" ,padding:"20px 25px 20px 25px"}}>
      <Card
        sx={{ color: "black", boxShadow: "none", border: "1px solid #E8E8F7" }}
      >
        {error && <p>{error}</p>}
        {list &&
          list
            .filter((money) => {
              if (currency === money.name) {
                return money;
              }
            })
            .map((money) => (
              <Stack
                direction={"row"}
                spacing={2}
                padding={2}
                justifyContent="space-between"
                alignItems={"center"}
                key={money.name}
              >
                <Stack
                  direction={"row"}
                  spacing={4}
                  padding={2}
                  alignItems="center"
                >
                  <Image src={money.image} alt={money.name} width={"43px"} />
                  <Stack direction={"column"}>
                    <TypographyMinet variant="h6">{money.name}</TypographyMinet>
                    <Stack direction={"row"} spacing={1} alignItems="center">
                      <TypographyMinet
                        variant="body1"
                        color={theme.palette.text.secondary}
                      >
                        {money.symbol}{" "}
                      </TypographyMinet>
                      <TypographyMinet
                        variant="overline"
                        data-testid="indicator"
                        color={money.change[0]=="+"?theme.palette.success[500]:theme.palette.error.main}
                      >
                        <Image src={money.change[0]=="+"? upArrow : downArrow} alt="arrow" />
                        &nbsp;{money.change}
                      </TypographyMinet>
                    </Stack>
                  </Stack>
                  <Divider orientation="vertical" flexItem />
                  <Stack direction={"column"} spacing={1}>
                    <TypographyMinet
                      variant="caption1"
                      color={theme.palette.text.secondary}
                    >
                      Market cap
                    </TypographyMinet>
                    <TypographyMinet
                      variant="body1"
                      color={theme.palette.text.disabled}
                    >
                      {money.market_capital}
                    </TypographyMinet>
                  </Stack>
                  <Stack direction={"column"} spacing={1}>
                    <TypographyMinet
                      variant="caption1"
                      color={theme.palette.text.secondary}
                    >
                      Vol.24H
                    </TypographyMinet>
                    <TypographyMinet
                      variant="body1"
                      color={theme.palette.text.disabled}
                    >
                      {money.volume_24}
                    </TypographyMinet>
                  </Stack>
                  <Stack direction={"column"} spacing={1}>
                    <TypographyMinet
                      variant="caption1"
                      color={theme.palette.text.secondary}
                    >
                      Circulating Supply
                    </TypographyMinet>
                    <TypographyMinet
                      variant="body1"
                      color={theme.palette.text.disabled}
                    >
                      {money.circulating_supply}
                    </TypographyMinet>
                  </Stack>
                </Stack>

                <Button
                  variant="outlined"
                  onClick={toggle}
                  sx={{ display: "flex", gap: 1, p: "10px" }}
                >
                  <img
                    data-testid="checkedstar"
                    src={watch ?starIcon : ustarIcon}
                    alt="checkedstar"
                    style={{ cursor: "pointer" }}
                  />
                  <TypographyMinet
                    sx={{
                      mt: "3.5px",
                      p: "0px",
                      lineHeight: "0px",
                      height: "max-content",
                      textAlign: "center",
                    }}
                  >
                    {watch ? "ADDED TO WATCHLIST" : "ADD TO WATCHLIST"}
                  </TypographyMinet>
                </Button>
              </Stack>
            ))}
      </Card>
      <Box
        sx={{ width: "100%", borderBottom: "1px solid #E8E8F7", mt: "24px" }}
      >
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
        >
          <Tab label="Overview" value={1} />
          <Tab label="Wallet" value={2} />
        </Tabs>
      </Box>
      {value == 1 ? (
        <OverView coinName={currency} />
      ) : (
        <Wallet
          coinName={currency}
          mock={function (arg0: string): void {}}
        />
      )}
    </div>
  );
};

export default TradeScreen;
