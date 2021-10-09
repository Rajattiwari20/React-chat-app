import  React, { useState } from 'react';
import { Typography , Grid} from '@mui/material'

function NewConversation() {

    return (
      <>
        <Grid container>
                <Grid item md = {12} style = {{border : "2px solid black", minHeight : "80vh"}}>
                    <h1>Start new chat</h1>
                </Grid>
        </Grid>
      </>
    );
  }
  
  export default NewConversation;
  