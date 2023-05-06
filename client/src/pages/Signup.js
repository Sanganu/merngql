import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutation";
import Auth from "../utils/auth";

const Signup = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""

    });
    const [confirmPassword, setConfirmPassword] = useState("")
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
            console.log(data.addUser, "Add User ----GRAPHL----------", error)
            console.log("SIGNUP-token", data.addUser.token, data,"DATA")
            Auth.login(data.addUser.token)
            setUserData({
                name: "",
                email: "",
                password: ""
            })
        }
        catch (error) {
            console.error("Signup User",error)
        }
    }

    const checkPassword = () => {
        if (userData.password !== userData.confirmPassword) {
            console.log("Invalid")
        }
    }
    return (<main className="container mx-auto centered">
        <h3 className="text-3xl font-bold underline">Signup</h3>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={userData.name} onChange={handleUserInput} name="name" placeholder='User Profile name' required />
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleUserInput} value={userData.email} name="email" placeholder='User Email' required />
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleUserInput} name="password" type="password" value={userData.password} placeholder='Password' required />
            {/* <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleUserInput} onFocusOut={checkPassword} name="confirmPassword" type="password" value={confirmPassword} placeholder='Password' />
            <p name="error"className="help is-danger">This email is invalid</p> */}
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-4 rounded focus:outline-none focus:shadow-outline"  
                onClick={createNewUser}
                disabled={!(userData.email && userData.name && userData.password)}
                type='submit'>Submit</button>

        </form>
    </main>)
}


export default Signup;