
import React from "react";
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';


import Catalog from "./Catalog";
import { Link } from 'react-router-dom';
import XLoacalStore from '../elements/XLoacalStore'


import { Animated } from "react-animated-css";

import placeHolderImg from "./placeholder.png"



class Artikli extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

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
    console.log(this.props.artikli, "from fetch---------------");


  }

  /*
    saveScrollPosition() {
      var yPosition = window.pageYOffset;
      XLoacalStore.set("yPosition", yPosition)
    }
  */
  render() {
    return (
      <div>

        {this.state.loading ? <Catalog /> :

          <div class="box boxnoshadows ">
            <section class="hero is-secondary is-medium   ">


              <div class="columns is-multiline is-mobile  is-centered">

                {
                  this.props.artikli.map((item, i) =>
                    <div key={i} class="column is-half-mobile is-one-quarter-widescreen">
                      <Link to={{
                        pathname: '/detalji/' + item.identifikator,
                        state: {
                          artikl: item,

                        }
                      }}> <LazyLoadImage placeholderSrc={placeHolderImg} alt="bla" effect="blur" src={item.photoLinks[0]}


                        />
                      </Link>
                    </div>
                  )
                }

              </div>




            </section>
          </div>
        }
      </div>

    );
  }
}


export default
  //trackWindowScroll(
  Artikli
  //)
  ;

