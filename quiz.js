// Full quiz question array for GitHub Pages quiz with dual scoring system
// Exact wording and weights from Kat's provided document

const questions = [
  {
    text: "You find yourself in a strange dream. You’re walking through a surreal landscape. What catches your attention first?",
    options: [
      {
        text: "A. A glowing doorway hidden behind ivy, humming like it's alive.",
        contributesTo: {
          self: { 'Witchlight Alchemist': 1, "Stargazer’s Mirror": 0.5, 'Trickster Flame': 0.25 },
          soulmate: { 'Golden Heart': 1, 'Power Pairing': 0.5 }
        }
      },
      {
        text: "B. A fire crackling on its own in the centre of a clearing.",
        contributesTo: {
          self: { 'Firestarter': 1, 'Velvet Rebel': 0.5, 'Golden Heart': 0.25 },
          soulmate: { 'Gentle Anchor': 1, 'Iron Heart': 0.5 }
        }
      },
      {
        text: "C. A beautiful stranger watching you with kind eyes and no expression.",
        contributesTo: {
          self: { "Stargazer’s Mirror": 1, 'Gentle Anchor': 0.5, 'Witchlight Alchemist': 0.25 },
          soulmate: { 'Solar Siren': 1, 'Golden Heart': 0.5 }
        }
      },
      {
        text: "D. A staircase twisting into the sky, daring you to climb.",
        contributesTo: {
          self: { 'Solar Siren': 1, 'Power Pairing': 0.5, 'Velvet Rebel': 0.25 },
          soulmate: { "Stargazer’s Mirror": 1, 'Blooming Storm': 0.5 }
        }
      }
    ]
  },
  {
    text: "You’re invited to a gathering where you don’t know anyone. What do you do first?",
    options: [
      {
        text: "A. Find the dog, the bookshelf, or a corner with snacks and stay there.",
        contributesTo: {
          self: { 'Gentle Anchor': 1, 'Iron Heart': 0.5, "Stargazer’s Mirror": 0.25 },
          soulmate: { 'Trickster Flame': 1, 'Velvet Rebel': 0.5 }
        }
      },
      {
        text: "B. Start helping in the kitchen or tidying up—doing something makes you feel useful.",
        contributesTo: {
          self: { 'Loyal Best Friend': 1, 'Iron Heart': 0.5, 'Golden Heart': 0.25 },
          soulmate: { 'Velvet Rebel': 1, 'Trickster Flame': 0.5 }
        }
      },
      {
        text: "C. Make a dramatic entrance and try to charm the first person you meet.",
        contributesTo: {
          self: { 'Golden Heart': 1, 'Solar Siren': 0.5, 'Firestarter': 0.25 },
          soulmate: { 'Witchlight Alchemist': 1, "Stargazer’s Mirror": 0.5 }
        }
      },
      {
        text: "D. Find the weirdest person in the room and strike up a conversation.",
        contributesTo: {
          self: { 'Trickster Flame': 1, 'Witchlight Alchemist': 0.5, 'Blooming Storm': 0.25 },
          soulmate: { 'Iron Heart': 1, 'Loyal Best Friend': 0.5 }
        }
      }
    ]
  },
  {
    text: "When you first meet someone new, what instinct guides how you connect with them?",
    options: [
      {
        text: "A. I notice their body language and try to mirror their energy.",
        contributesTo: {
          self: { "Stargazer’s Mirror": 1, 'Gentle Anchor': 0.5, 'Loyal Best Friend': 0.25 },
          soulmate: { 'Solar Siren': 1, 'Firestarter': 0.5 }
        }
      },
      {
        text: "B. I try to make them laugh or feel comfortable—it’s easier when everyone’s at ease.",
        contributesTo: {
          self: { 'Golden Heart': 1, 'Trickster Flame': 0.5, 'Loyal Best Friend': 0.25 },
          soulmate: { 'Witchlight Alchemist': 1, 'Blooming Storm': 0.5 }
        }
      },
      {
        text: "C. I watch and listen for a while—wait to see who they really are before revealing much.",
        contributesTo: {
          self: { 'Iron Heart': 1, 'Velvet Rebel': 0.5, "Stargazer’s Mirror": 0.25 },
          soulmate: { 'Golden Heart': 1, 'Trickster Flame': 0.5 }
        }
      },
      {
        text: "D. I dive right in—it’s more honest to be fully myself upfront.",
        contributesTo: {
          self: { 'Solar Siren': 1, 'Firestarter': 0.5, 'Trickster Flame': 0.25 },
          soulmate: { 'Iron Heart': 1, 'Witchlight Alchemist': 0.5 }
        }
      }
    ]
  },
  {
    text: "Which kind of love makes your heart ache in the best way?",
    options: [
      {
        text: "A. The slow, growing kind—like two roots tangling quietly underground.",
        contributesTo: {
          self: { 'Gentle Anchor': 1, 'Loyal Best Friend': 0.5, 'Iron Heart': 0.25 },
          soulmate: { 'Blooming Storm': 1, 'Velvet Rebel': 0.5 }
        }
      },
      {
        text: "B. The fiery, instant kind—everything feels electric from the start.",
        contributesTo: {
          self: { 'Firestarter': 1, 'Solar Siren': 0.5, 'Trickster Flame': 0.25 },
          soulmate: { 'Gentle Anchor': 1, 'Loyal Best Friend': 0.5 }
        }
      },
      {
        text: "C. The strange, fated kind—like you’ve met before in a dream.",
        contributesTo: {
          self: { 'Stargazer’s Mirror': 1, 'Witchlight Alchemist': 0.5, 'Velvet Rebel': 0.25 },
          soulmate: { 'Power Pairing': 1, 'Solar Siren': 0.5 }
        }
      },
       {
    text: "Your inner world feels most like...",
    options: [
      {
        text: "A. A foggy coastline full of secrets and hidden paths.",
        contributesTo: {
          self: { 'Witchlight Alchemist': 1, 'Stargazer’s Mirror': 0.5, 'Velvet Rebel': 0.25 },
          soulmate: { 'Golden Heart': 1, 'Power Pairing': 0.5 }
        }
      },
      {
        text: "B. A thunderstorm building in a still sky.",
        contributesTo: {
          self: { 'Blooming Storm': 1, 'Firestarter': 0.5, 'Iron Heart': 0.25 },
          soulmate: { 'Loyal Best Friend': 1, 'Gentle Anchor': 0.5 }
        }
      },
      {
        text: "C. A garden full of colour, movement, and surprise.",
        contributesTo: {
          self: { 'Golden Heart': 1, 'Trickster Flame': 0.5, 'Firestarter': 0.25 },
          soulmate: { 'Witchlight Alchemist': 1, 'Iron Heart': 0.5 }
        },
      {
        text: "D. The fun, chaotic kind—where nothing’s ever boring.",
        contributesTo: {
          self: { 'Trickster Flame': 1, 'Golden Heart': 0.5, 'Blooming Storm': 0.25 },
          soulmate: { 'Iron Heart': 1, 'Witchlight Alchemist': 0.5 }
        }
      }
    ]
  },
  {
    text: "Your inner world feels most like...",
    options: [
      {
        text: "A. A foggy coastline full of secrets and hidden paths.",
        contributesTo: {
          self: { 'Witchlight Alchemist': 1, 'Stargazer’s Mirror': 0.5, 'Velvet Rebel': 0.25 },
          soulmate: { 'Golden Heart': 1, 'Power Pairing': 0.5 }
        }
      },
      {
        text: "B. A thunderstorm building in a still sky.",
        contributesTo: {
          self: { 'Blooming Storm': 1, 'Firestarter': 0.5, 'Iron Heart': 0.25 },
          soulmate: { 'Loyal Best Friend': 1, 'Gentle Anchor': 0.5 }
        }
      },
      {
        text: "C. A garden full of colour, movement, and surprise.",
        contributesTo: {
          self: { 'Golden Heart': 1, 'Trickster Flame': 0.5, 'Firestarter': 0.25 },
          soulmate: { 'Witchlight Alchemist': 1, 'Iron Heart': 0.5 }
        }
      },
      {
        text: "D. A palace made of glass, symmetry, and music.",
        contributesTo: {
          self: { 'Solar Siren': 1, 'Power Pairing': 0.5, 'Stargazer’s Mirror': 0.25 },
          soulmate: { 'Blooming Storm': 1, 'Velvet Rebel': 0.5 }
        }
      }
    ]
  },
 {
    text: "What kind of vulnerability scares you the most?",
    options: [
      {
        text: "A. Being fully seen when you’re not at your best.",
        contributesTo: {
          self: { 'Velvet Rebel': 1, 'Blooming Storm': 0.5, 'Iron Heart': 0.25 },
          soulmate: { 'Loyal Best Friend': 1, 'Gentle Anchor': 0.5 }
        }
      },
      {
        text: "B. Letting go of control and not knowing the outcome.",
        contributesTo: {
          self: { 'Solar Siren': 1, 'Power Pairing': 0.5, 'Witchlight Alchemist': 0.25 },
          soulmate: { 'Stargazer’s Mirror': 1, 'Golden Heart': 0.5 }
        }
      },
      {
        text: "C. Trusting someone with something fragile.",
        contributesTo: {
          self: { 'Gentle Anchor': 1, 'Loyal Best Friend': 0.5, 'Witchlight Alchemist': 0.25 },
          soulmate: { 'Firestarter': 1, 'Trickster Flame': 0.5 }
        }
      },
      {
        text: "D. Being emotionally dependent on someone else.",
        contributesTo: {
          self: { 'Iron Heart': 1, 'Stargazer’s Mirror': 0.5, 'Velvet Rebel': 0.25 },
          soulmate: { 'Golden Heart': 1, 'Blooming Storm': 0.5 }
        }
      }
    ]
  },
 {
    text: "You’re wandering through a strange forest and come across something unexpected. What do you do?",
    options: [
      {
        text: "A. Observe it from a distance until you understand what it is.",
        contributesTo: {
          self: { 'Iron Heart': 1, 'Stargazer’s Mirror': 0.5, 'Witchlight Alchemist': 0.25 },
          soulmate: { 'Golden Heart': 1, 'Trickster Flame': 0.5 }
        }
      },
      {
        text: "B. Touch it immediately—you want to see what happens.",
        contributesTo: {
          self: { 'Trickster Flame': 1, 'Firestarter': 0.5, 'Blooming Storm': 0.25 },
          soulmate: { 'Iron Heart': 1, 'Loyal Best Friend': 0.5 }
        }
      },
      {
        text: "C. Ask aloud if anyone else can see it too.",
        contributesTo: {
          self: { 'Loyal Best Friend ': 1, 'Gentle Anchor': 0.5, 'Golden Heart': 0.25 },
          soulmate: { 'Velvet Rebel': 1, 'Witchlight Alchemist': 0.5 }
        }
      },
      {
        text: "D. Leave an offering or make a wish.",
        contributesTo: {
          self: { 'Witchlight Alchemist': 1, 'Stargazer’s Mirror': 0.5, 'Velvet Rebel': 0.25 },
          soulmate: { 'Solar Siren': 1, 'Golden Heart': 0.5 }
        }
      }
    ]
  },
 {
    text: "You’re thrown into an unexpected group adventure. How do you contribute?",
    options: [
      {
        text: "A. Take charge and figure out what needs to get done.",
        contributesTo: {
          self: { 'Power Pairing': 1, 'Solar Siren': 0.5, 'Loyal Best Friend': 0.25 },
          soulmate: { 'Stargazer’s Mirror': 1, 'Blooming Storm': 0.5 }
        }
      },
      {
        text: "B. Keep people laughing and boost morale.",
        contributesTo: {
          self: { 'Trickster Flame': 1, 'Golden Heart': 0.5, 'Firestarter': 0.25 },
          soulmate: { 'Witchlight Alchemist': 1, 'Iron Heart': 0.5 }
        }
      },
      {
        text: "C. Mediate tension and make sure everyone’s okay.",
        contributesTo: {
          self: { 'Gentle Anchor': 1, 'Loyal Best Friend': 0.5, 'Stargazer’s Mirror': 0.25 },
          soulmate: { 'Firestarter': 1, 'Velvet Rebel': 0.5 }
        }
      },
      {
        text: "D. Handle logistics while keeping emotions calm.",
        contributesTo: {
          self: { 'Iron Heart': 1, 'Power Pairing': 0.5, 'Witchlight Alchemist': 0.25 },
          soulmate: { 'Trickster Flame': 1, 'Golden Heart': 0.5 }
        }
      }
    ]
  },
 {
    text: "What makes you feel powerful—in that quiet, unshakeable way?",
    options: [
      {
        text: "A. Being the person others rely on when things fall apart.",
        contributesTo: {
          self: { 'Loyal Best Friend': 1, 'Iron Heart': 0.5, 'Gentle Anchor': 0.25 },
          soulmate: { 'Velvet Rebel': 1, 'Blooming Storm': 0.5 }
        }
      },
      {
        text: "B. Trusting yourself fully, even when no one else does.",
        contributesTo: {
          self: { 'Velvet Rebel': 1, 'Stargazer’s Mirror': 0.5, 'Firestarter': 0.25 },
          soulmate: { 'Loyal Best Friend': 1, 'Power Pairing': 0.5 }
        }
      },
      {
        text: "C. Turning your pain into something beautiful.",
        contributesTo: {
          self: { 'Witchlight Alchemist': 1, 'Blooming Storm': 0.5, 'Velvet Rebel': 0.25 },
          soulmate: { 'Golden Heart': 1, 'Solar Siren': 0.5 }
        }
      },
      {
        text: "D. Knowing who you are and taking up space without apology.",
        contributesTo: {
          self: { 'Solar Siren': 1, 'Power Pairing': 0.5, 'Trickster Flame': 0.25 },
          soulmate: { 'Iron Heart': 1, 'Stargazer’s Mirror': 0.5 }
        }
      }
    ]
  },
 {
    text: "What kind of connection makes you feel like you’ve finally come home?",
    options: [
      {
        text: "A. Someone who gets the weird, unspoken parts of me.",
        contributesTo: {
          self: { 'Stargazer’s Mirror': 1, 'Velvet Rebel': 0.5, 'Witchlight Alchemist': 0.25 },
          soulmate: { 'Golden Heart': 1, 'Power Pairing': 0.5 }
        }
      },
      {
        text: "B. Someone who shows up, every single time.",
        contributesTo: {
          self: { 'Loyal Best Friend': 1, 'Gentle Anchor': 0.5, 'Iron Heart': 0.25 },
          soulmate: { 'Blooming Storm': 1, 'Firestarter': 0.5 }
        }
      },
      {
        text: "C. Someone who challenges me but makes me better.",
        contributesTo: {
          self: { 'Solar Siren': 1, 'Power Pairing': 0.5, 'Trickster Flame': 0.25 },
          soulmate: { 'Stargazer’s Mirror': 1, 'Witchlight Alchemist': 0.5 }
        }
      },
      {
        text: "D. Someone who sees the parts I usually keep hidden.",
        contributesTo: {
          self: { 'Blooming Storm': 1, 'Witchlight Alchemist': 0.5, 'Iron Heart': 0.25 },
          soulmate: { 'Loyal Best Friend': 1, 'Golden Heart': 0.5 }
        }
      }
    ]
  },
{
    text: "What’s your soul made of?",
    options: [
      {
        text: "A. Sea glass and saltwater secrets.",
        contributesTo: {
          self: { 'Stargazer’s Mirror': 1, 'Witchlight Alchemist': 0.5, 'Gentle Anchor': 0.25 },
          soulmate: { 'Solar Siren': 1, 'Trickster Flame': 0.5 }
        }
      },
      {
        text: "B. Thunder, wildfire, and the smell of something burning.",
        contributesTo: {
          self: { 'Firestarter': 1, 'Blooming Storm': 0.5, 'Velvet Rebel': 0.25 },
          soulmate: { 'Loyal Best Friend': 1, 'Iron Heart': 0.5 }
        }
      },
      {
        text: "C. Golden laughter and open doors.",
        contributesTo: {
          self: { 'Golden Heart': 1, 'Trickster Flame': 0.5, 'Loyal Best Friend': 0.25 },
          soulmate: { 'Witchlight Alchemist': 1, 'Stargazer’s Mirror': 0.5 }
        }
      },
      {
        text: "D. Steel bones and a velvet heart.",
        contributesTo: {
          self: { 'Iron Heart': 1, 'Velvet Rebel': 0.5, 'Power Pairing': 0.25 },
          soulmate: { 'Golden Heart': 1, 'Blooming Storm': 0.5 }
        }
      }
    ]
  },
]
      
const results = {
  "Gentle Anchor": "You are the Gentle Anchor: calm, steady, emotionally intuitive. You seek a soulmate who brings excitement without chaos—someone who makes you feel alive but still safe.",
  "Witchlight Alchemist": "You are the Witchlight Alchemist: curious, layered, mystical. Your soulmate brings structure and deep emotional safety to your wild imagination.",
  "Loyal Best Friend": "You are the Loyal Best Friend: dependable, kind, always there. Your soulmate is someone mysterious or daring who sees and cherishes your quiet depth.",
  "Golden Heart": "You are the Golden Heart: open, warm, deeply empathetic. Your soulmate is someone who adds edge, fire, or spiritual intrigue to your sunny spirit.",
  "Firestarter": "You are the Firestarter: passionate, intense, quick to act. You crave a soulmate who grounds you, honours your fire, and helps you build something lasting.",
  "Trickster Flame": "You are the Trickster Flame: witty, chaotic, emotionally bright. Your soulmate is a steady, quietly magical soul who loves your mess without taming you.",
  "Blooming Storm": "You are the Blooming Storm: fierce, soft, emotionally rich. You are drawn to someone who understands complexity and stays through transformation.",
  "Velvet Rebel": "You are the Velvet Rebel: bold, private, protective. Your soulmate is someone gentle, loyal, and quietly powerful who melts your edges with patience.",
  "Solar Siren": "You are the Solar Siren: magnetic, radiant, confident. Your soulmate sees behind the glamour and matches your brilliance with insight and grounding.",
  "Power Pairing": "You are the Power Pairing: strategic, driven, capable. Your soulmate is someone who inspires softness and poetic honesty without slowing your momentum.",
  "Iron Heart": "You are the Iron Heart: steady, loyal, protective. Your soulmate is someone with open feelings, wild dreams, and courage to pull you out of your armour.",
  "Stargazer’s Mirror": "You are the Stargazer’s Mirror: introspective, strange, poetic. You are drawn to lovers who ground your existentialism with warmth or dazzle you with fire."
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

  q.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.onclick = () => {
      for (const [type, value] of Object.entries(option.contributesTo.self)) {
        selfScores[type] = (selfScores[type] || 0) + value;
      }
      for (const [type, value] of Object.entries(option.contributesTo.soulmate)) {
        soulmateScores[type] = (soulmateScores[type] || 0) + value;
      }
      currentQuestion++;
      renderQuestion();
    };
    container.appendChild(button);
  });
}

function getTopType(scoreObj) {
  return Object.entries(scoreObj).reduce(
    (top, current) => current[1] > top[1] ? current : top,
    ["", -Infinity]
  )[0];
}

function showResults() {
  const container = document.getElementById("quiz");
  container.innerHTML = "";

  const selfType = getTopType(selfScores);
  const soulmateType = getTopType(soulmateScores);

  const titleSelf = document.createElement("h2");
  titleSelf.textContent = `✨ You Are: ${selfType}`;
  container.appendChild(titleSelf);

  const descSelf = document.createElement("p");
  descSelf.textContent = results[selfType];
  container.appendChild(descSelf);

  const titleSoulmate = document.createElement("h2");
  titleSoulmate.textContent = `💫 Your Soulmate: ${soulmateType}`;
  container.appendChild(titleSoulmate);

  const descSoulmate = document.createElement("p");
  descSoulmate.textContent = results[soulmateType];
  container.appendChild(descSoulmate);
}

renderQuestion();
