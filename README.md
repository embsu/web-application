# https://embsu.github.io/web_development/index.html

 <h1>Web-sivusto ja sen vaatimukset</h1>

 <h3>HTML</h3>

 1/5: Basic HTML structure is present. 
 - Näkyy joka sivulla.
 
2/5: HTML structure with clear content differentiation (headings, paragraphs, lists).
- Headings, paragraphs -> joka sivulla
- Lists -> Bio & The Dog API (info.html) / Navigointi (navigationbar.html)

3/5: Use of forms, links, and media
- Form -> Palaute (form.html)
- Links -> Bio & The Dog API (info.html)
- Media -> Bio & The Dog API (info.html)


4/5: Tables are effectively used.
- Rotuvertailu (breedtable.html)

5/5: Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.
- Mielestäni tämäkin kohta täyttyy joka sivulla. 

 <h3>CSS</h3>

 1/5: Basic CSS styling (colors, fonts).
 - Löytyy joka sivulta

2/5: Use of classes and IDs to style specific elements.
- Löytyy myös joka sivulta

3/5: Implementation of responsive design elements.
- Media queryjä hyödynnetty (style.css)
- Esimerkiksi Bio & The Dog API (info.html) ja Etusivu (index.html) sivuilla käytetty gridiä, joka on responsiivinen

4/5: Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)
- Flexbox ollut ahkerassa käytössä (style.css)
- Sekä aiemmassa kohdassa mainittu grid näkyy Bio & The Dog API (info.html) sekä Etusivu (index.html)

5/5: Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.
- Löytyy 

 <h3>JavaScript Basics</h3>

 1/5: Simple interactions (like alerts on button click).
 - -> Palaute (form.html, formsubmit.js), jos nimi, sähköposti tai viesti kenttä ovat tyhjiä ja painat lähetä, tulee alert. Myös oikein täytetystä formista tulee alert. 

2/5: Multiple event listeners and basic DOM manipulations.
- Event listereitä mm. -> Teemanvaihtonapissa (switch.js), Gallerian albuminapeissa (albums.js), Tietokilpailun Lähetä napissa (quiz.js) ja taitaa olla vielä jossain muuallakin.
- DOM manipulations -> The Dog API(dogapi.js) ja Bio & The Dog API sivulla ikä ja syntymäpäivä tulee DOM manipulaatioiden kautta (countdown.js)


3/5: Use of arrays, objects, and functions.
- <i>AAAAAAAAAAAAAAAAAAAAAAA </i>

4/5: Advanced logic, looping through data, and dynamic DOM updates.
- <i>AAAAAAAAAAAAAAAAAAAAAAA </i>

5/5: Consistent use of Object-Oriented JavaScript principles.
- <i>AAAAAAAAAAAAAAAAAAAAAAA </i>

 <h3>Asynchronous Operations</h3>

 1/5: Use of timers.

 - Bio & The Dog API sivun syntymäpäivä ajastin(countdown.js) käyttää setInterval timeriä, jonka avulla countdown elementtiin päivitetään aika joka sekunnin välein. 

2/5: Successful implementation of an AJAX call or Fetch.
-  Bio & The Dog API sivulla oleva fetch, haetaan ilmaisesta The Dog API nimisestä apista koirarotuja, kuvia ja yleisiä tietoja (dogapi.js)

3/5: Data from the asynchronous call is displayed on the webpage.
- Esim. Fetch data. Näytetään ensin valikon muodossa, jossa on listattuna ensin kaikki koirarodut mitä APIsta löytyy, ja kun rotu valitaan, niin tiedot näkyvät valikon alapuolella. 

4/5: Error handling is implemented (for failed API calls, etc.).

- dogapi.js käytetty catch statementtia, antaa virhe viestin selaimen konsoliin ja sivun elementteihin.  

5/5: Effective use of asynchronous data to enhance user experience (like filtering, sorting).

- <i> ei viel </i>
