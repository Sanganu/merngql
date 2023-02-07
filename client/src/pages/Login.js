import React ,{useState} from "react";

//import {useQuery} from "@apollo/client"//hook to fetch data



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
  return(<main className="container mx-auto">
  <h3>Login</h3>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  value={userLogin.email} onChange={handleInputChange} placeholder='joe@schmoe.com' />
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  onChange={handleInputChange} value={userLogin.password} placeholder='Password' />
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  onClick={handleLogin}>Submit</button>
  </form>
</main>)
} 

export default Login;
