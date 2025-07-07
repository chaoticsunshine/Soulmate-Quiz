document.addEventListener("DOMContentLoaded", () => {
  const startBtn    = document.getElementById("start-btn");
  const titleScreen = document.getElementById("title-screen");
  const quizDiv     = document.getElementById("quiz");

  // dummy single question to test
  const questions = [
    {
      text: "Test question?",
      options: [
        { text: "Answer A", contrib: 1 },
        { text: "Answer B", contrib: 2 }
      ]
    }
  ];
  let current = 0;

  startBtn.addEventListener("click", () => {
    // hide title, show quiz
    titleScreen.style.display = "none";
    quizDiv.style.display = "block";
    renderQuestion();
  });

  function renderQuestion() {
    quizDiv.innerHTML = "";
    if (current >= questions.length) {
      quizDiv.innerHTML = "<p>All done!</p>";
      return;
    }
    const q = questions[current];
    const h2 = document.createElement("h2");
    h2.textContent = q.text;
    quizDiv.appendChild(h2);

    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt.text;
      btn.onclick = () => {
        current++;
        renderQuestion();
      };
      quizDiv.appendChild(btn);
    });
  }
});
