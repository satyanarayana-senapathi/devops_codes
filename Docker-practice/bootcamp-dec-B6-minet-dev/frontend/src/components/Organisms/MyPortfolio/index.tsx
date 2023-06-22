import { Divider, Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { store } from "../../../../public/store";
import { theme } from "../../../theme/theme";
import { Data, USDollar,Remaining } from "../../../utils/constants";
import Image from "../../Atoms/Image";
import TypographyMinet from "../../Atoms/TypographyMinet";
import Refresh from '../../../../public/assets/refresh.svg'
import Gridblue from '../../../../public/assets/gridblue.svg'
import UsdCoin from '../../../../public/assets/rupee.svg'

const MyPortfolio = () => {
  const remaining = useSelector((state: {remainingAmountDetails : { value: Remaining}})=> state.remainingAmountDetails.value)
  const [error, setError] = useState<string | null>(null);
  const [list, setList] = useState<Data[]>();
  useEffect(() => {
    stores();
  }, [store]);
  const stores = async () => {
    await axios
      .get("http://localhost:5000/data")
      .then((res) => setList(res.data))
      .catch(() => setError("Error fetching data"));
  };
  const navigate =useNavigate()
  const openCoin = (name:string) => {
    navigate(`/trade/${name}`)
  };
  return (
    <Stack direction={"column"} spacing={3} sx={{backgroundColor: "#fff"}}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        padding="8px 32px 0 24px"
      >
        <TypographyMinet variant="subtitle1" fontWeight={500}>
          MyPortfolio
        </TypographyMinet>
        <Stack direction={"row"} spacing={2}>
          <Image src={Refresh} alt="refresh" />
          <Image src={Gridblue} alt="grid" />
        </Stack>
      </Stack>
      <Stack
        maxHeight={"216px"}
        padding="8px 32px 0 24px"
        spacing={3}
        sx={{
          overflowY: "scroll",
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
        }}
      >
        {error && <p>{error}</p>}
        {list &&
          list
            .filter((key) => {
              return store.getState().WatchSlice.watchList[key.name];
            })
            .map((key) => (
              <Stack
              data-testid='div-s'
                direction={"row"}
                justifyContent={"space-between"}
                key={key.name}
                p='7px 0 7px 0'
                sx={{
                  "&:hover": {
                    boxShadow: " 0px 1px 10px rgba(44, 44, 44, 0.08) ",
                    transition: "all 0.3s ease-in-out",
                  },
                }}
                onClick={()=>{openCoin(key.name)}}
              >
                <Stack direction={"column"} spacing={2} width={"100%"}>
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Stack direction={"row"} spacing={3}>
                      <Image src={key.image} alt="bitcoin" width="42px" />
                      <Stack direction={"column"} spacing={1}>
                        <TypographyMinet variant={"body1"} fontWeight={500}>
                          {key.name}
                        </TypographyMinet>
                        <TypographyMinet variant={"caption1"} color="#7D7D89">
                          {key.symbol}
                        </TypographyMinet>
                      </Stack>
                    </Stack>
                    <Stack direction={"column"} spacing={1}>
                      <TypographyMinet variant={"body1"}>
                        {USDollar.format(key.price)}
                      </TypographyMinet>
                      <Stack alignItems={"end"}>
                        {parseInt(key.change) > 0 ? (
                          <TypographyMinet
                            variant={"caption1"}
                            color={"#20B03F"}
                            alignItems="end"
                          >
                            {key.change}
                          </TypographyMinet>
                        ) : (
                          <TypographyMinet
                            variant={"caption1"}
                            color={"#B71A33"}
                          >
                            {key.change}
                          </TypographyMinet>
                        )}
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            ))}
      </Stack>
      <Stack alignItems="center">
        <Divider sx={{ width: "94%" }} />
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} p="0 5% 0 5%">
        <TypographyMinet variant="body1" color={"#7D7D89"}>
          Total Balance
        </TypographyMinet>
        <TypographyMinet>{USDollar.format((34000 -remaining.remaining))}</TypographyMinet>
       
      </Stack>
      <Stack alignItems="center">
        <Divider sx={{ width: "94%" }} />
      </Stack>
      <TypographyMinet variant="subtitle1" p='8px 24px 0 24px'>My wallets</TypographyMinet>
      <Stack direction={'row'} justifyContent='space-between' p='8px 24px 0 24px'>
        <Stack spacing={2} direction={"row"}>
          <Stack>
            <Image src={UsdCoin} alt="usdcoin" />
          </Stack>
          <Stack direction={"column"} spacing={1}>
            <TypographyMinet variant="body1">USD Coin</TypographyMinet>
            <TypographyMinet variant="caption2" color={'#7D7D89'}>US Dollar</TypographyMinet>
          </Stack>
        </Stack>
        <TypographyMinet variant="body1">{USDollar.format(remaining.remaining)}</TypographyMinet>
        
      </Stack>
    </Stack>
  );
};

export default MyPortfolio;


