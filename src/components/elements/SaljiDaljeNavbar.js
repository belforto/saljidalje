import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

import PathPutanja from "./PathPutanja";
import KosaricaModal from "./KosaricaModal";


class SaljiDaljeNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ""
    };
  }

  togle = () => {
    if (this.state.active === "") {
      this.setState({ active: "is-active" });
    } else {
      this.setState({ active: "" });
    }
  };

  render() {
    return (
      <div>
        <nav class="navbar positionCenter" role="navigation" aria-label="main navigation">
          <div className="navbar-brand text-center">
            <Link to="/">
              <img src={logo} width="152" height="108" />
            </Link>
            <a
              onClick={() => this.togle()}
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              style={{    transform: "scale(2.5)", width:"unset",height:"unset"}}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div
            id="navbarBasicExample"
            class={"navbar-menu " + this.state.active}
          >
            <div class="navbar-end">
            
             
              <Link to={{ pathname: "/" }}>
                {" "}
                <a className="navbar-item"> Home </a>
              </Link>

              <Link to={{ pathname: "/suradnja" }}>
                {" "}
                <a className="navbar-item"> Suradnja </a>
              </Link>

              <div class="navbar-item has-dropdown is-hoverable">
                <Link>
                  {" "}
                  <a className="navbar-link"> Ostalo </a>
                </Link>

                <div class="navbar-dropdown">
                  <Link to={{ pathname: "/onama" }}>
                    {" "}
                    <a className="navbar-item"> O Nama </a>
                  </Link>
                  <Link to={{ pathname: "/uvjeti" }}>
                    {" "}
                    <a className="navbar-item"> Uvjeti </a>
                  </Link>
                  <Link to={{ pathname: "/povrat" }}>
                    {" "}
                    <a className="navbar-item"> Povrat Robe </a>
                  </Link>

                  <hr class="navbar-divider" />
                  <Link to={{ pathname: "/suradnja" }}>
                    {" "}
                    <a className="navbar-item"> Surađuj S Nama </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {
!this.props.sakrijKosaricu &&   <KosaricaModal/>
          }
        
        </nav>
      
     

        <PathPutanja />
      </div>
    );
  }
}

export default SaljiDaljeNavbar;
