import  React , {useState} from 'react';
import { TextField , Grid, InputAdornment, Typography, Button} from '@mui/material'
import dummyData from '../data'
import HistoryChats from './HistoryChats'
import CoversationModel from './CoversationModel'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

function Conversations() {
  
    const [showConversationMoldel , setShowConversationMoldel] = useState(false)
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
        setShowConversationMoldel(true)
      };

    return (
      <>
        <Grid container >
            <Grid item md = {12}  >
                <TextField
                id="input-with-icon-textfield"
                label="Serch for new conversation"
                fullWidth
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon />
                    </InputAdornment>
                ),
                }}
                variant="standard"
                />
            </Grid>
            <Grid item md = {12} style = {{marginTop : "20px"}}>
                <Grid container>
                    <Grid item md = {10} >
                    <Typography variant="P" gutterBottom component="div" color = "#757575">
                        Conversations
                    </Typography>
                    </Grid>
                    <Grid item md = {2} >
                    <Button variant="text" onClick={handleClick}>
                        <AddIcon/>
                    </Button>    
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
  