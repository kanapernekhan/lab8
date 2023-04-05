let questions = [
  {
    question: "1) 2+2?",
    options: ["2", "4", "6", "8"],
    answer: "4"
  },
  {
    question: "2) 3*3?",
    options: ["9", "6", "27", "999"],
    answer: "9"
  },
  {
    question: "3) At what time we have lecture of CS111?",
    options: ["9am", "7am", "10am", "10pm"],
    answer: "10am"
  },
  {
    question: "4) Will I get A?",
    options: ["Probably", "Of course", "Yes", "No"],
    answer: "Yes"
  },
  {
    question: "5) The best country in the world?",
    options: ["Kazakhstan", "USA", "Russia", "Norway"],
    answer: "Kazakhstan"
  }
];

$(document).ready(function() {
  let quizContainer = $("#quiz-box");
  function showQuestion(){
  for (let i = 0; i < questions.length; i++) {
    let questionDiv = $("<div>").addClass("question").text(questions[i].question);
    let choicesDiv = $("<div>").addClass("choices");

    for (let j = 0; j < questions[i].options.length; j++) {
      let choiceLabel = $("<label>");
      let choiceInput = $("<input>").attr({
        type: "radio",
        name: "question-" + i,
        value: questions[i].options[j]
      });
      let choiceText = $("<span>").text(questions[i].options[j]);

      choiceLabel.append(choiceInput);
      choiceLabel.append(choiceText);
      choicesDiv.append(choiceLabel);
    }

    quizContainer.append(questionDiv);
    quizContainer.append(choicesDiv);
    questionDiv.css("margin-bottom", "10px");
  }

  let submitButton = $(".button-3");
  quizContainer.append(submitButton);

  submitButton.click(function() {
    let score = 0;
    let numQuestions = questions.length;

    for (let i = 0; i < numQuestions; i++) {
      let selectedOption = $("input[name='question-" + i + "']:checked").val();

      if (selectedOption === questions[i].answer) {
        score++;
      }
    }

    let scorePercent = (score / numQuestions) * 100;
    let scoreDiv = $("<div>").text("Your final score is: " + score + "/" + numQuestions + " (" + scorePercent + "%)");
    quizContainer.append(scoreDiv);

    let resultSection = $(".button-3");
    if (!resultSection.is(":hidden")) {
      resultSection.hide();
    }
    let restartButton = $("<button>").addClass("restart-button").text("Restart Quiz");
    quizContainer.append(restartButton);
    restartButton.click(function() {
      location.reload();
    });
  });
}
  showQuestion();
});
