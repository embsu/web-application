# https://embsu.github.io/web_development/index.html

 <h1>Web-sivusto ja sen vaatimukset</h1>

 <h3>HTML</h3>

 <b> 1/5: Basic HTML structure is present. </b>
 - Näkyy jokaisella html sivulla
 
<b>2/5: HTML structure with clear content differentiation (headings, paragraphs, lists).</b>
- Headings, paragraphs -> joka sivulla
- Lists -> Bio & The Dog API (info.html) / Navigointi (navigationbar.html)

<b>3/5: Use of forms, links, and media</b>
- Form -> Palaute (form.html)
- Links -> Bio & The Dog API (info.html)
- Media -> Bio & The Dog API (info.html), video


<b>4/5: Tables are effectively used.</b>
- Rotuvertailu (breedtable.html)

<b>5/5: Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.</b>
- Mielestäni tämäkin kohta täyttyy joka sivulla.
- Esim. navigointipalkki ja footer tehty erillisiin html tiedostoihin, jotka includattu javascriptin avulla varsinaisiin sivuihin. Eli ei tarvi jokaiseen html tiedostoon aina muokata samaa asiaa erikseen, vaan kaikki toimii yhden tiedoston kautta. (navigationbar.html, footer.html)

 <h3>CSS</h3>

 <b>1/5: Basic CSS styling (colors, fonts).</b>
 - Löytyy joka sivulta

<b>2/5: Use of classes and IDs to style specific elements.</b>
- Jokaisessa html tiedostossa on käytetty jompia kumpia tai kumpiakin. Näiden tyylittelyt löytyy sitten style.css tiedostosta. 

<b>3/5: Implementation of responsive design elements.</b>
- Media queryjä hyödynnetty (style.css) kun näytön leveys max 768px, niin tyylittely muuttuu hieman sopivammaksi pienemmälle näytölle. Mm. dropdown menun ikoni ilmaantuu ja alkuperäinen navigation bar katoaa näkyvistä. 
- Esimerkiksi Bio & The Dog API (info.html) ja Etusivu (index.html) sivuilla käytetty gridiä, joka on responsiivinen. Myös gallerian kuvat on aseteltu skaalautumaan responsiivisesti ikkunaa skaalatessa.

<b>4/5: Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)</b>
- Flexbox ollut ahkerassa käytössä (style.css)
- Sekä aiemmassa kohdassa mainittu grid näkyy Bio & The Dog API (info.html) sekä Etusivulla (index.html)


<b>5/5: Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.</b>
- Sivusto tehty mahdollisimman selkeäksi ja asettelut on tehty käyttäjän kannalta mukaviksi.

 <h3>JavaScript Basics</h3>

 <b>1/5: Simple interactions (like alerts on button click).</b>
 - -> Palaute (form.html, formsubmit.js), jos nimi, sähköposti tai viesti kenttä ovat tyhjiä ja painat lähetä, tulee alert. Myös oikein täytetystä formista tulee alert. 

<b>2/5: Multiple event listeners and basic DOM manipulations.</b>
- Event listereitä mm. -> Teemanvaihtonapissa (switch.js), Gallerian albuminapeissa (albums.js), Tietokilpailun Lähetä napissa (quiz.js) ja taitaa olla vielä jossain muuallakin.
- DOM manipulations -> Bio & The Dog API sivulla kun koirarotu on valittu, sen alla olevaan elementtiin tulee tiedot näkyviin dom manipulaation avulla. Myös samalla sivulla oleva syntymäpäivälaskuri käyttää DOM manipulaatiota. (countdown.js). Myös koiran perustiedot kohdassa, ikä päivittyy oikean iän perusteella skriptin kautta. (countdown.js)


<b>3/5: Use of arrays, objects, and functions.</b>
- Tietokilpailu sivulla ja tämän skriptissä (quiz.js) hyödynnetty arrayta, tähän talletettu kysymykset ja näiden oikeat vastaukset. 
- Sama skripti tehty myös hyödyntäen luokkia ja olioita. 
- Funktioita löytyy melkeimpä kaikista .js tiedostoista. Esim quiz.js 

<b>4/5: Advanced logic, looping through data, and dynamic DOM updates.</b>
- Advanced logic -> Useimmat skriptit kuten quiz.js, backtotop.js ja countdown.js käyttää näitä (if, else if rakenteet)
- Looping through data -> Esim. forEach looppia käytetty mm. Tietokilpailun (quiz.js) ja Galleria (albums.js) skripteissä.
- Dynamic DOM updates -> Bio & The Dog API (info.html) sivulla näitä hyödynnetty koiran ikä kohdassa, sekä syntymäpäivän countdown laskurissa (countdown.js). Countdown.js päivittää DOMia getElementById avulla sekunnin välein.

<b>5/5: Consistent use of Object-Oriented JavaScript principles.</b>
- quiz.js tehty kokonaan hyödyntäen olio-ohjelmointia

 <h3>Asynchronous Operations</h3>

 <b>1/5: Use of timers.</b>

 - Bio & The Dog API sivun syntymäpäivä ajastin(countdown.js) käyttää setInterval timeriä, jonka avulla countdown elementtiin päivitetään aika joka sekunnin välein. 

<b>2/5: Successful implementation of an AJAX call or Fetch.</b>
-  Bio & The Dog API sivulla oleva fetch, haetaan ilmaisesta The Dog API nimisestä apista koirarotuja, kuvia ja yleisiä tietoja (dogapi.js)

<b>3/5: Data from the asynchronous call is displayed on the webpage.</b>
- Esim. Fetch data. Näytetään ensin valikon muodossa, jossa on listattuna ensin kaikki koirarodut mitä APIsta löytyy, ja kun rotu valitaan, niin tiedot näkyvät valikon alapuolella. 

<b>4/5: Error handling is implemented (for failed API calls, etc.).</b>

- dogapi.js käytetty catch statementtia, antaa virheviestin selaimen konsoliin ja sivun elementteihin.  

<b>5/5: Effective use of asynchronous data to enhance user experience (like filtering, sorting).</b>

- Bio & The Dog API sivulla 'option' elementti, jonka avulla voit valita valikosta haluamasi koirarodun. Valinnan jälkeen valintaa vastaavat tiedot tulevat näkymään alapuolelle.
