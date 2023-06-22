import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import NavBar from '../../Molecules/NavBar'
import AppHeader from '../../Molecules/AppHeader'
import { Footer } from '../../Molecules/footer'
import { Provider } from 'react-redux'
import { store } from '../../../../public/store'
interface TemplateType {
    name:string,
    content:ReactNode
}
const TemplateHome = ({name,content}:TemplateType) => {
  return (
    <Provider store={store}>
    <Box display="grid" gridTemplateColumns="repeat(20, 1fr)" height="100vh" sx={{backgroundColor: "#FAFCFF"}}>
    <Box gridColumn="span 1">
      <NavBar/>
    </Box>
    <Box gridColumn="span 19">
     <Box display="grid" gridTemplateColumns="repeat(16, 1fr)" height="max-content">
          <Box gridColumn="span 16"><AppHeader name={name} accounts={["name1","name2"]}/></Box>
          <Box  gridColumn="span 16" sx={{backgroundColor: "#FAFCFF"}}>
           {
             content
           }
          </Box>
          <Box gridColumn="span 16"><Footer mock={(args)=>{}}/></Box>
     </Box>
    </Box>
  </Box>
  </Provider>
  )
}

export default TemplateHome