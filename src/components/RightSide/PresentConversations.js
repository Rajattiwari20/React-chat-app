import  React from 'react';
import { Typography , Grid} from '@mui/material'
import CurrentConversation from './CurrentConversation'
import NewConversation from './NewConversation'
import { Route, Switch } from 'react-router-dom';

function PresentConversations(props) {
  
    return (
      <>
        <Grid container>
            <Grid item md = {12} xs = {12} sm = {12} style = {{minHeight : "90vh", backgroundColor : "#EAEEF3"}} >
              {/* using switch and Route provided by react-router-dom' for doing client side routing  */}
            <Switch>
                  <Route path="rajattiwari20.github.io/React-chat-app/user2" exact>
                    <CurrentConversation userId = {2} />
                  </Route>

                  <Route path="rajattiwari20.github.io/React-chat-app/user3" exact>
                    <CurrentConversation userId = {3}  />
                  </Route>
                  
                  <Route path="rajattiwari20.github.io/React-chat-app/user4" exact>
                    <CurrentConversation userId = {4}  />
                  </Route>
                  
                  <Route path="rajattiwari20.github.io/React-chat-app/user5" exact>
                    <CurrentConversation userId = {5}  />
                  </Route>
                  
                  <Route path="rajattiwari20.github.io/React-chat-app/user6" exact>
                    <CurrentConversation userId = {6}  />
                  </Route>
                  
                  <Route>
                    {/* default case if path is not define  */}
                    <NewConversation />
                  </Route>
            </Switch>
            </Grid>
        </Grid>
      </>
    );
  }
  
  export default PresentConversations;
  