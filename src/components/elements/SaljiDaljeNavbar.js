

import React from "react";
import { Link } from 'react-router-dom';
import logo from './logo.png';

import PathPutanja from './PathPutanja';



class SaljiDaljeNavbar extends React.Component {



     componentDidMount() {
         
    }

componentWillUnmount(){
    //clear all listeners
   // window.removeEventListener("keyup", handleKeyUp);
}


    render() {




        return (

<div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand text-center">
                    <Link to="/">
                        <img src={logo} width="152" height="108" />
                    </Link>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">

                        <Link to={{ pathname: '/' }}> <a className="navbar-item"> Home </a></Link>

                        <Link to={{ pathname: '/suradnja' }}> <a className="navbar-item"> Suradnja </a></Link>
                        <Link to={{ pathname: '/blog' }}> <a className="navbar-item"> Blog </a></Link>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <Link > <a className="navbar-link"> Ostalo </a></Link>

                            <div class="navbar-dropdown">
                                <Link to={{ pathname: '/onama' }}> <a className="navbar-item"> O Nama </a></Link>
                                <Link to={{ pathname: '/uvjeti' }}> <a className="navbar-item"> Uvjeti </a></Link>
                                <Link to={{ pathname: '/povrat' }}> <a className="navbar-item"> Povrat Robe </a></Link>

                                <hr class="navbar-divider" />
                                <Link to={{ pathname: '/suradnja' }}> <a className="navbar-item"> Surađuj S Nama </a></Link>
                            </div>
                        </div>
                    </div>


                </div>
                
            </nav>

<PathPutanja/>
</div>
        );

    }

}

export default SaljiDaljeNavbar;


