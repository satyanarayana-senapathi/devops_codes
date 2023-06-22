import { Box, Button, Card, Stack, styled } from "@mui/material";
import Image from "../../Atoms/Image";
import { theme } from "../../../theme/theme";
import { useEffect, useState } from "react";
import axios from "axios";
import TypographyMinet from "../../Atoms/TypographyMinet";
import { Data, USDollar } from "../../../utils/constants";
import { Graph } from "../../Molecules/graph";
import upArrow from '../../../../public/assets/images/upArrow.svg'
import downArrow from '../../../../public/assets/images/downArrow.svg'
import globe from "../../../../public/assets/globe.svg"
import newPage from "../../../../public/assets/newpage.svg"
interface Currency {
  coinName: string;
}

const StyledButton = styled(Button)`
  border-radius: 100%;
  color: ${theme.palette.text.secondary};
`;

const OverView = ({ coinName }: Currency) => {
  const [list, setList] = useState<Data[]>();
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    store();
  }, []);
  const store = async () => {
    await axios
      .get("http://localhost:5000/data")
      .then((res) => setList(res.data))
      .catch(() => setError("Error while fetching data"));
  };
  const percentage = (previous: number) => {
    let currentVal = 0;
    list &&
      list.filter((key) => {
        if (coinName === key.name) {
          currentVal = key.price;
        }
      });
    const value = (previous / currentVal) * 100;
    const precent = value.toString().split(".")[0];
    return `${precent}`;
  };
  return (
    <>
      <Card sx={{ mt: "24px", padding: "24px",boxShadow:'none',border:'1px solid #E8E8F7' }}>
        {error && <p>{error}</p>}
        {list &&
          list
            .filter((money) => {
              if (coinName === money.name) {
                return money;
              }
            })
            .map((money) => (
              <>
                <Stack direction={"row"} justifyContent="space-between">
                  <Stack direction={"column"} spacing={1}>
                    <TypographyMinet
                      variant="caption1"
                      color={theme.palette.text.secondary}
                    >
                      Current Value
                    </TypographyMinet>
                    <TypographyMinet
                      variant="h6"
                      color={theme.palette.text.disabled}
                    >
                      {money.total_investment}
                    </TypographyMinet>
                    <TypographyMinet
                      variant="caption2"
                      data-testid="indicatorOverview"
                      color={money.change[0]=="+"?theme.palette.success[500]:theme.palette.error.main}
                    >
                       <Image src={money.change[0]=="+"? upArrow:downArrow} alt="arrow" />
                      &nbsp;{money.change}
                    </TypographyMinet>
                  </Stack>
                  <Box
                    sx={{
                      border: "1px solid #E8E8F7",
                      borderRadius: "4px",
                      height: "50%",
                    }}
                  >
                    <Stack direction={"row"}>
                      <StyledButton variant="text">1H</StyledButton>
                      <StyledButton variant="text">24H</StyledButton>
                      <StyledButton variant="text">1W</StyledButton>
                      <StyledButton variant="text">1M</StyledButton>
                      <StyledButton variant="text">1Y</StyledButton>
                      <StyledButton variant="text">ALL</StyledButton>
                    </Stack>
                  </Box>
                </Stack>
                <Graph
                  height={"300px"}
                  width={"100%"}
                  colors={[
                    theme.palette.warning.main,
                    theme.palette.warning.light,
                  ]}
                  opacity={0.15}
                  id={"graph"}
                  series={[money.series[0]]}
                  gridVisible={true}
                  labelVisible={true}

                />
              </>
            ))}
      </Card>
      <Stack direction={"row"} justifyContent="space-between" mt="24px">
        <Stack direction={"column"} spacing={1} width="70%">
          <Stack direction={"column"} spacing={1}>
            <TypographyMinet variant="body1">About {coinName}</TypographyMinet>
            <TypographyMinet variant="body2">
              The world’s first cryptocurrency, {coinName} is stored and
              exchanged securely on the internet through a digital ledger known
              as a blockchain. {coinName} are divisible into smaller units known
              as satoshi each satoshi is worth 0.00000001 {coinName}.
            </TypographyMinet>
          </Stack>
          <Stack direction={"column"} spacing={1}>
            <TypographyMinet variant="body1">Resources</TypographyMinet>
            <Stack direction={"row"} gap={1}>
              <Image src={globe} alt="globe" />
              <TypographyMinet
                variant="body2"
                color={theme.palette.primary.main}
              >
                Official Website
              </TypographyMinet>
            </Stack>
            <Stack direction={"row"} gap={1}>
              <Image src={newPage} alt="newpage" />
              <TypographyMinet
                variant="body2"
                color={theme.palette.primary.main}
              >
                White Paper
              </TypographyMinet>
            </Stack>
          </Stack>
        </Stack>
        <Card
          sx={{
            padding: "8px",
            width: "25%",
            height: "300px",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: 10,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "disableColor",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `${theme.palette.text.primary}`,
            },
          }}
        >
          <Stack direction={"column"} spacing={3}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              pl={2}
              pr={3}
            >
              <TypographyMinet
                variant="subtitle1"
                color={theme.palette.text.disabled}
              >
                Price correlation with
              </TypographyMinet>
            </Stack>
            <Stack
              direction={"column"}
              spacing={4}
              padding={3}
              justifyContent={"space-between"}
            >
              {error && <p>{error}</p>}
              {list &&
                list.map((key) => (
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    key={key.name}
                  >
                    <Stack direction={"row"} spacing={3}>
                      <Image src={key.image} alt={key.name} width="42px" height="42px"/>
                      <Stack direction={"column"}>
                        <TypographyMinet
                          variant={"body1"}
                          color={theme.palette.text.disabled}
                        >
                          {key.name}
                        </TypographyMinet>
                        <TypographyMinet
                          variant={"caption2"}
                          color={theme.palette.text.secondary}
                        >
                          Moves tightly together
                        </TypographyMinet>
                      </Stack>
                    </Stack>
                    <Stack direction={"column"} alignItems="end">
                      <TypographyMinet
                        variant={"body1"}
                        color={theme.palette.text.disabled}
                      >
                       {USDollar.format(key.price)}
                      </TypographyMinet>
                      <TypographyMinet
                        variant={"caption2"}
                        color={theme.palette.text.secondary}
                      >
                        {percentage(key.price)}%
                      </TypographyMinet>
                    </Stack>
                  </Stack>
                ))}
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </>
  );
};

export default OverView;
