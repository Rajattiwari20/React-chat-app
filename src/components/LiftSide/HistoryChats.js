import  React , {useState, useEffect, useContext}from 'react';
import { makeStyles } from '@mui/styles';
import {useHistory} from 'react-router-dom'
import { Typography , Grid, Avatar, Button} from '@mui/material'
import dummyData from '../../data'
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import AppContext from '../AppContext'

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
    
    const classes = useStyles()
    //using useContext hook to avoid props 
    const appContext = useContext(AppContext)
    const setNewMessage = appContext.value1
    const {searchString, filterMessages , setFilterMessages} = props
    const [messages , setMessages] = useState([])
   
    let history = useHistory()

    //adding messages to state 
    useEffect(()=> {
        dummyData.map((data) =>{
            if(data.isLogedIn){
                setMessages(data.messages)
            }
        })
    }, [])

    // filtering and creating new array accrording to user search
    useEffect(() =>{
        const newArray=messages.filter((message)=>{return(
            message.senderInfo.userName
            .toLowerCase()
            .includes(searchString.toLowerCase())
        )})
        setFilterMessages(newArray)
    }, [searchString])


  //on click will redirect to specific path using useHistory provided by react-router-dom and close the model
    const handelClick = (path) =>{
        history.push(path)
        setNewMessage([])
    }
    
    return (
      <>
        <Grid container>
            {
                filterMessages &&
                filterMessages.map((message, index)=>{
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
                                <Grid item md ={10} style ={{textAlign :"center"}}>
                                    {message.messageRecived[0]}
                                </Grid>
                                <Grid item md ={2} style ={{textAlign :"center"}}>
                                    {message.senderInfo.timestamp}
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
  