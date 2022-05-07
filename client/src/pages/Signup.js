import React , {useState} from "react";
import { Button, Form } from 'semantic-ui-react'
import {useMutation} from "@apollo/client";
import {ADD_USER} from "../utils/mutation";

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
                    ...userData
                }
            })
            console.log(data,"Add User")
        }
        catch(error){
            console.error(error)
        }
    }
return(<Form>
    <Form.Group unstackable widths={2}>
      <Form.Input label='User Profile name' value={userData.name}  onChange={handleUserInput} name="name" placeholder='User Profile name' />
      <Form.Input label='User Email'  onChange={handleUserInput} value={userData.email} name="email" placeholder='User Email' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='Password'  onChange={handleUserInput} name="password"  value={userData.password} placeholder='Password' />
      <Form.Input label='Confirm Password' name="confirm"  onChange={handleUserInput} placeholder='Confirm Password' />
    </Form.Group>
    <Form.Checkbox label='I agree to the Terms and Conditions' />
    <Button onClick={createNewUser} type='submit'>Submit</Button>
  </Form>)
}

export default Signup;