import React from 'react'
import CookieNotice from '@mirzalikic/react-cookie-notice';



export default function GDPR() {

  const localConsentUpdate=() =>{
    

    let script = document.getElementById("gtmCustomFunctionUpdate"); 
    console.log("local cons",script)
    if(script){
      window.consentGranted()
      window.location.reload(true);
     // anl_cookie_event
    }
   
   
    
  }
  return (
    <div>
     <CookieNotice
    onSave={(cookies) => {
        console.log(cookies,"save");
         localConsentUpdate();
    }}
    onInit={(cookies) => {
        console.log(cookies,"init");
        // localConsentUpdate();
    }}
    acceptAllButtonText="Prihvati Kolačiće"
    cookiePrefix="my-cookie-"
    cookies={[
         { name: 'necessary', checked: true, editable: false, default: true, title: 'Osnovni', text: 'Osnovni kolačići su potrebni za osnovno funkcioniranje web stranice. Web stranica ne može funkcionirati ispravno bez tih kolačića.' },
        { name: 'analytics', checked: false, editable: true, title: 'Analitika', text: 'Analitički kolačići nam omogućuju uvid u posjete web stranici. Pomoću njih znamo koliko je korisnika bilo na našoj stranici, koliko dugo su ostali i koji dijelovi stranice su im bili najzanimljivniji.' },
        { name: 'marketing', checked: false, editable: true, title: 'Marketing', text: 'Marketinški kolačići koriste se kako bi pratili posjetitelje na stranici. Koriste ih dobavljači 3. strane oglašivači ili izdavaći kako bi prikazali korisnicima personalizirane reklame.' },
        // { name: 'test', checked: false, editable: true, title: 'Title', text: 'Lorem ipsum dolor sit amet.' }
    ]}>
    <h3>Ova web stranica koristi kolačiće.</h3>
    <p> Koristimo kolačiće kako bi poboljšali funkcioniranje web stranice i kako bi pratili interakciju s njima. Koristit ćemo kolačiće samo ako kliknete na "Prihvati Kolačiće". Također možete individualno namještati korištenje kolačića.</p>
</CookieNotice>
    </div>
  )
}
