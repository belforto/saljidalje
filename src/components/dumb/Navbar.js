import React from "react";
import { Link } from 'react-router-dom';


const Navbar = () => (
    <nav className="border  split-nav container margin-top-small ">
        <div className="nav-brand">
        
        <Link to="/">
                <img src="https://www.markwebkitchen.com/seo/logoMWK.png"  className="no-responsive no-border" alt="Logo"></img>
            </Link>
        </div>
            
        
        <div className="collapsible-body">
            <ul className="inline">
                <Link to="/test">
                    <li>Home</li>
                </Link>
                <Link to="/articles/all">
                    <li>Blog</li>
                </Link>


            </ul>
        </div>
    </nav>
);

// export default Todo;
export default Navbar;
