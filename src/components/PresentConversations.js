import  React from 'react';
import { Typography , Grid} from '@mui/material'
import CurrentConversation from './CurrentConversation'

function PresentConversations() {
    return (
      <>
        <Grid container>
            <Grid item md = {12} xs = {12} sm = {12} style = {{minHeight : "90vh", backgroundColor : "#EAEEF3"}} >
                <CurrentConversation/>
            </Grid>
        </Grid>
      </>
    );
  }
  
  export default PresentConversations;
  