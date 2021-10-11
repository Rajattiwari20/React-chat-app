import  React, { useState , useEffect, useContext} from 'react';
import { Typography , Grid , Avatar , Box} from '@mui/material'
import SendNewMessage from './SendNewMessage'
import NewConversation from './NewConversation'
import dummyData from '../data'
import AppContext from '../components/AppContext'

function CurrentConversation(props) {

    const {userId} = props
    const [data, setdata] = useState()
    const [value , setValue] = useState()
    const [senderMessage , setSenderMessage] = useState()
    const [messages , setMessages] = useState()
    
    const appContext = useContext(AppContext)
    const setNewMessage = appContext.value1
    const newMessage = appContext.value2

    
    useEffect(()=>{
        dummyData.map((data) =>{
            if(data.isLogedIn){
                setMessages(data.messages)
                setdata(data)
            }
            
        })
    }, [])

    const handelClick = () =>{
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
                                 <Grid container style ={{marginTop : "10px" }}  >
                                <Grid item md ={0}>
                                    <Avatar alt="Pic" src= {data.photo} />
                                </Grid>
                                <Grid item md ={10}>
                                <h4 key ={index} style ={{marginLeft: "10px" , marginTop : "10px" }} >{message} </h4> 
                                </Grid>
                                </Grid> 
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
  