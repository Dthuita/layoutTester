import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';

//, PieChartIcon, HandymanIcon
// import {DashboardIcon} from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PieChartIcon from '@mui/icons-material/PieChart';
import HandymanIcon from '@mui/icons-material/Handyman';


import React from 'react'



const Dashboard = () => {

    const icons = [
        {
            comp: <DashboardIcon/>,
            text: 'Dashboard'
        }, 
        {
            comp: <PieChartIcon/>,
            text: 'Reports'
        },
        {
            comp: <HandymanIcon/>,
            text: 'Simulation'
        }
    ]
  return (
    <Drawer anchor='left' variant='permanent'>
        <Box p={2} width='250px' textAlign='center'>
            <Typography variant='h5'>Hello World</Typography>
            <hr/>
            <List>
                {icons.map( icon => (
                    <ListItemButton key={icon.text}>
                    <ListItemIcon>{icon.comp}</ListItemIcon>
                    <ListItemText primary={icon.text}/>
                    </ListItemButton>
                ))}
            </List>
            <List sx={{marginTop:'500px'}}>
                <hr/>
                <ListItemButton sx={{textAlign: 'center'}}>
                <ListItemText primary='Sign Out'/>
                </ListItemButton>
            </List>
        </Box>
    </Drawer>
  );
}

export default Dashboard