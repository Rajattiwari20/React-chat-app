import  React , {useState} from 'react';
import { Typography , Grid,TextField , InputAdornment, Button, Avatar} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';

function SendNewMessage(props) {

    const { setSenderMessage , 
            handelClick ,
            value , 
            setValue,
            userData} = props
            
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
                        {userData && <Avatar alt="Pic" src= {userData.photo} style = {{width : "30px" , height : "30px"}}/>}
                        </InputAdornment>
                    ),
                    }}
                    variant="standard"
                    onChange = {(e) => handelChange(e)}
                    style ={{width : "80%", marginLeft : "4%"}}
                    value = {value}
                />
                <Button variant="outlined" endIcon={<SendIcon />} style = {{ marginTop :"10px", marginLeft : "2%"}} onClick = {handelClick} >Send</Button>
            </Grid>
            </Grid>
            </Grid>
        </Grid>
      </>
    );
  }
  
  export default SendNewMessage;
  