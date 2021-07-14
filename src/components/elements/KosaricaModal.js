import React, { Component,useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

import ReactModal from "react-modal";
//import { withRouter } from "react-router-dom";
import { useStore } from "../../redux/zustand/zustand";




export default function KosaricaModal({ update }) {
  const [showModal, setShowModal] = useState(false);
  const [ukupno, setUkupno] = useState(update);
  let history = useHistory();
  // const artikalaUKosarici = useStore(state => state.artikalaUKosarici)

  // console.log("***zustand, ",artikalaUKosarici)
 

  
  const handleOpenModal=()=>  {
    setShowModal(true)
  }

  const placanje=()=>  {
    //console.log("--placanje");
    history.push("/order/");
  }

  const ocistiKosaricu=()=>  {
    localStorage.removeItem("KOSARICA");
    localStorage.removeItem("KOSARICAUKUPNO");
    localStorage.removeItem("KOSARICASIZE");
    // this.forceUpdate();
    setUkupno(!ukupno)
  }
  const handleCloseModal=()=> {
    setShowModal(false)
  }

  function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}
const forceUpdate = useForceUpdate();

  const makniTajArtiklIzKosarice=(identifikatorToRemove)=>{
    
    let KOSARICA = JSON.parse(localStorage.getItem("KOSARICA"));
    
   let updatedKosarica= KOSARICA.filter((x,i)=> i!==identifikatorToRemove)
    console.log("maknut cu",identifikatorToRemove,updatedKosarica)
    localStorage.setItem('KOSARICA', JSON.stringify(updatedKosarica));
    localStorage.setItem("KOSARICASIZE",updatedKosarica.length)

      //  this.forceUpdate();
     
      forceUpdate();
  }
 

  const displayKosaricu=()=> {
    let KOSARICA = JSON.parse(localStorage.getItem("KOSARICA"));
    if (KOSARICA == null) return <p>Košarica je prazna</p>;
   

    let UKUPNO = KOSARICA.reduce(
      (accumulator, currentValue, currentIndex, array) => {
        return accumulator + parseFloat(currentValue.cijena.match(/(\d+)/));
      },
      0
    );
    localStorage.setItem("KOSARICAUKUPNO", UKUPNO);
    // setUkupno(UKUPNO);

    return KOSARICA.map((x,index) => {
      return (
        <div>
          <div>
            <img class="smallImgKosarica" src={x.slika} />
            {"  "}
            <span>{x.naslov + " - " + x.cijena}</span>
            <span class="removeItemFromKosarica" onClick={()=>makniTajArtiklIzKosarice(index)}>    {"     "}
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="ionicon" viewBox="0 0 512 512"><title>Close Circle</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128"/></svg></span>
          </div>
        </div>
      );
    });
  }

  // useEffect(() => {
  //   displayKosaricu()
    
  // }, [])


  return (
    <div >
    {!showModal && (
      <div className=" field kosaricaMobile" >
        {!!localStorage.getItem("KOSARICASIZE") && (
          <div class="brojArtikalaUkosarici">
            <div class="brArtikalaText">
            {
              localStorage.getItem("KOSARICASIZE")
              
              }
            {ukupno}
            </div>
          </div>
        )}

        <button
          onClick={handleOpenModal}
          className="navbar-item noButton"
          style={{cursor: "pointer"}}
        >
          {" "}
          <i class="fas fa-3x fa-shopping-cart"></i>{" "}
        </button>
      </div>
    )}

    <ReactModal
      isOpen={showModal}
      contentLabel="onRequestClose Example"
      onRequestClose={handleCloseModal}
      className="Modal color4"
      overlayClassName="Overlay"
    >
      <div className=" containerModal ">
      <button
          onClick={handleCloseModal}
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
        {displayKosaricu()}
        <hr />
        <p>Ukupno</p>
        {localStorage.getItem("KOSARICAUKUPNO")} KN
        <hr />
        <button
          onClick={placanje}
          class="button is-success is-rounded"
        >
          Plaćanje
        </button>
       
        <button
          onClick={ocistiKosaricu}
          class="button  is-rounded color4"
          style={{marginLeft: "44px"}}
        >
          Očisti Košaricu{" "}
        </button>
      </div>
    </ReactModal>
  </div>
  )
}








