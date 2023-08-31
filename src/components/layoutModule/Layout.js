import { Grid, Link, Paper, Typography, TextField, Select, Divider, InputLabel, FormControl} from '@mui/material'
import React from 'react'

import Breadcrumbs from '@mui/material/Breadcrumbs';
// import { Dropdown, Menu } from '@mui/base';
import { MenuItem } from '@mui/base/MenuItem';


import LayoutProgram from './LayoutProgram.js'


const Layout = () => {
  const [facingDir, setfacingDir] = React.useState('');

  const handleChange = (event) => {
    setfacingDir(event.target.value);
  };

  return (
    <Grid container marginLeft='20px'>
        <Grid item md={12} sx={{ border: 1, height: '20vh'}}>
            <Breadcrumbs sx={{marginTop: '12vh', display: 'flex', justifyContent: 'center'}}>
                <Link underline="hover" color="inherit" href="/">Home</Link>
                <Link underline="hover" color="inherit" href="/">Dashboard</Link>
                <Typography color="text.primary">Factory Layout</Typography>
            </Breadcrumbs>
        </Grid>
        <Grid item md={8} sx={{ border: 1, height: '80vh'}}>
           <LayoutProgram/>
        </Grid>
        <Grid item md={4} sx={{ border: 1, height: '80vh', display: 'flex', justifyContent: 'center'}}>
            <Paper elevation={18} sx={{ height: '200px', width: '300px', borderRadius:'10px', 
            padding:'10px', display: 'flex', flexDirection:'column', 
            justifyContent: 'center', marginTop: '30px'}}>
                
                <Typography sx={{display: 'flex', justifyContent: 'center', marginBottom: '5px'}}>Settings</Typography>
                
                <Divider/>

                <TextField id="outlined-basic" label="Layout Name"  sx={{margin: '20px'}}/>

                <FormControl fullWidth> {/*doesnt work*/}
                <InputLabel id="demo-simple-select-label">Initial Facing Direction</InputLabel>
                    <Select value={facingDir} label="Face_Direction" onChange={handleChange}>
                        <MenuItem value={'UP'}>UP</MenuItem>
                        <MenuItem value={'RIGHT'}>RIGHT</MenuItem>
                        <MenuItem value={'DOWN'}>DOWN</MenuItem>
                        <MenuItem value={'LEFT'}>LEFT</MenuItem>
                    </Select>
                </FormControl>
            </Paper>
        </Grid>
    </Grid>
  )
}

export default Layout