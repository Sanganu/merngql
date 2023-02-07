import React from 'react'





const Navigation = ({renderPage,activeItem}) => {
  


    return(<>
        <nav className="flex flex-wrap justify-between p-5 bg-gradient-to-r from-slate-400 to-indigo-600">
     
            <h2 className="centered aligned two column row olive" onClick={()=>renderPage("home")}>
             Personal Library
            </h2>
            <section className="flex flex-wrap  hover:flex-wrap-reverse space-x-5">
            <li  className="column"  onClick={()=>renderPage("signup")}>Sign Up</li>
            <li  className="column" onClick={()=>renderPage("login")}>Login</li>
            <li  className="column" onClick={()=>renderPage("savebooks")}>Saved Items</li>
            <li  className="column" onClick={()=>renderPage("searchbooks")}>Search Items</li>
            <li className="column"  onClick={()=>renderPage("logoff")}>Logoff</li>
            </section>
        </nav>
           
    </>)
  
}

export default Navigation;
