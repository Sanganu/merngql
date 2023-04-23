import React from 'react'





const Navigation = () => {



    return (<>
        <nav className="flex flex-wrap justify-between p-5 bg-gradient-to-r from-slate-400 to-indigo-600">

            <h2 className="centered aligned two column row olive">
                Personal Library
            </h2>
            <section className="flex flex-wrap  hover:flex-wrap-reverse space-x-5">
                <li className="column"><a href="/signup">Sign Up</a></li>
                <li className="column" ><a href="/login">Login</a></li>
                <li className="column"><a href="/saved">Saved Items</a></li>
                <li className="column"><a href="/search">Search Items</a></li>
                <li className="column"><a href="/logoff">Logoff</a></li>
            </section>
        </nav>

    </>)

}

export default Navigation;
