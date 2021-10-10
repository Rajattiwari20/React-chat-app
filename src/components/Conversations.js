import  React , {useState} from 'react';
import { TextField , Grid, InputAdornment, Typography, Button, Box , Fab} from '@mui/material'
import dummyData from '../data'
import HistoryChats from './HistoryChats'
import CoversationModel from './CoversationModel'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({

    historyBtn: {
        color : "white",
        borderColor : "white !important",
        '&:focus' : {
            color : "white"
        }
    }

}))

function Conversations() {
  
    const classes = useStyles();
    const [showConversationMoldel , setShowConversationMoldel] = useState(false)
    const [open, setOpen] = useState(false);

    const handelClick = () => {
        setOpen(true);
        setShowConversationMoldel(true)
      };

    return (
      <>
        <Grid container >
            <Grid item md = {12}  >
                 <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} style ={{color : "white"}} />
                    <TextField id="input-with-sx"
                     label="Serch for new conversation" 
                     variant="standard" 
                     InputLabelProps = {{
                        className: classes.historyBtn
                    }}
                    InputProps={{className: classes.historyBtn}}
                     />
                </Box>
            </Grid>
            <Grid item md = {12} style = {{marginTop : "20px"}}>
                <Grid container>
                    <Grid item md = {10} >
                    <Typography variant="h6" gutterBottom component="div" color = "white">
                        Conversations
                    </Typography>
                    </Grid>
                    <Grid item md = {2} >
                    <Fab color="primary" aria-label="add" onClick ={handelClick} style={{width : "40px" , height : "40px"}}  >
                        <AddIcon  />
                    </Fab>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md = {12} style = {{marginTop : "10px"}}>
                <HistoryChats/>
            </Grid>
        </Grid>
        {
            showConversationMoldel &&
            <CoversationModel open = {open} setOpen ={setOpen}/>
        }
      </>
    );
  }
  
  export default Conversations;
  