import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Link } from "react-router-dom";
import Catalog from "./Catalog";
import placeHolderImg from "./placeholder.jpg";

class Artikli extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ loading: false });
      }.bind(this),
      300
    );
    console.log(this.props.artikli, "from fetch---------------");

    if (window.location.href.includes("category")) {
      var SCROLLMEMORY = localStorage.getItem("SCROLLMEMORY");
      setTimeout(function() {
        try {
          
          var element_to_scroll_to = document.querySelectorAll(
            "a[href='" + SCROLLMEMORY + "']"
          )[0];
          console.log(SCROLLMEMORY,"scrool into view", element_to_scroll_to);
          element_to_scroll_to.scrollIntoView();
        } catch (err) {
          console.log(err, "NO SCROLLMEMORY ELEMENT");
        }
      }, 1000);
    }

   

   
  }

 
  
  render() {
    return (
      <div>
        {this.state.loading ? (
          <Catalog />
        ) : (
          <div class="box boxnoshadows ">
            <section class="hero is-secondary is-medium   ">
              <div
                data-testid="listaArtikala"
                class="columns is-multiline is-mobile  is-centered"
              >
                {this.props.artikli.map((item, i) =>  { 
                  // console.log(item, "itemm");
                 return(
                  <div
                    key={i}
                    class="column is-half-mobile is-one-quarter-widescreen artiklIzListe"
                    onClick={()=> localStorage.setItem("SCROLLMEMORY","#/saljidalje/direkt/detalji/"+ item.identifikator)}
                  >
                    <Link
                      data-testid={item.identifikator}
                      to={{
                        pathname: "/direkt/detalji/" + item.identifikator,
                        state: {
                          artikl: item
                        }
                      }}
                    >
                      {" "}
                      <LazyLoadImage
                        placeholderSrc={placeHolderImg}
                        alt="bla"
                        effect="blur"
                        src={item.photoLinks[0]}
                      />

                      <div class="artiklCijena">
                        {item.cijena}

                        {/* <p>{true ?  item.cijena.match(/\d/g):null} </p> */}
                      </div>
                    </Link>
                  </div>
                )})}
              </div>
            </section>
          </div>
        )}
      </div>
    );
  }
}

export default // trackWindowScroll(
Artikli;
//)
