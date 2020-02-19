

import React from "react";
import { Link } from 'react-router-dom';
import logo from './logo.png';



class SaljiDaljeNavbar extends React.Component {



    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {

                // Add a click event on each of them
                $navbarBurgers.forEach(el => {
                    el.addEventListener('click', () => {

                        // Get the target from the "data-target" attribute
                        const target = el.dataset.target;
                        const $target = document.getElementById(target);

                        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                        el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');

                    });
                });
            }

        });
    }




    render() {




        return (


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
                        <a className="navbar-item">
                            Home
      </a>

                        <a className="navbar-item">
                            Documentation
      </a>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
        </a>

                            <div class="navbar-dropdown">
                                <a className="navbar-item">
                                    About
          </a>
                                <a className="navbar-item">
                                    Jobs
          </a>
                                <a class="navbar-item">
                                    Contact
          </a>
                                <hr class="navbar-divider" />
                                <a class="navbar-item">
                                    Report an issue
          </a>
                            </div>
                        </div>
                    </div>

                  
                </div>
            </nav>


        );

    }

}

    export default SaljiDaljeNavbar;


