import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import {Header} from "semantic-ui-react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Landing";
import Searchbooks from "../pages/Search";
import Savebooks from "../pages/Search";

const Navigation = () => {
  const [activeItem,setActiveItem] = useState('home')

  const handleItemClick = (e, { name }) => {
     setActiveItem(name)
  }
  const renderPage = () => {
      switch(activeItem){
        case 'home':
            return <Home />
            break;
        case 'signup':
            return <Signup />
            break;
        case 'login':
            return <Login />
            break;
        case 'savebooks':
            return <Savebooks />
            break;
        case 'searchbooks':
            return <Searchbooks />
            break;
      }
  }


    return(
       <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
            <Menu.Item as='a'>Login</Menu.Item>
            <Menu.Item as='a'>Saved Items</Menu.Item>
            <Menu.Item as='a'>Search Items</Menu.Item>
            <Menu.Item as='a'>Logoff</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>)
  
}

export default Navigation;
