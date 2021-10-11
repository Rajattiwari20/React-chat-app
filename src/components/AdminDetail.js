import  React, { useState } from 'react';
import { Typography , Grid, Avatar, Button} from '@mui/material'

function AdminDetail(props) {

  const {data} = props

  const handelClick = () => {
    console.log("Click")
  }

    return (
      <>
        { data && 
          <Grid container>
                <Grid item md = {2} xs = {12} sm = {12}>
                <Avatar alt="Pic" src= {data.photo} />
                </Grid>
                <Grid item md = {6} xs = {12} sm = {12} style = {{marginTop : "-10px" , color : "white" , cursor : "pointer"}}>
                <h4 > {data.userName} </h4>
                </Grid>
                <Grid item md = {4} xs = {12} sm = {12} style = {{marginTop : "-10px" , color : "white", cursor : "pointer"}}>
                <h4> {data.contactNo} </h4>
                </Grid>
        </Grid>
        }
      </>
    );
  }
  
  export default AdminDetail;
  