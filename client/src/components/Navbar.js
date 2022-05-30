import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import {Header} from "semantic-ui-react";



const Navigation = ({renderPage,activeItem}) => {
  


    return(<>
        <nav className="ui equal width grid">
     
            <Menu.Item className="centered aligned two column row olive" onClick={()=>renderPage("home")}>
             Personal Library
            </Menu.Item>
            <section className="equal width row black">
            <Menu.Item  className="column"  onClick={()=>renderPage("signup")}>Sign Up</Menu.Item>
            <Menu.Item  className="column" onClick={()=>renderPage("login")}>Login</Menu.Item>
            <Menu.Item  className="column" onClick={()=>renderPage("savebooks")}>Saved Items</Menu.Item>
            <Menu.Item  className="column" onClick={()=>renderPage("searchbooks")}>Search Items</Menu.Item>
            <Menu.Item className="column"  onClick={()=>renderPage("logoff")}>Logoff</Menu.Item>
            </section>
        </nav>
           
    </>)
  
}

export default Navigation;
