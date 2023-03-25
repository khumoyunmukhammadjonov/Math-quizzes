// mobile menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});
// mobile menu

//form
const form = document.querySelector("#email-form");
const emailInput = document.querySelector("#email-input");
const emailError = document.querySelector("#email-error");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!emailInput.checkValidity()) {
    emailError.classList.remove("is-hidden");
    emailInput.classList.add("is-danger");
    return;
  }

  alert(`Thanks for signing up! Your email address is ${emailInput.value}.`);
});

emailInput.addEventListener("input", function () {
  emailError.classList.add("is-hidden");
  emailInput.classList.remove("is-danger");
});
//form

//questions
const questions = [
  { num1: 11, num2: 55, operator: "+", answer: 66 },
  { num1: 82, num2: 5, operator: "+", answer: 87 },
  { num1: 48, num2: 30, operator: "+", answer: 78 },
  { num1: 53, num2: 16, operator: "+", answer: 69 },
  { num1: 29, num2: 20, operator: "+", answer: 49 },
  { num1: 79, num2: 10, operator: "+", answer: 89 },
  { num1: 22, num2: 33, operator: "+", answer: 55 },
  { num1: 36, num2: 23, operator: "+", answer: 59 },

  { num1: 10, num2: 7, operator: "-", answer: 3 },
  { num1: 22, num2: 12, operator: "-", answer: 10 },
  { num1: 78, num2: 38, operator: "-", answer: 40 },
  { num1: 57, num2: 26, operator: "-", answer: 31 },
  { num1: 82, num2: 51, operator: "-", answer: 31 },
  { num1: 74, num2: 50, operator: "-", answer: 24 },
  { num1: 31, num2: 11, operator: "-", answer: 20 },
  { num1: 68, num2: 43, operator: "-", answer: 25 },

  { num1: 4, num2: 5, operator: "*", answer: 20 },
  { num1: 9, num2: 4, operator: "*", answer: 36 },
  { num1: 10, num2: 8, operator: "*", answer: 80 },
  { num1: 4, num2: 4, operator: "*", answer: 16 },
  { num1: 9, num2: 9, operator: "*", answer: 81 },
  { num1: 7, num2: 6, operator: "*", answer: 42 },
  { num1: 6, num2: 8, operator: "*", answer: 48 },
  { num1: 5, num2: 5, operator: "*", answer: 25 },

  { num1: 10, num2: 2, operator: "/", answer: 5 },
  { num1: 21, num2: 3, operator: "/", answer: 7 },
  { num1: 16, num2: 2, operator: "/", answer: 8 },
  { num1: 35, num2: 5, operator: "/", answer: 7 },
  { num1: 18, num2: 6, operator: "/", answer: 3 },
  { num1: 45, num2: 9, operator: "/", answer: 5 },
  { num1: 14, num2: 7, operator: "/", answer: 2 },
  { num1: 32, num2: 8, operator: "/", answer: 4 },
];

const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  const buttons = card.querySelectorAll(".card-footer-item");
  buttons.forEach((button, buttonIndex) => {
    const question = questions[index];
    const answer = question.answer;

    button.addEventListener("click", () => {
      const selectedAnswer = parseInt(button.textContent);
      const num1 = question.num1;
      const num2 = question.num2;
      let calculatedAnswer;
      switch (question.operator) {
        case "+":
          calculatedAnswer = num1 + num2;
          break;
        case "-":
          calculatedAnswer = num1 - num2;
          break;
        case "*":
          calculatedAnswer = num1 * num2;
          break;
        case "/":
          calculatedAnswer = num1 / num2;
          break;
        default:
          calculatedAnswer = 0;
      }

      if (selectedAnswer === calculatedAnswer) {
        card.querySelector(".card-header-title").textContent = "Correct";
      } else {
        card.querySelector(".card-header-title").innerHTML =
          "<span style='color: red;'>Incorrect</span>";
      }
    });
  });
});
//questions
