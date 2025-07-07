document.addEventListener("DOMContentLoaded", () => {
  const startBtn    = document.getElementById("start-btn");
  const titleScreen = document.getElementById("title-screen");
  const quizDiv     = document.getElementById("quiz");

  const questions = [ /* … your 12 question objects … */ ];
  const results   = { /* … your archetype results … */ };
  const keywords  = { /* … your keywords … */ };

  let current = 0;
  const scores = {};

  // Fade title → quiz
  startBtn.addEventListener("click", () => {
    titleScreen.classList.add("fade-out");
    setTimeout(() => {
      titleScreen.classList.add("hidden");
      quizDiv.classList.remove("hidden");
      quizDiv.classList.add("fade-in");
      showQuestion();
    }, 1000);
  });

  function showQuestion() {
    quizDiv.innerHTML = "";
    if (current >= questions.length) return showResults();

    const qObj = questions[current];
    const wrapper = document.createElement("div");
    wrapper.className = "quiz-content";

    const h2 = document.createElement("h2");
    h2.textContent = qObj.text;
    wrapper.appendChild(h2);

    qObj.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt.text;
      btn.addEventListener("click", () => {
        // tally
        Object.entries(opt.contributesTo.soulmate).forEach(([k,v]) => {
          scores[k] = (scores[k]||0) + v;
        });
        current++;
        showQuestion();
      });
      wrapper.appendChild(btn);
    });

    quizDiv.innerHTML = "";          // clear old
    quizDiv.appendChild(wrapper);
  }

  function getTop() {
    return Object.entries(scores)
      .reduce((a,b) => b[1] > a[1] ? b : a, ["", -Infinity])[0];
  }

  function showResults() {
    quizDiv.classList.remove("fade-in");
    quizDiv.classList.add("fade-out");
    setTimeout(() => {
      quizDiv.innerHTML = "";
      quizDiv.classList.remove("fade-out");
      
      const type = getTop();
      const wrapper = document.createElement("div");
      wrapper.className = "quiz-content";

      // Title
      const h2 = document.createElement("h2");
      h2.textContent = `💫 Your Soulmate Archetype: ${type}`;
      wrapper.appendChild(h2);

      // Keywords
      const kw = document.createElement("p");
      kw.textContent = keywords[type] || "";
      kw.style.fontStyle = "italic";
      wrapper.appendChild(kw);

      // Description
      results[type].split("LINE").forEach(par => {
        const p = document.createElement("p");
        p.textContent = par.trim();
        wrapper.appendChild(p);
      });

      quizDiv.appendChild(wrapper);
    }, 500);
  }

  // PREP: hide quiz at start
  quizDiv.classList.add("hidden");
});
