import "./App.css"
import React from 'react'
import Pages from "./Pages";
import { BrowserRouter } from "react-router-dom";
const Head = React.lazy(() => import('./Head'));


const  App = ()=> {


  return (
    <>
    <BrowserRouter>
    <Head/>
    <Pages/>
    </BrowserRouter>
    </>
  )
}

export default App
