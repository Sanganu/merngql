import React from "react";
import {Container,Header,Button,Icon} from "semantic-ui-react";
import Signup from "./Signup";
import Login from "./Login"; 
import bimg from "./images/background.jpg";

const Landing =({mobile}) => {
    return(<>
 <Container className="hero" text>
    <Header
      as='h1'
      content='Imagine-a-Company'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      SignUp
      <Icon name='right arrow' />
    </Button>
    <Button primary size='huge'>
    Login
      <Icon name='right arrow' />
    </Button>
    <Button primary size='huge'>
    Search Books
      <Icon name='right arrow' />
    </Button>
    <Button primary size='huge'>
   Saved Books
      <Icon name='right arrow' />
    </Button>
  </Container>
    
    </>)
}

export default Landing;
