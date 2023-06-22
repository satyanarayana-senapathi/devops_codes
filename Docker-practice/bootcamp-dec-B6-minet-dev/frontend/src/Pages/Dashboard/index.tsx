import { Box, Stack } from '@mui/material'
import React, { ReactNode} from 'react'
import WatchList from '../../components/Organisms/WatchList'
import MyPortfolio from '../../components/Organisms/MyPortfolio'
import { PortfolioGraph } from '../../components/Organisms/PortfolioGraph'
import RecentTransactions from '../../components/Organisms/recentTransaction'
import TemplateHome from  '../../components/Templates/TemplateHome'

const Dashboard = () => {
     const Content:ReactNode =  <Box display="grid" gridTemplateColumns="repeat(20, 1fr)"  height="140vh">
     <Box gridColumn="span 14" padding="25px">
     <Stack direction="column" gap={"25px"}>
          <Stack sx={{width:"100%",textAlign:"justify"}}>
            <WatchList/>                 
          </Stack>
          <Stack sx={{width:"100%",textAlign:"justify"}}>
             <PortfolioGraph/>               
          </Stack>
     </Stack>
    </Box>
    <Box gridColumn="span 6" padding="18px" borderLeft={"1px solid rgb(240, 240, 240)" } sx={{backgroundColor:"#fff"}}>
     <Stack sx={{width:"100%",textAlign:"justify" }} direction="column" >
      <MyPortfolio/>
     <RecentTransactions/>
     </Stack>
    </Box>
</Box>
  return (
  <TemplateHome name="Dashboard"  content={Content} />
);
};
 
export default Dashboard