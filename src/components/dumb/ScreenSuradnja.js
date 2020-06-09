
import React from "react";
import 'react-lazy-load-image-component/src/effects/opacity.css';


import SaljiDaljeNavbar from "../elements/SaljiDaljeNavbar";


import FooterSD from "../elements/Footer"

import predlozak from "../elements/ikone/predlosci.jpg";


export default class ScreenSuradnja extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            
              
           
            <div class="container">
            <SaljiDaljeNavbar />
            <div class="horizmargin">
            <br/> <br/>

            <h1 class="title is-1">ŽELI&Scaron; PRODATI SVOJU STARU, A MOŽDA JO&Scaron; UVIJEK NOVU ODJEĆU?</h1>
<p>Ovo su koraci koje mora&scaron; ispuniti:</p>

<li>Poslikaj stvar koju želi&scaron; prodati na BIJELOJ PODLOZI</li>

<li>Ispuni sljedeću formu:</li>

<p>Ime, prezime, kontakt, instagram name, cijena artikla, kilaža artikla o kojoj ovisi iznos po&scaron;tarine (do 2 kg, 2-5 kg, 5-10 kg) - CIJENA ARTIKLA NA STRANICI BITI ĆE UVEĆANA ZA IZNOS PO&Scaron;TARINE</p>

<li>VAŽNO !! KOJI od va&scaron;ih poslanih komada i KADA će biti objavljeni - odlučujemo MI</li>

<h1><br /><br />KAKO DIJELIMO PROFIT NAKON PRODANOG ARTIKLA?</h1>
<p>Za prodani artikl do 150 HRK uzimamo 40% provizije</p>
<p>Za prodani artikl iznad 150 HRK uzimamo 30% provizije</p>
<h2>Tko plaća po&scaron;tarinu?</h2>
<p>Po&scaron;tarinu prilikom slanja plaća&scaron; ti, ALI će ti novac od po&scaron;tarine biti VRAĆEN.</p>
<h2><br /><br /></h2>
<h2 class="title is-2">Netko je kupio tvoj komad odjeće. &Scaron;to zatim?</h2>
<h1><br /><br /></h1>

<li>Prosljeđujemo ti podatke kupca i na&scaron;e podatke ( na&scaron; stavlja&scaron; kao po&scaron;iljatelja)</li>

<li>Upakira&scaron; proizvod, na upakirani proizvod napi&scaron;e&scaron; podatke kupca ( kao primatelja) i na&scaron;e podatke ( kao po&scaron;iljatelja) te iznos proizvoda koji se nalazi na stranici. Sa paketom odlazi&scaron; na po&scaron;tu.&nbsp;</li>

<div><strong>SLANJE</strong>:</div>

<li>Dolazi&scaron; do &scaron;altera i kaže&scaron; da paket &scaron;alje&scaron; pouzećem&nbsp;</li>

<p>Teta na &scaron;alteru: &ldquo;Plaćate li po&scaron;tarinu Vi i hoćete li da vam novci stignu na vrata na ruke ili na Va&scaron; bankovni račun?&rdquo;</p>
<p>Ti: &ldquo;Paket plaćam ja i želim da novci stignu na vrata&rdquo;</p>

<li>Ispuni sljedeća 2 papirića na način kako je prikazano:&nbsp;</li>
<img src={predlozak}/>

<li>Slikaj potvrde nakon slanja i po&scaron;alji nam sliku u inbox instagram @saljidalje</li>


<li> Poslala sam potvrdu o slanju. KAKO i KADA DOBIVAM NOVCE?</li>

<p> Zajedno sa slikama potvrde, u inbox instagram @saljidalje po&scaron;alji nam IBAN, </p>
<p> ime i prezime.</p>
<p> <strong>IZNOS UPLAĆUJEMO UNUTAR 7 DANA OD PRIMITKA POTVRDE O SLANJU!</strong></p>
<h1><br /><br /><br /><br /></h1>
<p><strong>VAŽNO!!!! - UKOLIKO ARTIKLE, U VREMENU OD SLANJA NA NA&Scaron; MAIL DO EVENTUALNE NJIHOVE OBJAVE NA WEBSHOPU, VI&Scaron;E NE POSJEDUJETE, DUŽNI STE NAS O TOME OBAVJESTITI</strong></p>

</div>
<FooterSD/>
            </div>
        );
    }
}








