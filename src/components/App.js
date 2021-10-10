import  React from 'react';
import { Typography , Grid, Paper} from '@mui/material'

import Conversations from './Conversations'
import PresentConversations from './PresentConversations'
function App() {
  return (
    <>
    <Grid container justifyContent = "center"  >
      <Grid item md = {11} sm = {11} xs = {10} style = {{minHeight : "90vh", marginTop : "15px"}} >
        <Paper elevation={3} style = {{width : "100%" , height : "100%", padding : "10px" ,  backgroundColor:  "#FCFCFC"}} >
          <Grid container >
            <Grid item md = {3} sm = {12} xs = {12} >
              <Conversations/>
            </Grid>
            <Grid item md = {9} sm = {12} xs = {12} >
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
