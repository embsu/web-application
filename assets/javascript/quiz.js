class Quiz {
  constructor() {
    this.quizForm = document.getElementById("quiz"); // this eli tämän luokan quizForm on sama kuin html-tiedoston id="quiz"
    this.submitButton = document.getElementById("submit");
    this.scoreContainer = document.getElementById("score-container");
    this.quizQuestions = [ // array of objects
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

  } // constructor end

  // funktio jolla lasketaan pisteet
  calculateScore() {
    let score = 0;      // let on muuttuja, joka voi muuttua
    this.quizQuestions.forEach((question, index) => {
      const selectedAnswer = this.quizForm.querySelector(`input[name="q${index + 1}"]:checked`);
      if (selectedAnswer && selectedAnswer.value === question.answer) {
        score++;
      }
    });

    return score;
  }

  // funktio jolla näytetään pisteet
  displayScore() {
    const score = this.calculateScore(); // tässä kutsutaan yllä olevaa funktiota
    console.log("Score palautettu", score);
    this.scoreContainer.innerHTML = `Pisteesi: ${score}/${this.quizQuestions.length}`;
    if (score === 0) {
      this.scoreContainer.innerHTML += "<br>HÖH! Et saanut yhtään oikein. Yritä uudelleen!";
    } else if (score === 6) {
      this.scoreContainer.innerHTML += "<br>Onneksi olkoon! Olet melkoinen rotutietäjä!";
    } else if (score >= 3 && score <= 5) {
      this.scoreContainer.innerHTML += "<br>Hyvä! Olet melko hyvin perillä koiraroduista!";
    } else { // score >= 1
      this.scoreContainer.innerHTML += "<br>Nyt ei mennyt ihan putkeen. Yritä uudelleen!";
    }

  }
  init() {
    if (this.submitButton) {
      this.submitButton.addEventListener("click", () => {
        // Reset results from previous attempts
        document.querySelectorAll(".result").forEach((result) => { //käytetään arrow functionia event handlerina
          result.textContent = "";
        });

        this.displayScore();

        // For each question, check the selected answer and display the result
        this.quizQuestions.forEach((question, index) => {
          const selectedAnswer = this.quizForm.querySelector(`input[name="q${index + 1}"]:checked`);
          const resultElement = document.getElementById(`result${index + 1}`);

          if (selectedAnswer) {
            if (selectedAnswer.value === question.answer) {
              resultElement.textContent = "Oikein";
              resultElement.style.color = "#69a86ea8";
            } else {
              resultElement.textContent = "Väärin";
              resultElement.style.color = "#dc7373a8";
            }
          } else {
            resultElement.textContent = "Et valinnut vastausta.";
          }
        });

        this.quizForm.reset();
      });
    }
  }
}

// Create an instance of the Quiz class and initialize it
const quizInstance = new Quiz();
quizInstance.init();