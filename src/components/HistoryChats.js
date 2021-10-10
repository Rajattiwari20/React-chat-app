import  React , {useState, useEffect}from 'react';
import { makeStyles } from '@mui/styles';
import { Typography , Grid, Avatar, Button} from '@mui/material'
import dummyData from '../data'
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';

const useStyles = makeStyles(theme => ({

    historyBtn: {
        backgroundColor :"#d8dbe3",
        color : "black",
        '&:hover' : {
            backgroundColor : "#EAEEF3"
        },
        '&:focus' : {
            backgroundColor : "#1976D2",
            color : "white"
        }
    }
}))

function HistoryChats() {
    const classes = useStyles();
    const [messages , setMessages] = useState()
    useEffect(()=>{
        dummyData.map((data) =>{
            if(data.isLogedIn){
                setMessages(data.messages)
            }
        })
    }, [])

    console.log("messages ==>" ,messages)
    
    return (
      <>
        <Grid container>
            {
                messages &&
                messages.map((message, index)=>{
                    return(
                       
                        <Grid item md = {12} sm = {12} xs = {12} style = {{ marginTop : "10px" , padding : "10px"}}  key ={index}>
                             <Button fullWidth className = {classes.historyBtn} >
                            <Grid container >
                                <Grid item md ={3}>
                                    <Avatar alt="Pic" src= {message.senderInfo.photo} />
                                </Grid>
                                <Grid item md ={7}>
                                    {message.senderInfo.userName} 
                                </Grid>
                                {
                                    message.senderInfo.isOnline ?
                                    <Grid item md ={2} style ={{textAlign :"center"}}>
                                        <CircleRoundedIcon style = {{color : "green" , fontSize : "small"}} />      
                                     </Grid>
                                     :
                                     <Grid item md ={2} style ={{textAlign :"center"}}>
                                     <CircleRoundedIcon style = {{color : "red" , fontSize : "small"}} />      
                                  </Grid>
                                }
                                <Grid item md ={12} style ={{textAlign :"center"}}>
                                    {message.messageRecived}
                                </Grid>
                            </Grid>
                            </Button>
                        </Grid> 
                       
                    )
            })
            }
        </Grid>
      </>
    );
  }
  
  export default HistoryChats;
  