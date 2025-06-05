const questions = [
  {
    text: "When you feel most yourself, where are you?",
    options: [
      {
        text: "In a warm space with soft light, quiet music, and someone I trust nearby.",
        contributesTo: { self: ['The Gentle Anchor', 'The Golden Heart'], soulmate: ['The Firestarter'] }
      },
      {
        text: "At the heart of the action—somewhere wild, alive, and unpredictable.",
        contributesTo: { self: ['The Firestarter'], soulmate: ['The Gentle Anchor', 'The Iron Heart'] }
      },
      {
        text: "In a liminal space—walking under stars, in a forest at twilight, deep in thought.",
        contributesTo: { self: ['The Stargazer’s Mirror'], soulmate: ['The Golden Heart'] }
      }
    ]
  },
  {
    text: "You’re wandering through a strange forest and come across something unexpected. What do you do?",
    options: [
      {
        text: "Pause, observe, and let my intuition guide me.",
        contributesTo: { self: ['The Stargazer’s Mirror', 'The Gentle Anchor'], soulmate: ['The Firestarter'] }
      },
      {
        text: "Investigate immediately—curiosity always wins.",
        contributesTo: { self: ['The Firestarter'], soulmate: ['The Iron Heart'] }
      },
      {
        text: "Call out to see if anyone else is nearby—this could be fun or dangerous!",
        contributesTo: { self: ['The Golden Heart'], soulmate: ['The Stargazer’s Mirror'] }
      }
    ]
  }
];

const results = {
  "The Gentle Anchor": "You are the Gentle Anchor: calm, steady, and emotionally intuitive. Your soulmate is someone who brings excitement without chaos—someone who makes you feel alive but still safe.",
  "The Firestarter": "You are the Firestarter: bold, passionate, and full of raw energy. Your soulmate is someone grounded, someone who helps you stay focused and tender while never dimming your flame.",
  "The Stargazer’s Mirror": "You are the Stargazer’s Mirror: introspective, poetic, and dreamy. You need someone who can meet you on that cosmic level—or shake you out of your thoughts when you need it.",
  "The Golden Heart": "You are the Golden Heart: full of empathy and light. Your soulmate balances you with complexity, challenge, or spiritual connection.",
  "The Iron Heart": "You are the Iron Heart: dependable, loyal, protective. You need someone who softens your edges and invites you to feel more, not just do more."
};

let currentQuestion = 0;
const selfScores = {};
const soulmateScores = {};

function renderQuestion() {
  const container = document.getElementById("quiz");
  container.innerHTML = "";
  if (currentQuestion >= questions.length) {
    return showResults();
  }

  const q = questions[currentQuestion];
  const questionEl = document.createElement("h2");
  questionEl.textContent = q.text;
  container.appendChild(questionEl);

  q.options.forEach((option, i) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.onclick = () => {
      // Add to scores
      option.contributesTo.self.forEach(type => {
        selfScores[type] = (selfScores[type] || 0) + 1;
      });
      option.contributesTo.soulmate.forEach(type => {
        soulmateScores[type] = (soulmateScores[type] || 0) + 1;
      });
      currentQuestion++;
      renderQuestion();
    };
    container.appendChild(button);
  });
}

function getTopType(scoreObj) {
  let max = -Infinity;
  let top = null;
  for (const type in scoreObj) {
    if (scoreObj[type] > max) {
      max = scoreObj[type];
      top = type;
    }
  }
  return top;
}

function showResults() {
  const container = document.getElementById("quiz");
  container.innerHTML = "";

  const selfType = getTopType(selfScores);
  const soulmateType = getTopType(soulmateScores);

  const resultHeader = document.createElement("h2");
  resultHeader.textContent = `✨ You Are: ${selfType}`;
  container.appendChild(resultHeader);

  const selfPara = document.createElement("p");
  selfPara.textContent = results[selfType];
  container.appendChild(selfPara);

  const soulmateHeader = document.createElement("h2");
  soulmateHeader.textContent = `💫 Your Soulmate: ${soulmateType}`;
  container.appendChild(soulmateHeader);

  const soulmatePara = document.createElement("p");
  soulmatePara.textContent = results[soulmateType];
  container.appendChild(soulmatePara);
}

renderQuestion();
