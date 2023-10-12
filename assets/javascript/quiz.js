const quizForm = document.getElementById("quiz");
const submitButton = document.getElementById("submit"); // talletetaan submit-nappi muuttujaan submitButton
const scoreContainer = document.getElementById("score-container");



console.log("JavaScript is working!");



// Define an object to store the quiz questions and correct answers
const quizQuestions = [ // array of objects

 {
    question: "1. Rotu",
    answer: "b"
 },
 {
    question: "2. Rotu",
    answer: "c"
 },
 {
    question: "3. Rotu",
    answer: "c"
 },
 {
    question: "4. Rotu",
    answer: "a"
 },
 {
    question: "5. Rotu",
    answer: "b"
 },
 {
    question: "6. Rotu",
    answer: "a"
 }
 ];

// Function to calculate the score
function calculateScore() {
    let score = 0;      // let on muuttuja, joka voi muuttua
    quizQuestions.forEach((question, index) => {
      const selectedAnswer = quizForm.querySelector(`input[name="q${index + 1}"]:checked`);
      if (selectedAnswer && selectedAnswer.value === question.answer) {
        score++;
      }
    });
    
    return score;
  }

  console.log("Ennen display score"); //näkyy

// Function to display the score on the webpage
function displayScore() {
    const score = calculateScore();
    console.log("Score palautettu", score);
    // const scoreContainer = document.getElementById("score"); // Add an id to the HTML element where you want to display the score
    // if (scoreContainer) {
      scoreContainer.innerHTML = `Pisteesi: ${score}/${quizQuestions.length}`;
      if (score === 0) {
        scoreContainer.innerHTML += "<br>HÖH! Et saanut yhtään oikein. Yritä uudelleen!";
      } else if (score === 6) {
        scoreContainer.innerHTML += "<br>Onneksi olkoon! Olet varsinainen rotutietäjä!";
      } else if (score >= 3 || score <= 5) {
        scoreContainer.innerHTML += "<br>Hyvä! Olet melko hyvin perillä koiraroduista!";
      } else { // score >= 1
        scoreContainer.innerHTML += "<br>Yritä uudelleen! Kyllä se siitä!";
      }
    // }
  }

  console.log("Before adding event listener"); // Add this line
  if (submitButton) {
      submitButton.addEventListener("click", function () {
          console.log("Button clicked!");
          quizForm.reset(); // Reset the form to unselect all radio buttons
          displayScore();

      });
  }