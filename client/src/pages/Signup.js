import React , {useState} from "react";
import { Button, Form } from 'semantic-ui-react'
import {useMutation} from "@apollo/client";
import {ADD_USER} from "../utils/mutation";
import Auth from "../utils/auth";

const Signup = () => {
    const [userData,setUserData] = useState({
        name:"",
        email:"",
        password:""
    });
   const [addUser,{error}] = useMutation(ADD_USER);
   const handleUserInput = ({target}) =>{
    
        const {name,value} = target;
        setUserData({...userData,[name]:value})
    }
   const  createNewUser = async (event)=>{
        event.preventDefault()
        try{
            const {data} = await addUser({
                variables: {
                   newUser:{ ...userData}
                }
            })
            console.log(data,"Add User",error)
            Auth.login(data.addUser.token)
        }
        catch(error){
            console.error(error)
        }
    }
return(<Form className="ui text container m-6 p-6">
    <Form.Group unstackable widths={2}>
      <Form.Input label='User Profile name' value={userData.name}  onChange={handleUserInput} name="name" placeholder='User Profile name' />
      <Form.Input label='User Email'  onChange={handleUserInput} value={userData.email} name="email" placeholder='User Email' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='Password'  onChange={handleUserInput} name="password"  type="password" value={userData.password} placeholder='Password' />
      <Form.Input label='Confirm Password' name="confirm"  onChange={handleUserInput}  type="password" placeholder='Confirm Password' />
    </Form.Group>
    <Button onClick={createNewUser} type='submit'>Submit</Button>
  </Form>)
}

export default Signup;