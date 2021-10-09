import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { TextField , Grid, InputAdornment, Typography, Button, Avatar} from '@mui/material'
import dummyData from '../data'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CoversationModel(props) {

  const {open , setOpen} = props
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (data) =>{
    console.log("Data" , data)
  }

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          All Contacts
        </BootstrapDialogTitle>
       { 
            dummyData.map((data) =>{
                return (
                    <DialogContent dividers>
                        <Grid container spacing = {3}>
                            <Grid item md ={2}>
                            <Avatar alt="Pic" src= {data.photo} />
                            </Grid>
                            <Grid item md ={4}>
                                <Typography  >
                                    {data.userName}
                                </Typography>
                            </Grid>
                            <Grid item md ={3}>
                                <Typography  >
                                    {data.conatactNo}
                                </Typography>
                            </Grid>
                            {
                                data.isLogedIn ?
                                <Grid item md ={3}>
                                    <Button variant="text" >
                                        <AccountCircleOutlinedIcon/>  
                                    </Button>   
                                </Grid>
                                :
                                <Grid item md ={3}>
                                    <Button variant="text" onClick={() => handleClick(data)}>
                                        <AddIcon/>
                                    </Button>   
                                </Grid>
                            }
                        </Grid>
                       
                    </DialogContent>
                )
            })    
        }
      </BootstrapDialog>
    </>
  );
}
