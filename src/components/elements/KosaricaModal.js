import React, { Component } from "react";

import ReactModal from "react-modal";
import { withRouter } from "react-router-dom";

class KosaricaModal extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      UKUPNO: 0
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.placanje = this.placanje.bind(this);
    this.displayKosaricu = this.displayKosaricu.bind(this);
    this.ocistiKosaricu = this.ocistiKosaricu.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  placanje() {
    //console.log("--placanje");
    this.props.history.push("/order/");
  }

  ocistiKosaricu() {
    localStorage.removeItem("KOSARICA");
    localStorage.removeItem("KOSARICAUKUPNO");
    localStorage.removeItem("KOSARICASIZE");
    this.forceUpdate();
  }
  handleCloseModal() {
    this.setState({ showModal: false });
  }

 

  displayKosaricu() {
    let KOSARICA = JSON.parse(localStorage.getItem("KOSARICA"));
    if (KOSARICA == null) return <p>Košarica je prazna</p>;

    let UKUPNO = KOSARICA.reduce(
      (accumulator, currentValue, currentIndex, array) => {
        return accumulator + parseFloat(currentValue.cijena.match(/(\d+)/));
      },
      0
    );
    localStorage.setItem("KOSARICAUKUPNO", UKUPNO);

    return KOSARICA.map(x => {
      return (
        <div>
          <div>
            <img class="smallImgKosarica" src={x.slika} />
            {"  "}
            <span>{x.naslov + " - " + x.cijena}</span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {!this.state.showModal && (
          <div className=" field kosaricaMobile">
            {/* {!!localStorage.getItem("KOSARICASIZE") && (
              <div class="brojArtikalaUkosarici">
                <div class="brArtikalaText">0 
                {localStorage.getItem("KOSARICASIZE")}
                </div>
              </div>
            )} */}

            <button
              onClick={this.handleOpenModal}
              className="navbar-item noButton"
            >
              {" "}
              <i class="fas fa-3x fa-shopping-cart"></i>{" "}
            </button>
          </div>
        )}

        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal color4"
          overlayClassName="Overlay"
        >
          <div className=" containerModal ">
          <button
              onClick={this.handleCloseModal}
              class="button  is-rounded color4"
              style={{    position: "relative",
                right: "-249px"}}
            >
              Vrati se{" "}
            </button>
            <div class="field">
              <label class="label">Tvoja Košarica</label>

              <p class="help"> Dodaj još poneki artikl koji ti se sviđa</p>
            </div>
            {this.displayKosaricu()}
            <hr />
            <p>Ukupno</p>
            {localStorage.getItem("KOSARICAUKUPNO")} KN
            <hr />
            <button
              onClick={this.placanje}
              class="button is-success is-rounded"
            >
              Plaćanje
            </button>
           
            <button
              onClick={this.ocistiKosaricu}
              class="button  is-rounded color4"
              style={{marginLeft: "44px"}}
            >
              Očisti Košaricu{" "}
            </button>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default withRouter(KosaricaModal);