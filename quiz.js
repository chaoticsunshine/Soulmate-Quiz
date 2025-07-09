document.addEventListener("DOMContentLoaded", () => {
  const startBtn    = document.getElementById("start-btn");
  const titleScreen = document.getElementById("title-screen");
  const quizEl      = document.getElementById("quiz");

  let currentQuestion = 0;
  const soulmateScores = {};

  const questions = [
  {
    text: "You find yourself in a strange dream. You’re walking through a surreal landscape. What catches your attention first?",
    options: [
      { text: "A glowing doorway hidden behind ivy, humming like it's alive.", contributesTo: { soulmate: { 'The Witchlight Mystic': 1, 'The Stargazer’s Mirror': 0.5 } } },
      { text: "A magical fire crackling on its own in the centre of a clearing.", contributesTo: { soulmate: { 'The Firestarter': 1, 'The Loyal Blade': 0.5 } } },
      { text: "A beautiful stranger watching you with kind eyes and no expression.", contributesTo: { soulmate: { 'The Gentle Anchor': 1, 'The Iron Heart': 0.5 } } },
      { text: "A staircase twisting into the sky, daring you to climb.", contributesTo: { soulmate: { 'The Solar Siren': 1, 'The Power Pairing': 0.5 } } }
    ]
  },
  {
    text: "You’re invited to a gathering where you don’t know anyone. What do you do first?",
    options: [
      { text: "Find the dog, the bookshelf, or a corner with snacks and stay there.", contributesTo: { soulmate: { 'The Golden Heart': 1, 'The Playful Spark': 0.5 } } },
      { text: "Start helping in the kitchen or tidying up, doing something that makes you feel useful.", contributesTo: { soulmate: { 'The Firestarter': 1, 'The Solar Siren': 0.5 } } },
      { text: "Make a dramatic entrance and try to charm the first person you meet.", contributesTo: { soulmate: { 'The Iron Heart': 1, 'The Gentle Anchor': 0.5 } } },
      { text: "Find the most interesting person in the room and strike up a conversation.", contributesTo: { soulmate: { 'The Stargazer’s Mirror': 1, 'The Witchlight Mystic': 0.5 } } }
    ]
  },
  {
    text: "When you first meet someone new, what instinct guides how you connect with them?",
    options: [
      { text: "I notice their body language and try to mirror their energy.", contributesTo: { soulmate: { 'The Power Pairing': 1, 'The Firestarter': 0.5 } } },
      { text: "I try to make them laugh or feel comfortable. It’s easier when everyone’s at ease.", contributesTo: { soulmate: { 'The Golden Heart': 1, 'The Playful Spark': 0.5 } } },
      { text: "I watch and listen for a while, and wait to see who they really are before revealing much.", contributesTo: { soulmate: { 'The Loyal Blade': 1, 'The Iron Heart': 0.5 } } },
      { text: "I dive right in. It’s more honest to be fully myself upfront.", contributesTo: { soulmate: { 'The Best Friend': 1, 'The Witchlight Mystic': 0.5 } } }
    ]
  },
  {
    text: "Which kind of love makes your heart ache in the best way?",
    options: [
      { text: "The slow, growing kind, like two roots tangling quietly underground.", contributesTo: { soulmate: { 'The Best Friend': 1, 'The Gentle Anchor': 0.5 } } },
      { text: "The fiery, instant kind where everything feels electric from the start.", contributesTo: { soulmate: { 'The Firestarter': 1, 'The Playful Spark': 0.5 } } },
      { text: "The strange, fated kind, like you’ve met before in a dream.", contributesTo: { soulmate: { 'The Stargazer’s Mirror': 1, 'The Witchlight Mystic': 0.5 } } },
      { text: "The fun, chaotic kind where nothing’s ever boring.", contributesTo: { soulmate: { 'The Playful Spark': 1, 'The Loyal Blade': 0.5 } } }
    ]
  },
  {
    text: "Your inner world feels most like...",
    options: [
      { text: "A foggy coastline full of secrets and hidden paths.", contributesTo: { soulmate: { 'The Witchlight Mystic': 1, 'The Stargazer’s Mirror': 0.5 } } },
      { text: "A thunderstorm building in a still sky.", contributesTo: { soulmate: { 'The Gentle Anchor': 1, 'The Best Friend': 0.5 } } },
      { text: "A garden full of colour, movement, and surprise.", contributesTo: { soulmate: { 'The Golden Heart': 1, 'The Power Pairing': 0.5 } } },
      { text: "A palace made of glass, symmetry, and music.", contributesTo: { soulmate: { 'The Solar Siren': 1, 'The Iron Heart': 0.5 } } }
    ]
  },
  {
    text: "What kind of vulnerability scares you the most?",
    options: [
      { text: "Being fully seen when you’re not at your best.", contributesTo: { soulmate: { 'The Loyal Blade': 1, 'The Gentle Anchor': 0.5 } } },
      { text: "Letting go of control and not knowing the outcome.", contributesTo: { soulmate: { 'The Power Pairing': 1, 'The Solar Siren': 0.5 } } },
      { text: "Trusting someone with something fragile.", contributesTo: { soulmate: { 'The Best Friend': 1, 'The Golden Heart': 0.5 } } },
      { text: "Being emotionally dependent on someone else.", contributesTo: { soulmate: { 'The Iron Heart': 1, 'The Brewing Tempest': 0.5 } } }
    ]
  },
  {
    text: "You’re wandering through a strange forest and come across something unexpected. What do you do?",
    options: [
      { text: "Observe it from a distance until you understand what it is.", contributesTo: { soulmate: { 'The Iron Heart': 1, 'The Witchlight Mystic': 0.5 } } },
      { text: "Touch it immediately. You want to see what happens!", contributesTo: { soulmate: { 'The Firestarter': 1, 'The Playful Spark': 0.5 } } },
      { text: "Ask the the others in your group if anyone else can see it too.", contributesTo: { soulmate: { 'The Golden Heart': 1, 'The Best Friend': 0.5 } } },
      { text: "Leave an offering or make a wish.", contributesTo: { soulmate: { 'The Stargazer’s Mirror': 1, 'The Witchlight Mystic': 0.5 } } }
    ]
  },
  {
    text: "You’re thrown into an unexpected group adventure. How do you contribute?",
    options: [
      { text: "Take charge and figure out what needs to get done.", contributesTo: { soulmate: { 'The Power Pairing': 1, 'The Solar Siren': 0.5 } } },
      { text: "Keep people laughing and boost morale.", contributesTo: { soulmate: { 'The Playful Spark': 1, 'The Golden Heart': 0.5 } } },
      { text: "Mediate tension and make sure everyone’s okay.", contributesTo: { soulmate: { 'The Gentle Anchor': 1, 'The Iron Heart': 0.5 } } },
      { text: "Handle logistics while keeping emotions calm.", contributesTo: { soulmate: { 'The Loyal Blade': 1, 'The Best Friend': 0.5 } } }
    ]
  },
  {
    text: "What brings out the strongest version of someone?",
    options: [
      { text: "Having someone to rely on when things fall apart.", contributesTo: { soulmate: { 'The Best Friend': 1, 'The Gentle Anchor': 0.5 } } },
      { text: "Trusting yourself fully, even when no one else does.", contributesTo: { soulmate: { 'The Loyal Blade': 1, 'The Brewing Tempest': 0.5 } } },
      { text: "Turning your pain into something beautiful.", contributesTo: { soulmate: { 'The Witchlight Mystic': 1, 'The Stargazer’s Mirror': 0.5 } } },
      { text: "Knowing who you are and taking up space without apology.", contributesTo: { soulmate: { 'The Solar Siren': 1, 'The Power Pairing': 0.5 } } }
    ]
  },
  {
    text: "What kind of connection makes you feel like you’ve finally come home?",
    options: [
      { text: "Someone who gets the weird, unspoken parts of me.", contributesTo: { soulmate: { 'The Stargazer’s Mirror': 1, 'The Firestarter': 0.5 } } },
      { text: "Someone who shows up, every single time.", contributesTo: { soulmate: { 'The Best Friend': 1, 'The Gentle Anchor': 0.5 } } },
      { text: "Someone who challenges me but makes me better.", contributesTo: { soulmate: { 'The Power Pairing': 1, 'The Loyal Blade': 0.5 } } },
      { text: "Someone who sees the parts I usually keep hidden.", contributesTo: { soulmate: { 'The Witchlight Mystic': 1, 'The Golden Heart': 0.5 } } }
    ]
  },
  {
    text: "Where does your soul feel most at home?",
    options: [
      { text: "A fog-draped shoreline where the sea whispers secrets to the rocks.", contributesTo: { soulmate: { 'The Stargazer’s Mirror': 1, 'The Gentle Anchor': 0.5 } } },
      { text: "A stormlit mountain where fire dances under thunderclouds.", contributesTo: { soulmate: { 'The Firestarter': 1, 'The Brewing Tempest': 0.5 } } },
      { text: "A sun-drenched cottage with open windows, music playing, and laughter drifting in the air.", contributesTo: { soulmate: { 'The Golden Heart': 1, 'The Best Friend': 0.5 } } },
      { text: "A quiet fortress in the woods, ivy-covered and unyielding, with warm candlelight in the windows.", contributesTo: { soulmate: { 'The Loyal Blade': 1, 'The Iron Heart': 0.5 } } }
    ]
  }
];

/*Result descriptions for each archetype*/
const results = {
  "The Gentle Anchor": "Your soulmate is your safe place in a noisy world. They’re grounded and deeply compassionate, with a steady kind of love that doesn’t waver when things get hard. They won’t try to fix you or change you. Instead, they’ll simply be there, showing up with quiet acts of care, emotional warmth, and a rock-solid presence that brings you peace. With them, you don’t have to earn rest or affection. You just exist, and they love you for it. LINE This is the person who remembers how you like your tea, holds your hand in silence when words are too much, and always has a blanket ready. They’re not flashy or overly romantic, but their loyalty runs deep and unwavering. Being with them feels like floating - safe, calm, and steady. They don’t just help you weather the storm, they are the calm after it.",
  "The Witchlight Mystic": "Your soulmate is woven from moonlight and soft magic. They are deeply intuitive and seem to feel you in a way few others can. Whether they’re into astrology, herbs, tarot, or simply possess an innate emotional intelligence, they guide you gently toward healing, clarity, and self-discovery. They're both your calm and your catalyst. LINE They believe in growth, transformation, and the quiet beauty of change, and they want to evolve with you. Their love is nurturing, but never enabling. They hold space for your shadows without judgement and illuminate your light without envy. Being with them feels like having a personal spell cast over your life - one of peace, growth, and subtle magic. You won't just feel loved. You'll feel seen..",
  "The Best Friend": "Your soulmate is the one you can build a life with - not because of drama or grand gestures, but because of trust. They know the weird way you cut your sandwiches. They remember your favourite childhood memory and what calms you when you spiral. They’re there when you’re sick, when you’re tired, when you feel too messy to be loved - and they love you anyway. LINE This is the kind of person who turns the mundane into magic. Grocery trips become adventures. Movie nights become rituals. They’re reliable in all the right ways, and their affection shows up in things like picking you up when your car breaks down, or staying up just to walk you home. With them, love is laughter, comfort, and a life built on shared memories.",
  "The Golden Heart": "This soulmate has the soul of a puppy and the heart of gold. They’re cheerful, affectionate, and unapologetically enthusiastic about the people they love. They’ll hype you up before big moments, text you memes when you’re sad, and give hugs like they were sent to Earth with that one purpose in mind. LINE Their love is loud, open, and joyful. They express affection easily and often - physically, verbally, and through action. With them, you’ll find laughter in the mundane and sweetness in chaos. Life gets brighter, lighter, and more spontaneous. They're the kind of person who brings snacks and sunscreen and still manages to surprise you with something romantic, like a love note in your lunchbox.",
  "The Firestarter": "Your soulmate lights a fire in your bones. They're magnetic, expressive, and full of creative energy that never seems to burn out. When they talk about their passions, their whole face changes. When they love, they love with intensity, and they want a partner who matches their spark. LINE With them, life is anything but dull. They’ll challenge you, inspire you, and sometimes frustrate you, but they will never bore you. You’re drawn to their confidence and their ambition, their ability to turn the everyday into something extraordinary. They’re a muse and a wildfire all at once, and being with them will ignite parts of you you didn’t even know needed lighting.",
  "The Loyal Blade": "This soulmate isn’t soft at first glance. They’re sharp-tongued, strong-willed, and not here to impress anyone. But beneath the edge is someone deeply loyal, with a tenderness reserved for those they trust. Their love is not given freely, but when it is, it’s yours forever. LINE They’ll challenge your limits, push you to be more honest with yourself, and protect you fiercely from anything that tries to dull your spark. They might show love by roasting you affectionately one moment and defending your honour the next. They’ll never sugar-coat the truth, but they’ll always have your back. Loving them is like holding a lit match: thrilling, warm, and never to be taken lightly.",
  "The Playful Spark": "Your soulmate is a delightful mess. They live in the moment, create chaos wherever they go, and somehow manage to always land on their feet - and drag you along for the ride. They might tease you relentlessly, pull off ridiculous pranks, or take you on a spontaneous road trip at 3am. But they mean it when they say they love you. LINE Despite the unpredictability, they’re emotionally real. They feel big and love hard, even if they wrap their feelings in sarcasm or mischief. Their loyalty is chaotic but unwavering. With them, life is vibrant, weird, and full of laughter, and you’ll never have to pretend to be someone you’re not.",
  "The Iron Heart": "This soulmate isn’t loud with their love, but it’s there in every unspoken gesture. In bringing you water without being asked. In always walking on the street side of the footpath. In remembering your fears, your joys, and your quiet routines. LINE They’re a protector - not in a possessive way, but in that “I will make sure you are safe even when I can’t find the words to say why I care” kind of way. They might not shower you in flowery speeches, but their commitment is deep, and their love is practical and fierce. With them, you're not just cherished, you’re protected, honoured, and respected.",
  "The Power Pairing": "You and this soulmate are a force to be reckoned with. You inspire each other to chase goals, upgrade your lives, and make bold decisions. There’s chemistry, sure, but there’s also vision. You build together, whether it’s a career, a creative empire, or a family. LINE They see you as an equal and want your success as much as theirs. You challenge each other, hype each other, and never settle for mediocre. This isn’t just romance. It’s mutual admiration, shared dreams, and the thrill of knowing you're both better because of each other.",
  "The Solar Siren": "This soulmate glows. They’re the kind of person who lights up the room without trying. They're confident, charming, and generous with their energy. They flirt like it’s second nature, but their affection is sincere. When they focus on you, it feels like being pulled into the sun. LINE They’re warm, dynamic, and surprisingly thoughtful. They notice small things and make people feel special. With them, love is passionate, fun, and filled with compliments, banter, and a sense of joyful magnetism. You’ll feel wanted, admired, and consistently reminded that you are worth showing off.",
  "The Stargazer’s Mirror": "Your soulmate is like a mirror that reflects your soul back at you - not always clearly, but deeply. They’re thoughtful, introspective, and sometimes lost in their own world. They find beauty in strange places, wonder in small moments, and often ask questions that spiral into hours of conversation. LINE They may struggle to stay grounded, but their depth is unmatched. They see you not as you appear, but as you feel. With them, love is dreamy, strange, and filled with quiet understanding. You’ll talk about ghosts and gods, life after death, and whether the stars remember us. And somehow, in the midst of all that vastness, you’ll feel more at home than ever.",
  "The Brewing Tempest": "Your soulmate is a living contradiction - and so are you, in a way. They're spontaneous yet sensitive, bold but tender, an ever-shifting weather pattern of love and emotion. They challenge you to embrace your complexity and show you that being “too much” is actually just right for the right person. LINE They’ll drag you into the rain, cry with you in the car, kiss you in public, and make dinner from scratch at midnight. They are intensity and softness held in one body. With them, love is not easy but it is real, raw, and transformative."
};

const keywords = {
      "The Gentle Anchor": "Grounded, nurturing, loyal, calm",
      "The Witchlight Mystic": "Spiritual, intuitive, healing, mysterious",
      "The Best Friend": "Comforting, dependable, supportive, playful",
      "The Golden Heart": "Warm, affectionate, joyful, kind",
      "The Firestarter": "Passionate, bold, expressive, fiery",
      "The Loyal Blade": "Fierce, honest, strong, protective",
      "The Playful Spark": "Chaotic, funny, bright, spontaneous",
      "The Iron Heart": "Stoic, tender, steady, protective",
      "The Power Pairing": "Driven, magnetic, ambitious, equal",
      "The Solar Siren": "Charming, glowing, confident, radiant",
      "The Stargazer’s Mirror": "Thoughtful, deep, dreamy, strange",
      "The Brewing Tempest": "Intense, emotional, raw, complex"
    };

  function clearAnimations() {
    quizEl.classList.remove("fade-in","fade-out","glow");
  }

  function renderQuestion() {
    clearAnimations();
    quizEl.innerHTML = "";  // wipe old

    if (currentQuestion >= questions.length) {
      return showResults();
    }

    const q = questions[currentQuestion];
    const container = document.createElement("div");
    container.classList.add("quiz-content","fade-in");

    // question
    const h2 = document.createElement("h2");
    h2.textContent = q.text;
    container.appendChild(h2);

    // answers
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt.text;
      btn.addEventListener("click", () => {
        // tally
        Object.entries(opt.contributesTo.soulmate).forEach(([type,val]) => {
          soulmateScores[type] = (soulmateScores[type]||0) + val;
        });
        currentQuestion++;
        renderQuestion();
      });
      container.appendChild(btn);
    });

    quizEl.appendChild(container);
  }

  function getTopType() {
    return Object.entries(soulmateScores)
      .sort((a,b)=>b[1]-a[1])[0]?.[0] || "";
  }

  function showResults() {
    quizEl.classList.remove("fade-in", "glow");
    quizEl.classList.add("fade-out-fast");
    setTimeout(() => {
      quizEl.classList.remove("fade-out-fast");
      quizEl.innerHTML = "";

      const content = document.createElement("div");
      content.classList.add("quiz-content");

      const archetype = getTopType();

      // title
      const titleH2 = document.createElement("h2");
      titleH2.textContent = `Your Soulmate Archetype: ${archetype}`;
      content.appendChild(titleH2);

      // keywords
      const kw = document.createElement("p");
      kw.textContent = keywords[archetype] || "";
      kw.classList.add("keywords");
      content.appendChild(kw);

      // description
      results[archetype].split("LINE").forEach(txt => {
        const p = document.createElement("p");
        p.textContent = txt.trim();
        content.appendChild(p);
      });

      quizEl.appendChild(content);
      quizEl.style.display = "block";
      quizEl.classList.add("glow","fade-in");
    }, 500);
  }

  // --- Start button handler ---
  startBtn.addEventListener("click", () => {
    titleScreen.classList.add("fade-out");
    setTimeout(() => {
      titleScreen.style.display   = "none";
      quizEl.style.display        = "block";
      quizEl.classList.add("fade-in");
      renderQuestion();
    }, 1000);
  });
});