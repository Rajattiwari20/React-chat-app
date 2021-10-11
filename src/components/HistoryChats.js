import  React , {useState, useEffect, useContext}from 'react';
import { makeStyles } from '@mui/styles';
import {useHistory} from 'react-router-dom'
import { Typography , Grid, Avatar, Button} from '@mui/material'
import dummyData from '../data'
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import AppContext from '../components/AppContext'

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

function HistoryChats(props) {
    
    const classes = useStyles();

    const appContext = useContext(AppContext)
    const setNewMessage = appContext.value1
       
    const {searchString} = props
    const [messages , setMessages] = useState()
    let history = useHistory()
    useEffect(()=>{
        dummyData.map((data) =>{
            if(data.isLogedIn){
                setMessages(data.messages)
            }
        })
    }, [])

    const handelClick = (path) =>{
        history.push(path)
        setNewMessage([])
    }
    // console.log("messages ==>" ,messages)
    // console.log("searchString===>" , searchString)   
    // console.log("filterMessages ==>" , filterMessages)
    // const filterMessages = messages.filter(message => message.senderInfo.userName ==  searchString)

    
    return (
      <>
        <Grid container>
            {
                messages &&
                messages.map((message, index)=>{
                    return(
                       
                        <Grid item md = {12} sm = {12} xs = {12} style = {{ marginTop : "5px" , padding : "10px"}}  key ={index}>
                             <Button fullWidth className = {classes.historyBtn} onClick= {() => handelClick(message.senderInfo.path)} >
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
                                    {message.messageRecived[0]}
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
  