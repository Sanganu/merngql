import React ,{useState, useEffect} from "react";

import {useQuery} from "@apollo/client"//hook to fetch data

import { Button, Form, Message } from 'semantic-ui-react'

const Login = () => {
  const [userLogin,setUserLogin] = useState({
    email:"",password:""
  });

  const handleInputChange = ({target}) =>{
    
    const {name,value} = target;
    setUserLogin({...userLogin,[name]:value})
}
  const handleLogin = () => {

  }
  return(
  <Form error>
    <Form.Input label='Email' value={userLogin.email} onChange={handleInputChange} placeholder='joe@schmoe.com' />
    <Form.Input label='Password' onChange={handleInputChange} value={userLogin.password} placeholder='Password' />
    <Button onClick={handleLogin}>Submit</Button>
  </Form>
)
} 

export default Login;
