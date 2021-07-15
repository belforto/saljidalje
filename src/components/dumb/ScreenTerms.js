
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';



import Catalog from "../elements/Catalog";
import SaljiDaljeNavbar from "../elements/SaljiDaljeNavbar";
import TestimonialComponent from "../elements/TestimonialComponent"
import PreporukeComponent from "../elements/PreporukeComponent"
import { Link } from 'react-router-dom';


import {IME_FIRME,ADRESA_FIRME,OIB_FIRME} from "../elements/podaciOFirmi"



export default class ScreenTerms extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
              
           
            <div class="container">
            <SaljiDaljeNavbar />

                <section class="hero bgrGreen ">

                    <div class="hero-body bgrGreen">
                    <div id="content" class="site-content">
<div class="wrap">
<div id="primary" class="content-area">
<article id="post-1" class="post-1 post type-post status-publish format-standard hentry category-uncategorized">
<div class="entry-content">
<p><strong>OPĆI UVJETI</strong><strong>&nbsp;POSLOVANJA</strong></p>
<p>Općim uvjetima uređuju se odnosi između Kupca i Trgovca vezano uz uvjete i način naručivanja proizvoda, cijene proizvoda, uvjete i načine plaćanja, uvjete jamstva za ispravnost prodane stvari, prava Kupca na pisani prigovor na proizvode i usluge Trgovca, pravo na raskid ugovora, dostave proizvoda te ostalih usluga koje Trgovac nudi, za&scaron;tite osobnih i drugih podataka i ostala pitanja važna za sklapanje ugovora o kupoprodaji putem Interneta. &nbsp;</p>
<p>Uvjeti poslovanja dru&scaron;tva {IME_FIRME}(u daljnjem tekstu Trgovac) sastavljeni su u skladu sa Zakonom o za&scaron;titi potro&scaron;ača (N.N. 41/14; 110/015; 14/19), glava III. &ndash; Sklapanje ugovora izvan poslovnih prostorija i ugovora na daljinu te predstavljaju prethodnu obavijest u smislu članka 43. ZZP, Zakonom o elektroničkoj trgovini, Zakon o obveznim odnosima te ostalim važećim propisima Republike Hrvatske.</p>
<p>Trgovac zadržava pravo izmjene Uvjeta i odredbi u bilo kojem trenutku. Sve izmjene bit će objavljene putem web stranice Trgovca te će stupiti na snagu u trenutku objave istih na internetskim stranicama. Bilo kakve izmjene Uvjeta primjenjivat će se na kupnje izvr&scaron;ene nakon objavljivanja tih izmjena.<br />&nbsp;Kupac je dužan provjeriti važeće Uvjete prije svake kupnje.</p>
<p>Narudžbom proizvoda Kupac potvrđuje prihvaćanje uvjeta poslovanja.</p>
<p>Opći uvjeti bit će dostavljeni kupcu kao sadržaj odnosno prilog email kojim se potvrđuje da je ugovor sklopljen.</p>
<p>Ovi Uvjeti dostupni su u svakom trenutku korisnicima usluga na način da im je omogućeno njihovo spremanje, ponovno kori&scaron;tenje i reproduciranje.</p>
<p>Ovi Uvjeti i odredbe smatraju se sastavnim dijelom svakog Ugovora o kupoprodaji sklopljenog između Trgovca i Kupca putem Interneta.</p>
<p>&nbsp;</p>
<p><strong>KUPAC</strong></p>
<p>Kupac je svaki posjetitelj koji kupuje proizvode putem emaila (<a href="mailto:saljidalje2019@gmail.com">saljidalje2019@gmail.com</a>) ili stranice dru&scaron;tvene mreže (instagram:&nbsp; @saljidalje), na način kako je to uređeno ovim Općim uvjetima poslovanja tj. svaka osoba izabere barem jedan proizvod, naruči i plati te time sklopi ugovor sklopljen na daljinu.</p>
<p>Kupac može biti samo punoljetna i poslovno sposobna osoba. Ugovor u ime i za račun maloljetnika i potpuno poslovno nesposobne osobe mogu zaključiti njihovi zakonski zastupnici ili skrbnici. Djelomično poslovno sposobne osobe ugovor mogu zaključiti samo uz suglasnost njihovog zakonskog zastupnika ili skrbnika. Za postupanje suprotno ovoj odredbi Trgovac ne snosi nikakvu odgovornost.</p>
<p>&nbsp;</p>
<p><strong>NAČIN PLAĆANJA</strong></p>
<p>Kupac može platiti uplatom na transakcijski račun ili pouzećem, o čemu odlučuje prilikom narudžbe.</p>
<p>Kod uplate na transakcijski račun, Kupac uplaćuje unaprijed dobiva podatke za uplatu (cijena, broj žiro računa, informacije o Trgovcu, svrha uplate i napomene) i uplatu vr&scaron;i na žiro račun te se proizvod &scaron;alje nakon potvrde o uplati.</p>
<p>Kod plaćanja pouzećem, proizvod se &scaron;alje po potvrdi narudžbe, a uplatu vr&scaron;i pri primitku.</p>
<p>Kod uplate pouzećem pružatelj usluge dostave (Hrvatska po&scaron;ta) naplaćuje dodatno naknadu od 3% iznosa proizvoda, a minimalno 9,00 kn.</p>
<p>&nbsp;</p>
<p><strong>SLIKE I INFORMACIJE O PROIZVODIMA</strong></p>
<p>SaljiDalje omogućuje kupnju proizvoda putem upita o dostupnosti određenog modela, budući da se dio kolekcija izrađuje po narudžbi. Proizvodi su opisani i predstavljeni na način da su naznačeni materijali, &scaron;to može varirati uslijed rasvjete i postavka monitora te su kao modeli kupcu prikazani samo u svrhu informiranja i približnog određivanja karakteristike robe bez jamčenja jednakosti. Trgovac zadržava pravo pogre&scaron;ke u opisu i slikama proizvoda.</p>
<p>&nbsp;</p>
<p><strong>CIJENE</strong></p>
<p>Cijene predstavljaju maloprodajne cijene i izražene su u kunama (HRK) te uključuju PDV i vrijede za sve načine plaćanja u trenutku obavljanja kupnje.</p>
<p>Zaključno s kupnjom, vrijedi cijena na dan narudžbe, odnosno sva naručena roba biti će isporučena po cijenama koje su vrijedile po izradi ponude odnosno u trenutku narudžbe.</p>
<p>Trgovac zadržava pravo izmjene cijena u bilo kojem trenutku bez prethodne najave te pokretanje sniženja cijena i posebne akcije.</p>
<p>Za narudžbe zaprimljene od kupaca izvan EU, mogući su dodatni tro&scaron;kovi carine i poreza, koju plaća Kupac.</p>
<p>&nbsp;</p>
<p><strong>NARUDŽBE</strong></p>
<p>Trgovac zadržava pravo da odgodi dostavu narudžbe, ukoliko postoji problem s naplatom narudžbe ili je kupac dao nepotpune podatke o dostavi. Ako naručen proizvod nije dostupan (privremeno ili je rasprodan), kupac će biti obavije&scaron;ten putem elektroničke po&scaron;te ili dru&scaron;tvene mreže.</p>
<p>Ukoliko je proizvod rasprodan, narudžba će se otkazati i kupac će dobiti povrat sredstava.</p>
<p>&nbsp;</p>
<p><strong>DOSTAVA</strong></p>
<p>Dostava se vr&scaron;i putem Hrvatske po&scaron;te i cijena po&scaron;tarine za područje Hrvatske je 30 kn.</p>
<p>Za posebne usluge kao prioritetno slanje ili slanje HP Express-om se cijena obračunava individualno u narudžbi.</p>
<p>Kupac plaća ukupan iznos cijene proizvoda i cijene po&scaron;tarine.</p>
<p>Dostava se vr&scaron;i unutar 3 do 7 radnih dana.</p>
<p><strong>&nbsp;</strong></p>
<p><strong>RASKID UGOVORA I POVRAT</strong></p>
<p>Kupac ima pravo ne navodeći za to razloge, jednostrano raskinuti ugovor sklopljen izvan poslovnih prostorija ili sklopljen na daljinu u roku od 14 dana.</p>
<p>Predmetni rok započinje teći od dana kada je kupcu ili trećoj osobi određenoj od strane kupca, a koja nije prijevoznik, roba koja čini predmet ugovora predana u posjed.</p>
<p>Ako je jednom narudžbom Kupac naručio vi&scaron;e komada robe koji trebaju biti isporučeni odvojeno, odnosno ako je riječ o robi koja se dostavlja u vi&scaron;e komada ili vi&scaron;e po&scaron;iljki, rok započinje teći od dana kada je kupcu ili trećoj osobi određenoj od strane kupca, a koja nije prijevoznik, predan u posjed zadnji komad ili zadnja po&scaron;iljka robe.</p>
<p>Ako Trgovac ne obavijesti Kupca o pravu Kupca na jednostrani raskid ugovora ovo pravo prestaje u roku 12 mjeseci od isteka roka za raskid (rok od 12 mjeseci počinje teći nakon isteka roka od 14 dana koji je predviđen za redovni raskid u slučaju uredne obavije&scaron;tenosti). Ako je pak obavijest o pravu na jednostrani raskid dostavljena u roku od 12 mjeseci, pravo na jednostrani raskid prestaje po isteku roka od 14 dana od dana kada Kupac primi tu obavijest.</p>
<p>Da bi se moglo ostvariti pravo na jednostrani raskid ovog Ugovora, Kupac mora obavijestiti Trgovca, prije isteka roka i to nedvosmislenom izjavom poslanom na&nbsp;<a href="mailto:saljidalje2019@gmail.com">saljidalje2019@gmail.com</a>&nbsp;ili putem instagram profila @saljidalje te je potrebno navesti svoje ime i prezime, adresu, broj telefona i email adresu.</p>
<p>Trgovac se obvezuje bez odgađanja dostaviti potro&scaron;aču&nbsp;<em>Potvrdu o primitku izjave o raskidu</em>&nbsp;putem elektroničke po&scaron;te koju Kupac navede u Izjavi o raskidu.<br />Izjavu o raskidu ugovora Kupac je dužan poslati prije isteka roka za raskid ugovora.</p>
<p>Kupac je dužan izvr&scaron;iti povrat robe bez odgađanja, a najkasnije u roku od 14 dana od dana kada je obavijestio trgovca o svojoj odluci da raskine ugovor.<br />Kupac je dužan snositi izravne tro&scaron;kove povrata robe.<br />Trgovac se obvezuje kupcu vratiti cjelokupan iznos uplaćenih sredstva u roku od četrnaest (14) dana po primitku pismene obavijesti o raskidu ugovora nakon &scaron;to Trgovac provjeri i prihvati vraćenu robu, koja mora biti u originalnom stanju.<br />Trgovac nije dužan izvr&scaron;iti povrat plaćenog prije nego mu roba isporučena kupcu bude vraćena.</p>
<p>Trgovac se obvezuje izvr&scaron;iti povrat plaćenoga služeći se istim sredstvima plaćanja kojima se koristio Kupac prilikom plaćanja osim ako Kupac izričito ne pristane na neko drugo sredstvo plaćanja, te uz pretpostavku da Kupac ne bude obvezan platiti nikakve dodatne tro&scaron;kove za takav povrat.</p>
<p>Roba mora biti vraćena u originalnom stanju, ne smije biti no&scaron;ena ili kori&scaron;tena te treba biti vraćena sa svim originalnim etiketama i računom.</p>
<p>Kupac je sukladno članku 77. stavak 5. Zakona o za&scaron;titi potro&scaron;ača odgovoran za svako umanjenje vrijednosti kupljenog proizvoda koje je rezultat rukovanja kupljenim proizvodom, osim onog koje je bilo potrebno za utvrđivanje prirode, obilježja i funkcionalnosti robe.</p>
<p>&nbsp;</p>
<p><strong>Isključenje prava na raskid ugovora</strong></p>
<p>Kupac nema pravo na raskid u slučajevima propisanim člankom 79. Zakona o za&scaron;titi potro&scaron;ača, a osobito ako je:</p>
<p>&ndash; ugovor o uslugama trgovac u potpunosti ispunio, a ispunjenje je započelo uz izričit prethodni pristanak potro&scaron;ača te njegovu potvrdu da je upoznat sa činjenicom da će izgubiti pravo na jednostrani raskid ugovora ako usluga bude u potpunosti ispunjena;<br />&ndash; predmet ugovora roba ili usluga čija je cijena ovisna o promjenama na financijskom trži&scaron;tu koje su izvan utjecaja trgovca, a koje se mogu pojaviti za vrijeme trajanja prava potro&scaron;ača na jednostrani raskid ugovora;<br />&ndash; predmet ugovora roba koja je izrađena po specifikaciji potro&scaron;ača ili koja je jasno prilagođena potro&scaron;aču;<br />&ndash; predmet ugovora roba koja je zbog svoje prirode nakon dostave nerazdvojivo pomije&scaron;ana s drugim stvarima.</p>
<p>&nbsp;</p>
<p><strong>Trajanje ugovora</strong><br />Ugovor koji Kupac sklapa s Trgovcem jednokratan je ugovor o kupoprodaji proizvoda na daljinu koji je konzumiran isporukom robe te izvr&scaron;enim plaćanjem od strane kupca, u slučaju da ne bude raskinut. Ovi Uvjeti kupnje sastavni su dio ugovora.</p>
<p>&nbsp;</p>
<p><strong>Zamjena</strong></p>
<p>Zamjena za veličinu ili drugi proizvod moguća je ukoliko je zamjenski artikl dostupan i ukoliko je proizvod koji se mijenja u originalnom stanju.</p>
<p>&nbsp;</p>
<p><strong>Reklamacije i prigovori</strong></p>
<p>Ukoliko Kupac ima primjedbe na kupljene proizvode, prema članku 10. Zakona o za&scaron;titi potro&scaron;ača ima pravo Trgovcu uputiti pisani prigovor putem elektroničke po&scaron;te na&nbsp;<a href="mailto:saljidalje2019@gmail.com">saljidalje2019@gmail.com</a>.</p>
<p>Kupac mora napisati svoje ime i prezime, adresu, kontakt telefon i email adresa te opis prigovora. Trgovac će na prigovor odgovoriti u roku od 5 dana od zaprimanja istog.</p>
<p>&nbsp;</p>
<p><strong>ODGOVORNOST ZA MATERIJALNE NEDOSTATKE</strong></p>
<p>Sukladno zakonu o za&scaron;titi potro&scaron;ača, na odnose između Kupca i Trgovca u slučaju materijalnog nedostatka na proizvodu primjenjuju se odredbe Zakona o obveznim odnosima (NN 35/05, 41/08, 125/11, 75/15) o odgovornosti za materijalne nedostatke.</p>
<p>Kupac je obvezan obavijestiti Trgovca o postojanju vidljivih nedostataka, bez odgađanja, a najkasnije u roku od dva mjeseca od kad je otkrio nedostatak. Trgovac ne odgovara za materijalni nedostatak prodane stvari koji se pokaže nakon proteka dvije godine od prodaje stvari.</p>
<p><strong>SPOROVI</strong></p>
<p>U slučaju spora između Kupca i Trgovca, Trgovac će nastojati svim raspoloživim sredstvima rije&scaron;iti spor mirnim putem, a u protivnom nadležan je Sud u Zagrebu.</p>
<p>&nbsp;U slučaju spora između Kupca i Trgovca, može se podnijeti prijava Sudu časti Hrvatske gospodarske komore, Sudu časti Hrvatske obrtničke komore ili prijedlog za mirenje pri centrima za mirenje.</p>
<p>Posebnom regulativom Europske unije, od 15.12.2016. diljem cijele EU, sporove vezane uz online kupnju biti će moguće rije&scaron;iti putem ODR platforme. To znači da ukoliko naiđete na problem tijekom online kupovine unutar EU (neispravan proizvod, nemogućnost zamjene itd) svoj prigovor možete na brzi i jednostavan način podnijeti putem te platforme.</p>
<p>Platformu mogu koristiti i potro&scaron;ači i trgovci, a prigovor je moguće podnijeti na bilo kojem od 23 službena jezika EU.</p>
<p><strong>AUTORSKA PRAVA</strong></p>
<p>Autorska prava su u cijelosti zadržana. Cjelokupan sadržaj i formati na stranicama SaljiDalje.eu, kako web stranici tako i dru&scaron;tvenim mrežama su vlasni&scaron;tvo SaljiDalje. Sav sadržaj koji se nalazi na na&scaron;im stranicama, ukoliko nije u osobne svrhe, ne smije se bez na&scaron;eg dopu&scaron;tenja koristiti niti dalje ustupati trećim strankama. Autorska prava u bilo kojem skinutom materijalu nisu prenosiva na Vas u slučaju bilo kakvog skidanja ili kopiranja. Nije dozvoljen reproducirati, objavljivati, distribuirati, pokazivati, modificirati, kreirati derivirani rad, prodavati, sudjelovati u prodaji ili eksportirati u nijednom slučaju, u cjelini ili u dijelovima, bilo koji dio sadržaja, stranica.</p>
<p><strong>ZA&Scaron;TITA OSOBNIH PODATAKA</strong></p>
<p>Obavezujemo se pružati za&scaron;titu osobnih podataka Kupaca, na način da prikupljamo samo nužne, osnovne podatke o kupcima koji su nužni za ispunjenje na&scaron;ih obveza.</p>
<p>Svi se podaci o korisnicima strogo čuvaju i dostupni su samo djelatnicima kojima su ti podaci nužni za ispunjenje na&scaron;ih obveza.</p>
<p>Svi se podaci o korisnicima strogo čuvaju i dostupni su samo djelatnicima kojima su ti podaci nužni za obavljanje posla. Svi na&scaron;i djelatnici odgovorni su za po&scaron;tivanje načela za&scaron;tite privatnosti.</p>
<p>Uvjeti kupnje definiraju postupak naručivanja, plaćanja, isporuke i povrata robe.</p>
<p>Kupac je svaki posjetitelj koji putem emaila (<a href="mailto:saljidalje2019@gmail.com">saljidalje2019@gmail.com</a>) ili stranice dru&scaron;tvene mreže (instagram: @saljidalje), izabere barem jedan proizvod, naruči i plati te time sklopi ugovor sklopljen na daljinu.</p>
<p>Uvjeti poslovanja dru&scaron;tva SaljiDalje sastavljeni su u skladu sa Zakonom o za&scaron;titi potro&scaron;ača (N.N. 41/14; 110/015), glava III. &ndash; Sklapanje ugovora izvan poslovnih prostorija i ugovora na daljinu te predstavljaju prethodnu obavijest u smislu članka 43. ZZP. Narudžbom proizvoda Kupac potvrđuje prihvaćanje uvjeta poslovanja.</p>
<p>SaljiDalje omogućuje kupnju proizvoda, putem upita o dostupnosti određenog modela, budući da se dio kolekcija izrađuje po narudžbi. Proizvodi su opisani i predstavljeni na način da su naznačeni materijali i boje, &scaron;to može varirati uslijed rasvjete i postavka monitora.</p>
<p>Cijene su izražene u kunama.</p>
<p>Zaključno s kupnjom, vrijedi cijena na dan narudžbe, odnosno sva naručena roba biti će isporučena po cijenama koje su vrijedile po izradi ponude odnosno u trenutku narudžbe.</p>
<p>SaljiDalje&nbsp;zadržava pravo izmjene cijena u bilo kojem trenutku bez prethodne najave te pokretanje sniženja cijena i posebne akcije.</p>
<p>Za narudžbe zaprimljene od kupaca izvan EU, mogući su dodatni tro&scaron;kovi carine i poreza, koju plaća kupac.</p>
<p>SaljiDalje&nbsp;zadržava pravo na izmjenu ovih uvjeta i pravila bez prethodne najave.</p>
<p>&nbsp;</p>
<p>NARUDŽBE</p>
<p>SaljiDalje&nbsp;zadržava pravo da odgodi dostavu narudžbe, ukoliko postoji problem s naplatom narudžbe ili je kupac dao nepotpune podatke o dostavi. Ako naručen proizvod nije dostupan (privremeno ili je rasprodan), kupac će biti obavije&scaron;ten putem elektroničke po&scaron;te ili dru&scaron;tvene mreže.</p>
<p>Ukoliko je proizvod rasprodan, narudžba će se otkazati i kupac će dobiti povrat sredstava.</p>
<p>&nbsp;</p>
<p>POVRATI/REKLAMACIJE/ZAMJENE</p>
<p>Za povrat robe kontaktirajte nas putem elektroničke po&scaron;te na&nbsp;<a href="mailto:saljidalje2019@gmail.com">saljidalje2019@gmail.com</a>&nbsp;ili putem instagram profila @saljidalje.</p>
<p>Ugovor možete jednostrano raskinuti u roku od 14 dana od dana kada je Vama ili trećoj osobi koju ste Vi odredili, a koja nije prijevoznik, roba koja je predmet ugovora bude predana u posjed.</p>
<p>Da biste mogli ostvariti pravo na jednostrani raskid ovog Ugovora, morate nas obavijestiti, prije isteka roka i to nedvosmislenom izjavom poslanom na&nbsp;<a href="mailto:saljidalje2019@gmail.com">saljidalje2019@gmail.com</a>&nbsp;ili putem instagram profila @saljidalje.</p>
<p>Potrebno je navesti svoje ime i prezime, adresu, broj telefona. Potvrdu primitka obavijesti o jednostranom raskidu ugovora dostavit ćemo Vam bez odgađanja, elektroničkom po&scaron;tom.</p>
<p>Tro&scaron;kove povrata snosi kupac.</p>
<p>Prodavač je dužan kupcu vratiti novac najkasnije u roku od 14 dana od primitka robe.</p>
<p>Roba mora biti vraćena u originalnom stanju, ne smije biti no&scaron;ena ili kori&scaron;tena te treba biti vraćena sa svim originalnim etiketama i računom.</p>
<p>Zamjena</p>
<p>Zamjena za veličinu ili drugi proizvod moguća je ukoliko je zamjenski artikl dostupan.</p>
<p>&nbsp;</p>
<p>Povrat sredstava</p>
<p>Povrat sredstava bit će izvr&scaron;en u roku 14 dana, nakon &scaron;to SaljiDalje primi, provjeri i prihvati vraćenu robu, koja mora biti u originalnom stanju.</p>
<p>&nbsp;</p>
<p>Reklamacije i prigovori</p>
<p>Ukoliko kupac ima primjedbe na kupljene proizvode, prema članku 10. Zakona o za&scaron;titi potro&scaron;ača ima pravo prodavaču uputiti pisani prigovor putem elektroničke po&scaron;te na&nbsp;<a href="mailto:saljidalje2019@gmail.com">saljidalje2019@gmail.com</a>.</p>
<p>Pri tome se moli da napi&scaron;e svoje ime i prezime, adresu, kontakt i opis prigovora. Na va&scaron; prigovor ćemo odgovoriti u roku od 5 dana od zaprimanja istog.</p>
<p>&nbsp;</p>
<p>ODGOVORNOST ZA MATERIJALNE NEDOSTATKE</p>
<p>Sukladno zakonu o za&scaron;titi potro&scaron;ača, na odnose između potro&scaron;ača i prodavatelja u slučaju materijalnog nedostatka na proizvodu primjenjuju se odredbe Zakona o obveznim odnosima (NN 35/05, 41/08, 125/11, 75/15) o odgovornosti za materijalne nedostatke.</p>
<p>Kupac je obvezan obavijestiti prodavača o postojanju vidljivih nedostataka, bez odgađanja, a najkasnije u roku od dva mjeseca od kad je otkrio nedostatak. Kao prodavač, ne odgovaramo za materijalni nedostatak prodane stvari koji se pokaže nakon proteka dvije godine od prodaje stvari.</p>
<p>Eventualne sporove Prodavatelj i Kupac nastojat će rije&scaron;iti dogovorom i mirnim putem, a u suprotnom nadležan je sud u mjestu sjedi&scaron;ta prodavatelja.</p>
<p>Posebnom regulativom Europske unije, od 15.12.2016. diljem cijele EU, sporove vezane uz online kupnju biti će moguće rije&scaron;iti putem ODR platforme. To znači da ukoliko naiđete na problem tijekom online kupovine unutar EU (neispravan proizvod, nemogućnost zamjene itd) svoj prigovor možete na brzi i jednostavan način podnijeti putem te platforme.</p>
<p>Platformu mogu koristiti i potro&scaron;ači i trgovci, a prigovor je moguće podnijeti na bilo kojem od 23 službena jezika EU.</p>
<p>&nbsp;</p>
<p>AUTORSKA PRAVA</p>
<p>Autorska prava su u cijelosti zadržana. Cjelokupan sadržaj i formati na stranicama Saljidalje, kako web stranici tako i dru&scaron;tvenim mrežama su vlasni&scaron;tvo dru&scaron;tva SaljiDalje Sav sadržaj koji se nalazi na na&scaron;im stranicama, ukoliko nije u osobne svrhe, ne smije se bez na&scaron;eg dopu&scaron;tenja koristiti niti dalje ustupati trećim strankama. Autorska prava u bilo kojem skinutom materijalu nisu prenosiva na Vas u slučaju bilo kakvog skidanja ili kopiranja. Nije dozvoljen reproducirati, objavljivati, distribuirati, pokazivati, modificirati, kreirati derivirani rad, prodavati, sudjelovati u prodaji ili eksportirati u nijednom slučaju, u cjelini ili u dijelovima, bilo koji dio sadržaja, stranica.</p>
<p>&nbsp;</p>
<p>ZA&Scaron;TITA OSOBNIH PODATAKA</p>
<p>Obavezujemo se pružati za&scaron;titu osobnih podataka kupaca, na način da prikupljamo samo nužne, osnovne podatke o kupcima koji su nužni za ispunjenje na&scaron;ih obveza.</p>
<p>Svi se podaci o korisnicima strogo čuvaju i dostupni su samo djelatnicima kojima su ti podaci nužni za ispunjenje na&scaron;ih obveza.</p>
<p>Svi se podaci o korisnicima strogo čuvaju i dostupni su samo djelatnicima kojima su ti podaci nužni za obavljanje posla. Svi na&scaron;i djelatnici odgovorni su za po&scaron;tivanje načela za&scaron;tite privatnosti.</p>
<p>&nbsp;</p>
</div>
</article>
</div>
</div>
</div>
<footer id="colophon" class="site-footer" role="contentinfo">
<div class="wrap">&nbsp;</div>
</footer>
                    </div>


                </section>

                <Link to={{
                    pathname: '/',

                }}>
                    <button class="button is-danger is-large is-fullwidth">
                        Vrati me na Početnu
        </button>
                </Link>
            </div>

            </div>
        );
    }
}








