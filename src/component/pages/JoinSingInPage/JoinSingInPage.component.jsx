import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SingIn from '../SingIn/SingIn.component';
import Join from '../Join/Join.component';

const JoinSingInPage=()=>{
const [value,setValue]=useState(0)
const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
    return (
        <div elevation={20} className="d-flex flex-column align-items-center" >
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          className="mt-4"
        >
          <Tab label="Sign In" className="mx-3" />
         
          <Tab label="Sign Up" className="mx-3"/>
        </Tabs>
        <TabPanel value={value} index={0}>
       <SingIn handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Join/>
      </TabPanel>
      </div>
      
    )
}

export default JoinSingInPage;