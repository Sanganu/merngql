import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutation";
import Auth from "../utils/auth";
//import {useQuery} from "@apollo/client"//hook to fetch data



const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "", password: ""
  });
  const [loginUser,{error}] = useMutation(LOGIN_USER);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setUserLogin({ ...userLogin, [name]: value })
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log(userLogin)
    try {
      const { data } = await loginUser({
        variables: {
          email:userLogin.email,
          password:userLogin.password
        }
      })
      console.log(data, "Add User ----GRAPHL----------", error)
      console.log("LOGIN-token", data.loginUser.token)
      Auth.login(data.loginUser.token)
      setUserLogin({
        email: "",
        password: ""
      })
    }
    catch (error) {
      console.error(error)
    }
  }

  return (<main className="container mx-auto centered">
    <h3 className="text-3xl font-bold underline">Login</h3>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" value={userLogin.email} onChange={handleInputChange} placeholder='joe@schmoe.com' />
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" onChange={handleInputChange} value={userLogin.password} placeholder='Password' />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogin}>Submit</button>
    </form>
  </main>)
}

export default Login;
