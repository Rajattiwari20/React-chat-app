import  React, {useState, useEffect} from 'react';
import { Typography , Grid, Paper} from '@mui/material'
import Conversations from './Conversations'
import PresentConversations from './PresentConversations'
// import { createContext } from 'react';
import AppContext from './AppContext'

function App() {

  const [newMessage , setNewMessage] = useState([])
  
  return (
    <>
    <AppContext.Provider newMessage = {newMessage} value = {{value1 : setNewMessage ,value2 : newMessage}} >
      <Grid container justifyContent = "center"  >
        <Grid item md = {11} sm = {11} xs = {10} style = {{minHeight : "90vh", marginTop : "15px"}} >
          <Paper elevation={3} style = {{width : "100%" , height : "100%", padding : "10px" ,  backgroundColor:  "#383838"}} >
            <Grid container >
              <Grid item md = {3} sm = {12} xs = {12} >
                <Conversations />
              </Grid>
              <Grid item md = {9} sm = {12} xs = {12} >
                <PresentConversations/>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </AppContext.Provider>
    
    </>
  );
}

export default App;
