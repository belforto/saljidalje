
import React from "react";
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';



import Catalog from "./Catalog";
import { Link } from 'react-router-dom';


import { Animated } from "react-animated-css";



class Artikli extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "", loading: true,
      listaSlika: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    };
  }



  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ loading: false });
      }
        .bind(this),
      1000
    );

  }

  render() {




    return (


      <div>
       
        {this.state.loading ? <Catalog /> :
       

          <section class="hero is-secondary is-medium  ">


            <div class="columns is-multiline is-mobile color4 ">
              <div class="field column is-half-mobile is-one-quarter-widescreen  ">
                <div class="control ">
                  <div class="select is-primary is-right">
                    <select>
                      <option>Svi Artikli</option>
                      <option>Samo odjeća</option>
                      <option>Samo obuća</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns is-multiline is-mobile color4 is-centered">

              {
                this.state.listaSlika.map((item, i) =>
                  <div key={i} class="column is-half-mobile is-one-quarter-widescreen">  <Link to="/detalji/x"> <LazyLoadImage alt="bla" effect="opacity" src="https://i.picsum.photos/id/1/200/300.jpg" /></Link></div>
                )
              }

            </div>




          </section>
        }
      </div>

    );
  }
}


export default trackWindowScroll(Artikli);