// class KosaricaModal extends Component {
//   constructor() {
//     super();
//     this.state = {
//       showModal: false,
//       UKUPNO: 0
//     };

//     this.handleOpenModal = this.handleOpenModal.bind(this);
//     this.handleCloseModal = this.handleCloseModal.bind(this);
//     this.placanje = this.placanje.bind(this);
//     this.displayKosaricu = this.displayKosaricu.bind(this);
//     this.ocistiKosaricu = this.ocistiKosaricu.bind(this);
//   }

//   handleOpenModal() {
//     this.setState({ showModal: true });
//   }

//   placanje() {
//     //console.log("--placanje");
//     this.props.history.push("/order/");
//   }

//   ocistiKosaricu() {
//     localStorage.removeItem("KOSARICA");
//     localStorage.removeItem("KOSARICAUKUPNO");
//     localStorage.removeItem("KOSARICASIZE");
//     this.forceUpdate();
//   }
//   handleCloseModal() {
//     this.setState({ showModal: false });
//   }

 

//   displayKosaricu() {
//     let KOSARICA = JSON.parse(localStorage.getItem("KOSARICA"));
//     if (KOSARICA == null) return <p>Košarica je prazna</p>;
//     // const artikalaUKosarici = useStore(state => state.artikalaUKosarici)

//     // console.log("***zustand, ",artikalaUKosarici)

//     let UKUPNO = KOSARICA.reduce(
//       (accumulator, currentValue, currentIndex, array) => {
//         return accumulator + parseFloat(currentValue.cijena.match(/(\d+)/));
//       },
//       0
//     );
//     localStorage.setItem("KOSARICAUKUPNO", UKUPNO);

//     return KOSARICA.map(x => {
//       return (
//         <div>
//           <div>
//             <img class="smallImgKosarica" src={x.slika} />
//             {"  "}
//             <span>{x.naslov + " - " + x.cijena}</span>
//           </div>
//         </div>
//       );
//     });
//   }

//   render() {
//     return (
//       <div>
//         {!this.state.showModal && (
//           <div className=" field kosaricaMobile">
//             {/* {!!localStorage.getItem("KOSARICASIZE") && (
//               <div class="brojArtikalaUkosarici">
//                 <div class="brArtikalaText">0 
//                 {localStorage.getItem("KOSARICASIZE")}
//                 </div>
//               </div>
//             )} */}

//             <button
//               onClick={this.handleOpenModal}
//               className="navbar-item noButton"
//             >
//               {" "}
//               <i class="fas fa-3x fa-shopping-cart"></i>{" "}
//             </button>
//           </div>
//         )}

//         <ReactModal
//           isOpen={this.state.showModal}
//           contentLabel="onRequestClose Example"
//           onRequestClose={this.handleCloseModal}
//           className="Modal color4"
//           overlayClassName="Overlay"
//         >
//           <div className=" containerModal ">
//           <button
//               onClick={this.handleCloseModal}
//               class="button  is-rounded color4"
//               style={{    position: "relative",
//                 right: "-249px"}}
//             >
//               Vrati se{" "}
//             </button>
//             <div class="field">
//               <label class="label">Tvoja Košarica</label>

//               <p class="help"> Dodaj još poneki artikl koji ti se sviđa</p>
//             </div>
//             {this.displayKosaricu()}
//             <hr />
//             <p>Ukupno</p>
//             {localStorage.getItem("KOSARICAUKUPNO")} KN
//             <hr />
//             <button
//               onClick={this.placanje}
//               class="button is-success is-rounded"
//             >
//               Plaćanje
//             </button>
           
//             <button
//               onClick={this.ocistiKosaricu}
//               class="button  is-rounded color4"
//               style={{marginLeft: "44px"}}
//             >
//               Očisti Košaricu{" "}
//             </button>
//           </div>
//         </ReactModal>
//       </div>
//     );
//   }
// }

// export default 
// // withRouter(
//   KosaricaModal
//   // )
//   ;
