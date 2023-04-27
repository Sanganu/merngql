import React,{useState} from 'react'
import Auth from "../utils/auth";




const Navigation = () => {
  const [status,setStatus] = useState(Auth.loggedIn())
   console.log(status)

    return (<>
        <nav className="flex flex-wrap justify-between p-5 bg-gradient-to-r from-slate-400 to-indigo-600">

            <h2 className="centered aligned two column row olive">
                Personal Library
            </h2>
            <section className="flex flex-wrap  hover:flex-wrap-reverse space-x-5">
            <li className="column"><a href="/search">Search Items</a></li>
            {status}
              { !status ?
                     <>
                   <li className="column"><a href="/signup">Sign Up</a></li>
                   <li className="column" ><a href="/login">Login</a></li>
                    </>
               :
               <>
                <li className="column"><a href="/saved">Saved Items</a></li>
                <li className="column"><a onClick={() => Auth.logout()}>Logoff</a></li>
                </>
              }
            </section>
        </nav>

    </>)

}

export default Navigation;
