import { Card, Box, Stack, Tab, Tabs, Chip,styled  } from "@mui/material";
import TypographyMinet from "../../Atoms/TypographyMinet";
import Image from "../../Atoms/Image";
import { SyntheticEvent, useState, useEffect} from "react";
import { theme } from "../../../theme/theme";
import { ThemeProvider } from "@emotion/react";
import { Graph } from "../../Molecules/graph";
import { BASE_URL, TimePeriod  } from "../../../utils/constants";
import axios from "axios";
import upArrow from "../../../../public/assets/images/upArrow.svg";
import downArrow from "../../../../public/assets/images/downArrow.svg";
import info from "../../../../public/assets/images/info.svg";
import portfolio_value from "../../../../public/assets/images/portfolio_value.svg";

const StyledCard = styled(Card)(() => ({
  width: "100%",
  height:"auto",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  padding: "24px 24px 0px 24px",
  borderRadius: "4px",
}));
const StyledBox = styled(Box)(() => ({
  border: "1px solid rgba(158, 150, 150, .3)",
  gap: "12px",
  maxWidth: 400,
  maxHeight: 45,
  marginTop: "1px ",
  paddingBottom: "-3px",
  padding: "0",
}));
const TimePeriodTab = styled(Tab)(() => ({
  alignItems: "center",
  minWidth: "32px",
  minHeight: "36px",
  textTransform: "none",
  padding: "8px",
  margin: "5px",
  fontWeight: 400,
}));

const StyledChip = styled(Chip)(() => ({
  padding: "8px 11px",
  gap: "10px",
  width: "100%",
  height: "36px",
  borderRadius: "4px",
}));

