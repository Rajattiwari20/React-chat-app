import  React from 'react';
import { Typography , Grid, Paper} from '@mui/material'

import Conversations from './Conversations'
import PresentConversations from './PresentConversations'
function App() {
  return (
    <>
    <Grid container justifyContent = "center"  >
      <Grid item md = {11} style = {{minHeight : "90vh", marginTop : "15px"}} >
        <Paper elevation={3} style = {{width : "100%" , height : "100%", padding : "10px" ,  backgroundColor:  "#FCFCFC"}} >
          <Grid container >
            <Grid item md = {3}  >
              <Conversations/>
            </Grid>
            <Grid item md = {1}  style = {{minHeight : "90vh", borderLeft : "2px solid #C1C1C1"}}>
            </Grid>
            <Grid item md = {7}  >
              <PresentConversations/>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
    </>
  );
}

export default App;
