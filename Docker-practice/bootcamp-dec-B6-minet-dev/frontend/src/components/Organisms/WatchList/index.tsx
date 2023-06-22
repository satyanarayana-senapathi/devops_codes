import { Card, Chip, Divider, IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "../../Atoms/Image";
import TypographyMinet from "../../Atoms/TypographyMinet";
import { Data, USDollar } from "../../../utils/constants";
import axios from "axios";
import { Graph } from "../../Molecules/graph";
import { store } from "../../../../public/store";
import { useNavigate } from "react-router-dom";
import Leftside from '../../../../public/assets/leftside.svg'
import Pencil from '../../../../public/assets/pencil.svg'
import arrow from '../../../../public/assets/arrow.svg'
import redarrow from '../../../../public/assets/images/downArrow.svg'
import gridmore from '../../../../public/assets/gridmore.svg'
import grid from '../../../../public/assets/grid.svg'


const WatchList = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [list, setList] = useState<Data[]>();
  useEffect(() => {
    stores();
  }, [store]);
  const navigate = useNavigate();
  const stores = async () => {
    await axios
      .get("http://localhost:5000/data")
      .then((res) => setList(res.data))
      .catch(() => setError("Error while fetching data"));
  };

  const handleAssets = () => {
    navigate("/trade/assets")
  };
  const handleGrid = () => {
    setOpen((openPrev) => !openPrev);
  };
  const handleWatchList = () => {
   navigate("/trade/watchlist")
  };
  const handleOpenCoin=(name:string)=>{
    navigate(`/trade/${name}`)
  }
  return (
    <Stack direction={"column"} spacing={'14px'}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack
          direction={"row"}
          gap={2}
          alignItems='center'
        >
          <TypographyMinet variant="subtitle1">Watchlist</TypographyMinet>
          <Divider orientation="vertical" flexItem sx={{ width: "auto",height:'70%',color:'#E8E8F7',mt:'4px' }} />
          <TypographyMinet
            color={"#0052FF"}
            onClick={handleAssets}
            textAlign='start'
            sx={{cursor:'pointer'}} 
          >
            Discover assets
            <IconButton>
              <Image src={Leftside} alt="leftside" />
            </IconButton>
          </TypographyMinet>
        </Stack>
        <Stack
          direction={"row"}
          gap={1}
          alignItems='center'
        >
          <TypographyMinet color={"#0052FF"} onClick={handleWatchList} sx={{cursor:'pointer'}}>
            View Watchlist
            <IconButton>
              <Image src={Pencil} alt="pencil" />
            </IconButton>
          </TypographyMinet>
          <Divider orientation="vertical" flexItem sx={{ width: "auto",height:'70%',color:'#E8E8F7',mt:'4px' }} />
          <IconButton data-testid="grid" onClick={handleGrid}>
            <Image src={gridmore} alt="grid" />
          </IconButton>
          <IconButton>
            <Image src={grid} alt="gridMore" />
          </IconButton>
        </Stack>
      </Stack>
      {error && <p>{error}</p>}
      {open ? (
          <Stack direction={"row"} flexWrap="wrap" justifyContent={'space-between'} gap={5} maxHeight='300px'sx={{overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display:'none'
          }
        }}>
            {list && list.filter(key=>{
              return(store.getState().WatchSlice.watchList[key.name])
            }).map(key=>(
            <Card sx={{ width: "45%",height:'100px', p: "1rem" ,boxShadow:'none',border:'1px solid #E8E8F7'}} key={key.name} onClick={()=>{handleOpenCoin(key.name)}}>
              <Stack direction={"row"} spacing={2}>
                <Stack>
                  <Image src={key.image} alt={key.name} width='43px'/>
                </Stack>
                <Stack
                  direction={"column"}
                 spacing={2}
                >
                  <Stack spacing={1}>
                    <TypographyMinet variant="body1" color={"black"}>{key.name}</TypographyMinet>
                    <TypographyMinet variant="body1" color={"black"} width={'102px'}>
                      {USDollar.format(key.price)}
                    </TypographyMinet>
                  </Stack>
                  <Stack>
                    <Chip
                      label="24 h"
                      sx={{ height: "32px", width: "70px", p: "1px" }}
                    />
                  </Stack>
                </Stack>
                <Stack>
                  <Stack alignItems={"end"}>
                  {(parseInt(key.change) >0)?
                    (<TypographyMinet color='#20B03F'>
                      <Image src={arrow} alt="uparrow" /> {key.change}
                    </TypographyMinet>)
                    :(<TypographyMinet color='#B71A33'>
                      <Image src={redarrow} alt="downarrow" /> {key.change}
                    </TypographyMinet>)
                  }
                  </Stack>
                  <Graph series={[key.series[0]]} gridVisible={false} labelVisible={false} opacity={0.1} colors={[key.colors[0]]} width={'100%'} height='80px'/>
                </Stack>
              </Stack>
            </Card>
                 ))}
        </Stack>
      ) : (
        <Card data-testid="card" sx={{ width: "97%", height: "130px",  p: "1rem 1rem 0 1rem" ,boxShadow:'none',border:'1px solid #E8E8F7'}} onClick={()=>{handleOpenCoin("Bitcoin")}}>
          {error && <p>{error}</p>}
          {list && list.filter(key => {if(key.name==='Bitcoin'){
              return key
        }}).map(key=>(
          <Stack direction={"row"} key={key.name} spacing={3}>
            <Stack>
              <Image src={key.image} alt={key.name}  width={'42px'}/>
            </Stack>
            <Stack direction={"column"} justifyContent="space-between">
              <Stack  spacing={1}>
                <TypographyMinet color={"black"}>{key.name}</TypographyMinet>
                <TypographyMinet color={"black"}>{USDollar.format(key.price)}</TypographyMinet>
              </Stack>
              <Stack pb={5}>
                <Chip
                  label="24 h"
                  sx={{width: "60%", p: "1px" }}
                />
              </Stack>
            </Stack>
            <Stack width="100%" spacing={0}>
              <Stack alignItems={"end"}>
                <TypographyMinet color="#20B03F">
                  <Image src={arrow} alt="uparrow" /> {key.change}
                </TypographyMinet>
              </Stack>
              <Graph series={[key.series[0]]} gridVisible={false} labelVisible={false} opacity={0.1} colors={['#20B03F']} width='100%' height="100px"/>
            </Stack>
          </Stack>
          ))}
        </Card>
      )}
    </Stack>
  );
};

export default WatchList;
