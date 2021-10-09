import  React, { useState } from 'react';
import { Typography , Grid} from '@mui/material'
import SendNewMessage from './SendNewMessage'
import NewConversation from './NewConversation'

function CurrentConversation() {

    const [status , setStatus] = useState(false)
    return (
      <>
        <Grid container>
            {
                status ?
                <Grid item md = {12} style = {{border : "2px solid black", minHeight : "80vh"}}>
                
                </Grid>
                :
                <Grid item md = {12} >
                    <NewConversation/>
                </Grid>
            }
           
            <Grid item md = {12} >
                <SendNewMessage/>
            </Grid>
        </Grid>
      </>
    );
  }
  
  export default CurrentConversation;
  