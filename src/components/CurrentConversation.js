import  React, { useState , useEffect} from 'react';
import { Typography , Grid , Avatar , Box} from '@mui/material'
import SendNewMessage from './SendNewMessage'
import NewConversation from './NewConversation'
import dummyData from '../data'

function CurrentConversation(props) {

    const {userId} = props
    console.log("userId ==>" , userId )
    const [data, setdata] = useState()
    const [value , setValue] = useState()
    const [senderMessage , setSenderMessage] = useState()
    const [messages , setMessages] = useState()
    const [newMessage , setNewMessage] = useState([])
    
    useEffect(()=>{
        dummyData.map((data) =>{
            if(data.isLogedIn){
                setMessages(data.messages)
                setdata(data)
            }
            
        })
    }, [])

    // console.log("messages ==>" , messages)

        const handelClick = () =>{
            // console.log("senderMessage ==> " , senderMessage)
            setNewMessage([...newMessage , senderMessage])
            setValue('')
        }

    return (
      <>
        <Grid container>
            {
                messages &&
                messages.length > 0 ?
                <Grid item md = {12} xs = {12} sm = {12}style = {{ minHeight : "80vh" , padding : "10px"}}>
                    {
                         messages.map((message , index) =>{
                             return(
                                 <>
                                {
                                message.senderInfo.id === userId &&
                                message.messageRecived.map((text, index) =>{
                                    return(
                                        <Grid container style ={{marginTop : "10px" }} >
                                        <Grid item md ={0}>
                                            <Avatar alt="Pic" src= {message.senderInfo.photo} />
                                        </Grid>
                                        <Grid item md ={7}>
                                        <h4 key ={index} style ={{marginLeft: "10px" , marginTop : "10px" }} >{text} </h4>
                                        </Grid>
                                        </Grid>
                                    )
                                } )
                               
                                }
                                 </>
                             )
                         })
                    }
                    {   
                         newMessage.map((message , index) =>{
                             return(
                                 <>
                                <h4 key ={index} style ={{marginLeft: "10px" , marginTop : "10px" , textAlign : "right"}} >{message} </h4>  
                                </>
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
                <SendNewMessage setSenderMessage={setSenderMessage} 
                 handelClick ={handelClick} 
                 value ={value} 
                 setValue ={setValue} 
                 userData = {data}
                 />
            </Grid>
        </Grid>
      </>
    );
  }
  
  export default CurrentConversation;
  