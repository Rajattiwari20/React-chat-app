import  React, { useState , useEffect} from 'react';
import { Typography , Grid} from '@mui/material'
import SendNewMessage from './SendNewMessage'
import NewConversation from './NewConversation'
import dummyData from '../data'

function CurrentConversation() {

    const [value , setValue] = useState()
    const [senderMessage , setSenderMessage] = useState()
    const [messages , setMessages] = useState()
    const [newMessage , setNewMessage] = useState([])
    
    useEffect(()=>{
        dummyData.map((data) =>{
            if(data.isLogedIn){
                setMessages(data.messages)
                // setShowMessage(data.currentMessage)
            }
        })
    }, [])

        const handelClick = () =>{
            console.log("senderMessage ==> " , senderMessage)
            setNewMessage([...newMessage , senderMessage])
            setValue('')
        }

        console.log("newMessage" , newMessage)
    return (
      <>
        <Grid container>
            {
                messages &&
                messages.length > 0 ?
                <Grid item md = {12} xs = {12} sm = {12}style = {{ minHeight : "80vh"}}>
                    {
                         messages.map((message , index) =>{
                             return(
                                 <p key ={index}>{message.messageRecived} </p>
                             )
                         })
                    }
                    {   
                         newMessage.map((message , index) =>{
                             return(
                                 <p key ={index} style ={{textAlign : "right"}} >{message}</p>
                             )
                         })
                    }
                    
                </Grid>
                :
                <Grid item md = {12} xs = {12} sm = {12}>
                    <NewConversation />
                </Grid>
            }
           
            <Grid item md = {12} xs = {12} sm = {12}>
                <SendNewMessage setSenderMessage={setSenderMessage}  handelClick ={handelClick} value ={value} setValue ={setValue} />
            </Grid>
        </Grid>
      </>
    );
  }
  
  export default CurrentConversation;
  