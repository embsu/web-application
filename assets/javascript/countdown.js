    //----------------------- BION IKÄ
    function calculateAge() {
        const birthYear = 2019; // birth year

        const currentYear = new Date().getFullYear();
  
        const age = currentYear - birthYear;
    
        return age;
      }
    
      // update the age in the HTML
      function updateAge() {
        const ageElement = document.getElementById('dogAge');
        const age = calculateAge();
        ageElement.textContent = `Ikä: ${age} vuotta`;
      }
    
      updateAge();
  
  //--------------------------COUNTDOWN
  function getNextBirthday() {
    const today = new Date();
    const birthDate = new Date(today.getFullYear(), 6, 1); // july 1st
    if (today > birthDate) {
      // if this year's birthday has already passed, calculate for the next year
      birthDate.setFullYear(today.getFullYear() + 1);
    }
    return birthDate;
  }

  // update the countdown and age
  function updateCountdown() {
    const nextBirthday = getNextBirthday();
    const currentDate = new Date();
    const timeRemaining = nextBirthday - currentDate;

    // calculate age
    const age = currentDate.getFullYear() - 2019;

    if (timeRemaining <= 0) {
      // birthday has passed
      document.getElementById('countdown').innerHTML = `Happy ${age}th Birthday!`;
    } else {
      // calculate days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // display the result
      document.getElementById('countdown').innerHTML = `${days} päivää <br> 
      ${hours} tuntia <br>
       ${minutes} minuuttia <br>
        ${seconds} sekuntia <br> `;

        document.getElementById('ikaVuodet').innerHTML = `jolloin täytän ${age + 1} vuotta!`;

    }
  }

  // update the countdown every second
  setInterval(updateCountdown, 1000);

  // initial update
  updateCountdown();