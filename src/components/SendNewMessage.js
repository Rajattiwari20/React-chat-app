import  React , {useState} from 'react';
import { Typography , Grid,TextField , InputAdornment, Button} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';

function SendNewMessage(props) {

    const {setSenderMessage , handelClick ,value , setValue} = props

  
    
    const handelChange = (e) =>{
        var newMessage = e.target.value
        setSenderMessage(
            newMessage  
        )
        setValue(newMessage)
    }

    return (
      <>
        <Grid container>
            <Grid item md = {12} xs = {12} sm = {12} style = {{ minHeight : "10vh"}}>
            <Grid container justifyContent = "center">
            <Grid item md = {10} xs = {11} sm = {12}style = {{backgroundColor : "white", minHeight : "5vh", marginTop :"2%"}}>
                <TextField
                    id="input-with-icon-textfield"
                    label="Type here to send message"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                    }}
                    variant="standard"
                    onChange = {(e) => handelChange(e)}
                    style ={{width : "80%", marginLeft : "4%"}}
                    value = {value}
                />
                <Button variant="outlined" style = {{ marginTop :"10px", marginLeft : "2%"}} onClick = {handelClick} >Send</Button>
            </Grid>
            </Grid>
            </Grid>
        </Grid>
      </>
    );
  }
  
  export default SendNewMessage;
  