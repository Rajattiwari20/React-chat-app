import  React, { useState } from 'react';
import { Typography , Grid} from '@mui/material'

// if there is no pervious chat show NewConversation component
function NewConversation() {

    return (
      <>
        <Grid container>
                <Grid item md = {12} xs = {12} sm = {12} style = {{ minHeight : "90vh" ,backgroundImage: `url(${"https://cdn.dribbble.com/users/1354640/screenshots/7594295/media/91ca96954883a99dbe8b1fe3b8458d86.jpg?compress=1&resize=1200x900"})`}}>
                  </Grid>
        </Grid>
      </>
    );
  }
  
  export default NewConversation;
  