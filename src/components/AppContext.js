// created a AppContext using createContext provided by react ==>
// which help us to  passing state to all the childs of App to avoid passing props
import { createContext } from 'react';

const AppContext = createContext();

export default AppContext;