interface Initial {
  name: string;
  totalInvestment: string;
  totalRate: string;
  coinInvestment: string;
  coinRate: string;
}
const InitialState = {
  name: "",
  totalInvestment: "$0.00",
  totalRate: "+0.0%",
  coinInvestment: "",
  coinRate: "",
};
interface Data {
  id:number;
  name: string;
  symbol: string;
  price: number;
  image: string;
  change: string;
  market_capital: string;
  total_investment: string;
  series: {
    name: string;
    data: number[];
  }[];
  circulating_supply: string;
  volume_24: string;
  total_percentage: string;
  coin_percentage: string;
  colors: string[];
  backgroundColor: string;
  transactions: {
    month: string;
    date: string;
    image: string;
    tag: string;
    value: string;
    val: string;
    status: string;
    bgColor: string;
  }[];
}
const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const PortfolioGraph = () => {
  const [data, setData] = useState<Data[]>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [tabs, setTabs] = useState("1M");
  const [investment, setInvestment] = useState<Initial>(InitialState);
  const [chart, setChart] = useState<Data>();
  const [bool, setBool] = useState<boolean>(false);
  const [border, setBorder] = useState<string>("");
  console.log(tabs);
  const handleChange = (e: SyntheticEvent, val: string) => {
    setTabs(val);
  };
  const handleChart = (item: Data) => {
    setChart(item);
    setBool(true);
    setInvestment({
      name: item.name,
      totalInvestment: item.total_investment,
      totalRate: item.total_percentage,
      coinInvestment: USDollar.format(item.price),
      coinRate: item.coin_percentage,
    });
    setBorder(item.colors[0]);
  };
  
  useEffect(() => {
    axios.get(`${BASE_URL}/data`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Data of chips is not fetched");
        setLoading(false);
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <h1 data-testid="header">Loading...</h1>
      ) : (
        <Stack
          gap="10px"
          sx={{ width: "auto", height: "maxHeight"}}
        >
          <Stack>
            <TypographyMinet variant="subtitle1" sx={{ fontsize: "20px" }}>
              My Portfolio Value
            </TypographyMinet>
          </Stack>
          <StyledCard>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Stack gap="50px" direction="row">
                <Stack gap="6px">
                  <Stack direction="row" gap="8px">
                    <TypographyMinet
                      variant="caption1"
                      sx={{
                        color: "text.secondary",
                        fontSize: "14px",
                        fontweight: "500px",
                      }}
                    >
                      Total Investment
                    </TypographyMinet>
                    <Stack sx={{ padding: "4px" }}>
                      {investment.totalRate.charAt(0) === "+" ? (
                        <Image
                          src={upArrow}
                          alt="arrow"
                          width="10px"
                          height="10px"
                        ></Image>
                      ) : (
                        <Image
                          src={downArrow}
                          alt="arrow"
                          width="10px"
                          height="10px"
                        ></Image>
                      )}
                    </Stack>
                    <TypographyMinet
                      variant="overline"
                      sx={{
                        fontsize: "12px",
                        color:
                          investment.totalRate.charAt(0) === "+"
                            ? "success.500"
                            : "error.main",
                        padding: "2px 0px",
                      }}
                    >
                      {investment.totalRate}
                    </TypographyMinet>
                  </Stack>
                  <TypographyMinet
                    variant="h6"
                    sx={{
                      fontsize: "24px",
                      color: "text.disabled",
                      fontweight: "400px",
                    }}
                  >
                    {investment.totalInvestment}
                  </TypographyMinet>
                </Stack>
                <Stack gap="6px">
                  <Stack direction="row" gap="8px">
                    <TypographyMinet
                      variant="caption1"
                      sx={{
                        color: "text.secondary",
                        fontsize: "14px",
                        fontweight: "500px",
                        padding: "2px 0px",
                      }}
                    >
                      {investment.name}
                    </TypographyMinet>
                    {investment.name === "" ? (
                      <Stack data-testid="initialState"></Stack>
                    ) : (
                      <Stack data-testid="investment" direction="row" gap="4px">
                        <Stack sx={{ padding: "4px" }}>
                          <Image
                            data-testid="coin"
                            src={
                              investment.coinRate.charAt(0) === "+"
                                ? upArrow
                                : downArrow
                            }
                            alt="coinarrow"
                            width="10px"
                            height="10px"
                          />
                        </Stack>

                        <TypographyMinet
                          data-testid="coinRate"
                          variant="overline"
                          sx={{
                            fontsize: "12px",
                            color:
                              investment.coinRate.charAt(0) === "+"
                                ? "success.500"
                                : "error.main",
                            padding: "2px",
                          }}
                        >
                          {investment.coinRate}
                        </TypographyMinet>
                      </Stack>
                    )}
                  </Stack>
                  <TypographyMinet
                    variant="h6"
                    sx={{
                      fontsize: "24px",
                      color: "text.disabled",
                      fontweight: "400px",
                    }}
                  >
                    {investment.coinInvestment}
                  </TypographyMinet>
                </Stack>
              </Stack>
              <Stack>
                <StyledBox>
                  <Tabs
                    value={tabs}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons={false}
                    data-testid="tabs"
                    className="tabs"
                    sx={{ borderRadius: "4px" }}
                  > 
                  {
                    TimePeriod.map((item)=>(
                      <TimePeriodTab
                      key={item.key}
                      label={item.label}
                      value={item.value}
                      data-testid={item.key}
                    />
                    ))
                  }
                  </Tabs>
                </StyledBox>
              </Stack>
            </Stack>
            <Stack sx={{width: "100%", height: "100%"}} >
              {bool === false ? (
                <Stack sx={{ margin: "55px 285px 45px 255px" }}>
                  <Image src={portfolio_value} alt="portfolio-value" height="100%"></Image>
                </Stack>
              ) : (
                <Stack sx={{ maigin: "10px", padding: "25px 0px"}}>
                  <Graph
                    id={chart?.name}
                    opacity={0.1}
                    colors={chart?.colors}
                    series={chart?.series}
                    width="100%"
                    height="300px"
                    labelVisible={true}
                    gridVisible={true}
                  />
                </Stack>
              )}
            </Stack>
          </StyledCard>
          <Stack margin="10px" gap="27px">
            <Stack direction="row" gap="250px" sx={{ width: "100%",display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <TypographyMinet variant="body1" sx={{ fontsize: "16px" }}>
                10 coins (3 active)
              </TypographyMinet>
              <Stack direction="row" gap="10px">
                <Image
                  src={info}
                  alt="information icon"
                  width="20px"
                  height="20px"
                ></Image>
                <Stack sx={{ margin: "3px" }}>
                  <TypographyMinet
                    variant="caption2"
                    sx={{
                      fontweight: "400",
                      fontsize: "16px",
                      color: "text.disabled",
                    }}
                  >
                    Click on currency name below to display it on the graph
                  </TypographyMinet>
                </Stack>
              </Stack>
            </Stack>
            {error && <TypographyMinet>{error}</TypographyMinet>}
            <Stack
              direction="row"
              gap="16px"
              sx={{ display: "flex", alignItems:"baseline", width: "100%"}}
            >
                <Tabs
                variant="scrollable"
                scrollButtons={true}
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
              >
                {data &&
                  data.map((item: Data) => (
                    <Tab key={item.name} label = {
                      <StyledChip
                      key={item.name}
                      data-testid={item.name}
                      sx={{
                        backgroundColor: item.backgroundColor,
                        borderColor:
                          investment.name === item.name ? border : "",
                        borderWidth:
                          investment.name === item.name ? "2px" : "0px",
                        color: "text.disabled",
                      }}
                      label={item.name}
                      onClick={() => handleChart(item)}
                      variant="outlined"
                    />
                    } />
                  ))}
                  </Tabs>
            </Stack>
          </Stack>
        </Stack>
      )}
    </ThemeProvider>
  );
};
