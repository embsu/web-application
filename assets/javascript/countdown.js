var birthday = new Date('2019-07-01');

//----------BION IKÄ
function calculateAge() {

  var currentDate = new Date();
  var differenceInDays = (currentDate - birthday) / (1000 * 60 * 60 * 24); // 1000ms * 60s * 60min * 24h
  var ageyears = Math.floor(differenceInDays / 365.25);
  var differenceInMonths = Math.floor(differenceInDays / 30.44) - (ageyears * 12);

  document.getElementById('dogAge').innerHTML = `Ikä: ${ageyears} vuotta, ${differenceInMonths} kuukautta`;
  return ageyears;
};

calculateAge()


//--------------------------COUNTDOWN
function countdownForComingBirthday() {

  var today = new Date();
  // next birhday (thisyear, month, day)
  var nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
  if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  return nextBirthday;
}

// update the countdown and age
function updateCountdown() {
  var currentDate = new Date();
  var nextBirthday = countdownForComingBirthday()
  var timeRemaining = nextBirthday - currentDate;
  var age = calculateAge();

  if (timeRemaining <= 0) {
    document.getElementById('countdown').innerHTML = `Happy ${age}th Birthday!`;
  } else {
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

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


