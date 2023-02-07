import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutation";
import Auth from "../utils/auth";

const Signup = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword:""
    });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleUserInput = ({ target }) => {

        const { name, value } = target;
        setUserData({ ...userData, [name]: value })
    }

    const createNewUser = async (event) => {
        event.preventDefault()
        console.log(userData)
        try {
            const { data } = await addUser({
                variables: {
                    newUser: { ...userData }
                }
            })
            console.log(data, "Add User", error)
            Auth.login(data.addUser.token)
        }
        catch (error) {
            console.error(error)
        }
    }
  
    const checkPassword = () => {

    }
    return (<main className="container mx-auto">
    <h3>Signup</h3>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={userData.name}onChange={handleUserInput} name="name" placeholder='User Profile name'/>
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleUserInput} value={userData.email} name="email" placeholder='User Email' />
        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleUserInput} name="password" type="password" value={userData.password} placeholder='Password' />
        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleUserInput} onFocusOut ={checkPassword} name="confirmPassword" type="password" value={userData.password} placeholder='Password' />
   
            

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            onClick={createNewUser} type='submit'>Submit</button>

        </form>
        </main>)


//    <Form>
//     <Form.Label>Username</Form.Label>
//     <Form.Input value={userData.name}onChange={handleUserInput} name="name" placeholder='User Profile name'/>
//     <Form.Label>Email</Form.Label>
//     <Form.Input onChange={handleUserInput} value={userData.email} name="email" placeholder='User Email' />
//     <Form.Label>Password</Form.Label>
//     <Form.Input  onChange={handleUserInput} name="password" type="password" value={userData.password} placeholder='Password' />
//    <Button onClick={createNewUser} type='submit'>Submit</Button>
//     </Form>)
}


export default Signup;