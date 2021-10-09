import  React , {useState, useEffect}from 'react';
import { Typography , Grid, Avatar} from '@mui/material'
import dummyData from '../data'
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';

function HistoryChats() {
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
                messages.map((message)=>{
                    return(
                        <Grid item md = {12} style = {{ backgroundColor: "#EAEEF3", marginTop : "10px" , padding : "10px"}} >
                            <Grid container >
                                <Grid item md ={3}>
                                    <Avatar alt="Pic" src= {message.senderInfo.photo} />
                                </Grid>
                                <Grid item md ={7}>
                                    {message.senderInfo.userName} 
                                </Grid>
                                {
                                    message.senderInfo.isOnline &&
                                    <Grid item md ={2} style ={{textAlign :"center"}}>
                                        <CircleRoundedIcon style = {{color : "green" , fontSize : "small"}} />      
                                     </Grid>
                                }
                                <Grid item md ={12} style ={{textAlign :"center"}}>
                                    {message.text}
                                </Grid>
                               
                               
                               
                            </Grid>
                        </Grid> 
                    )
            })
            }
        </Grid>
      </>
    );
  }
  
  export default HistoryChats;
  