import './App.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import Dashboard from './components/dashboard/Dashboard';
import Layout from './components/layoutModule/Layout';


function App() {
  return (
    <Grid container spacing={1}>
      <Grid md={2} >
        <Dashboard/>
      </Grid>
      <Grid md={9} sx={{ marginLeft:'45px'}}>
        <Layout/>
      </Grid>
    </Grid>
  );
}

export default App;
