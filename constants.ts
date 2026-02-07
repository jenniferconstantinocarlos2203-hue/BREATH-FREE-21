import { DayPlan, Article, Testimonial } from './types';

export const CITIES = ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein'];
export const AGES = Array.from({ length: 35 }, (_, i) => (i + 21).toString());
export const SMOKING_YEARS = ['1-3 years', '3-5 years', '5-10 years', '10-20 years', '20+ years'];
export const CIGS_PER_DAY = ['1-5', '6-10', '11-20', '20+ (Pack a day)', '2 Packs+'];

export const KNOWLEDGE_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'What Nicotine Does to Your Brain',
    points: ['Hijacks dopamine receptors', 'Creates artificial stress loops', 'Reduces natural joy response'],
    message: "Your brain is rewiring itself right now. The fog you feel is actually healing.",
    imageAlt: 'Brain scan illustration'
  },
  {
    id: '2',
    title: 'How Withdrawal Works',
    points: ['Peaks at 72 hours', 'Physical symptoms end in 2 weeks', 'Mental cravings are just memories'],
    message: "Withdrawal is the feeling of the addiction dying. Let it die.",
    imageAlt: 'Graph of withdrawal symptoms'
  },
  {
    id: '3',
    title: 'Smoking & Erectile Performance',
    points: ['Smoking restricts penile blood flow', 'Increases risk of ED by 50%', 'Recovery begins within 24 hours'],
    message: "Your blood flow is improving every hour. Expect morning vitality to return.",
    imageAlt: 'Blood vessel diagram'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Thabo Molefe',
    location: 'Cape Town',
    text: "I tried patches, gum, everything. Dr. Carlo's protocol was different. It treated me like a man, not a patient. 3 months clean.",
    rating: 5,
    photoUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: 'Sipho Zwane',
    location: 'Johannesburg',
    text: "The emergency button saved me on Day 4. The breathing technique actually works instantly.",
    rating: 5,
    photoUrl: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: 'Johan Vorster',
    location: 'Pretoria',
    text: "I was a pack-a-day smoker for 20 years. Day 3 was hell, but the app got me through. I'm now running 5ks with my sons.",
    rating: 5,
    photoUrl: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: 'Lerato Khumalo',
    location: 'Durban',
    text: "Bought this for my husband. He hasn't smoked in 21 days. The family is so proud.",
    rating: 5,
    photoUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: 'Michael Robinson',
    location: 'Port Elizabeth',
    text: "The philosophical messages hit different. It's not just about health, it's about freedom. I finally feel in control.",
    rating: 5,
    photoUrl: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    name: 'Musa Baloyi',
    location: 'Sandton',
    text: "My doctor couldn't believe my lung function improvement after just 21 days. This protocol is the real deal.",
    rating: 5,
    photoUrl: "https://randomuser.me/api/portraits/men/78.jpg"
  },
  {
    name: 'Bongani Ndlovu',
    location: 'Soweto',
    text: "I used to smoke 2 packs a day. The 'Not Today' visualization technique rewired my brain. I don't even crave it anymore.",
    rating: 5,
    photoUrl: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    name: 'Willem Botha',
    location: 'Bloemfontein',
    text: "Straightforward and effective. No fluff. Just the tools you need to kill the habit. Highly recommended for any guy struggling.",
    rating: 4,
    photoUrl: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    name: 'Kaelo Motsepe',
    location: 'Polokwane',
    text: "Day 7 was my turning point. The 'One Week Champion' badge actually meant something to me. I'm free, brothers.",
    rating: 5,
    photoUrl: "https://randomuser.me/api/portraits/men/88.jpg"
  }
];

// Generating 21 days of content
export const PROTOCOL_DAYS: DayPlan[] = [
  {
    day: 1,
    title: "The Decision",
    goal: "Commit fully. Throw away all paraphernalia.",
    checklist: ["Trash all cigarettes", "Wash your favorite jacket", "Drink 2L of water", "Tell one person you quit"],
    breathingRoutine: "Box Breathing (4-4-4-4) - 3 mins",
    antiCravingTechnique: "The 'Not Today' Visualization",
    detoxDrink: "Warm water with lemon & cayenne pepper",
    avoid: "Coffee (triggers craving)",
    mindsetReset: "I am not 'quitting', I am 'healing'.",
    medicalFact: "Within 20 minutes, your heart rate and blood pressure drop.",
    drCarloMessage: "True freedom is the silence of the will in the face of temptation. You are not losing a friend; you are executing a tyrant that has ruled your breath for too long. Stand tall."
  },
  {
    day: 2,
    title: "The Chemical Detox",
    goal: "Flush nicotine from the bloodstream.",
    checklist: ["Eat 2 apples (lung function)", "Walk 15 mins briskly", "Cold shower (30 sec)", "Journal craving triggers"],
    breathingRoutine: "Deep Diaphragmatic Breathing - 3 mins",
    antiCravingTechnique: "Sip ice water slowly",
    detoxDrink: "Green Tea (Antioxidants)",
    avoid: "Sugary snacks",
    mindsetReset: "This discomfort is weakness leaving the body.",
    medicalFact: "Nicotine levels in your blood decrease by half every 2 hours.",
    drCarloMessage: "Pain is the breaking of the shell that encloses your understanding. The headache you feel is the physical manifestation of your body rejecting slavery."
  },
  {
    day: 3,
    title: "The Peak",
    goal: "Survive the hardest withdrawal day.",
    checklist: ["Distract hands (fidget toy/pen)", "Avoid smoking buddies", "Eat small meals often", "Go to bed early"],
    breathingRoutine: "4-7-8 Relaxing Breath - 5 mins",
    antiCravingTechnique: "Physical exercise burst (10 pushups)",
    detoxDrink: "Cranberry Juice (acidic pH helps excretion)",
    avoid: "Alcohol (Major trigger)",
    mindsetReset: "I can handle anything for 24 hours.",
    medicalFact: "Bronchial tubes begin to relax, breathing becomes easier.",
    drCarloMessage: "The mountain is steepest just before the summit. Today, the beast screams loudest because it knows it is dying. Do not feed a dying beast."
  },
  {
    day: 4,
    title: "The Mental Shift",
    goal: "Identify and disarm mental triggers.",
    checklist: ["Identify your 'Stress Trigger'", "Replace 'smoke break' with 'air break'", "Clean your car interior", "Chew raw carrot sticks"],
    breathingRoutine: "Alternate Nostril Breathing - 3 mins",
    antiCravingTechnique: "Change your environment instantly",
    detoxDrink: "Ginger Tea (Lung clearing)",
    avoid: "Spicy foods (can trigger urge)",
    mindsetReset: "I don't need smoke to handle stress.",
    medicalFact: "Carbon monoxide levels in your blood return to normal.",
    drCarloMessage: "The mind is a wonderful servant but a terrible master. It will whisper lies of 'just one' to you today. Recognize the lie, and you destroy its power."
  },
  {
    day: 5,
    title: "Circulation Return",
    goal: "Feel the physical benefits.",
    checklist: ["Check your pulse rate", "Notice warmer hands/feet", "30 mins cardio", "Eat leafy greens"],
    breathingRoutine: "Pursed Lip Breathing - 3 mins",
    antiCravingTechnique: "Mint gum assault",
    detoxDrink: "Beetroot Juice (Blood flow)",
    avoid: "Sitting for too long",
    mindsetReset: "My body is a machine, fueling it right.",
    medicalFact: "Circulation improves, walking becomes easier.",
    drCarloMessage: "Blood is the river of life. For years you dammed it with poison. Today, the river flows freely again to your hands, your feet, your brain. Feel the warmth of life returning."
  },
  {
    day: 6,
    title: "Taste & Smell",
    goal: "Rediscover your senses.",
    checklist: ["Eat your favorite meal slowly", "Smell fresh coffee beans", "Wash bed sheets", "Clean your teeth professionally"],
    breathingRoutine: "Rib Stretch Breathing - 3 mins",
    antiCravingTechnique: "Brush teeth immediately after eating",
    detoxDrink: "Fresh Orange Juice (Vitamin C)",
    avoid: "Being hungry (H.A.L.T. trigger)",
    mindsetReset: "I am tasting real life again.",
    medicalFact: "Nerve endings start regrowing. Smell and taste improve.",
    drCarloMessage: "To numb the senses is to refuse the gift of existence. As your taste returns, so does the vibrancy of the world. You were living in black and white; welcome back to color."
  },
  {
    day: 7,
    title: "One Week Champion",
    goal: "Celebrate the first major milestone.",
    checklist: ["Reward yourself (Movie/Game)", "Review money saved", "Post a '7 Days' status", "Plan the next week"],
    breathingRoutine: "Visualization Breathing - 5 mins",
    antiCravingTechnique: "Review your 'Why' list",
    detoxDrink: "Celebrate with a mocktail/soda",
    avoid: "Complacency",
    mindsetReset: "I am a non-smoker.",
    medicalFact: "Nicotine dependence is largely broken. Now it's a mental game.",
    drCarloMessage: "Seven suns have risen on a free man. You have broken the physical chain. Now begins the mastery of the mind. Do not look back; you are not going that way."
  },
  {
    day: 8,
    title: "Cough & Cleanse",
    goal: "Manage the lung clearing process.",
    checklist: ["Don't suppress the cough", "Steam inhalation", "Honey & lemon", "Stay hydrated"],
    breathingRoutine: "Huff Cough Technique - 2 mins",
    antiCravingTechnique: "Hot tea sipping",
    detoxDrink: "Mullein Tea (Lung herb)",
    avoid: "Dairy (mucus production)",
    mindsetReset: "My lungs are cleaning house.",
    medicalFact: "Cilia in lungs recover and push out mucus.",
    drCarloMessage: "The body heals in ugly ways. The cough is not sickness; it is the exorcism of tar. Let it leave you. Better out than rotting within the temple of your chest."
  },
  {
    day: 9,
    title: "Stress Test",
    goal: "Handle a stressful moment without smoke.",
    checklist: ["Practice the 'Stop' method", "Call a friend", "squeeze stress ball", "Do a puzzle"],
    breathingRoutine: "Resonant Breathing - 5 mins",
    antiCravingTechnique: "Delay for 10 minutes",
    detoxDrink: "Chamomile Tea (Calming)",
    avoid: "Arguments (if possible)",
    mindsetReset: "I am stronger than my stress.",
    medicalFact: "Lung function increases up to 10%.",
    drCarloMessage: "Stress is inevitable; suffering is optional. Using smoke to handle stress is like drinking salt water to quench thirst. Today, you face the storm with your own strength."
  },
  {
    day: 10,
    title: "Double Digits",
    goal: "Solidify the new habit.",
    checklist: ["Change your morning route", "Try a new hobby", "Read a health article", "Clean windows/mirrors"],
    breathingRoutine: "Ocean Breath (Ujjayi) - 3 mins",
    antiCravingTechnique: "Deep stretch",
    detoxDrink: "Cucumber water",
    avoid: "Boredom",
    mindsetReset: "I am building a legacy of health.",
    medicalFact: "Blood circulation to gums and teeth similar to non-smoker.",
    drCarloMessage: "Habit is a cable; we weave a thread of it each day, and at last we cannot break it. You are weaving a new cable now—one of steel and vitality, not smoke and ash."
  },
  {
    day: 11,
    title: "Energy Surge",
    goal: "Channel excess energy.",
    checklist: ["High intensity workout", "Run up stairs", "Tackle a postponed task", "Fix something at home"],
    breathingRoutine: "Bellows Breath (Stimulating) - 2 mins",
    antiCravingTechnique: "Jumping jacks",
    detoxDrink: "Protein shake / Smoothie",
    avoid: "Late night screens",
    mindsetReset: "I have unlimited power.",
    medicalFact: "Walking becomes easier, less shortness of breath.",
    drCarloMessage: "That restlessness you feel? That is raw power. For years, you sedated your potential. Now the beast is awake. Do not fear the energy; harness it. Build something."
  },
  {
    day: 12,
    title: "Skin & Face",
    goal: "Notice the external changes.",
    checklist: ["Look in the mirror closely", "Moisturize face", "Take a selfie", "Shave/Groom"],
    breathingRoutine: "Facial relaxation breathing - 3 mins",
    antiCravingTechnique: "Wash face with cold water",
    detoxDrink: "Aloe Vera Juice",
    avoid: "Sunburn",
    mindsetReset: "I look younger and healthier.",
    medicalFact: "Skin loses greyish pallor and becomes less wrinkled.",
    drCarloMessage: "The face is the mirror of the soul, and yours is clearing. The grey mask of the smoker is dissolving, revealing the man beneath. Look at yourself. Respect the man looking back."
  },
  {
    day: 13,
    title: "The Dream Phase",
    goal: "Navigate vivid dreams.",
    checklist: ["No caffeine after 2pm", "Reading before bed", "Lavender scent", "Journal dreams"],
    breathingRoutine: "Yoga Nidra basics - 5 mins",
    antiCravingTechnique: "Listen to calm audio",
    detoxDrink: "Warm Milk/Almond Milk",
    avoid: "Heavy dinner",
    mindsetReset: "My brain is healing while I sleep.",
    medicalFact: "Sleep patterns start returning to normal.",
    drCarloMessage: "In dreams, the subconscious battles the ghosts of the past. If you dream of smoking, do not despair. It is merely the echo of a habit leaving the canyon of your mind."
  },
  {
    day: 14,
    title: "Two Weeks of Freedom",
    goal: "Celebrate the fortnight.",
    checklist: ["Buy a small gift with savings", "Review progress stats", "Plan a smoke-free weekend", "Cook a complex meal"],
    breathingRoutine: "Victory Breath (Arms up) - 2 mins",
    antiCravingTechnique: "Look at your badges",
    detoxDrink: "Sparkling water with lime",
    avoid: "Smoker's section",
    mindsetReset: "I have broken the back of the addiction.",
    medicalFact: "Risk of heart attack has begun to drop.",
    drCarloMessage: "Two weeks. A fortnight of fortitude. The chains are lying on the ground, broken. You can step over them now. You are no longer a prisoner of the leaf."
  },
  {
    day: 15,
    title: "Fitness Focus",
    goal: "Push your lung capacity.",
    checklist: ["Timed 1km run/walk", "Monitor recovery time", "Core workout", "Stretch chest muscles"],
    breathingRoutine: "Breath holding training - 3 mins",
    antiCravingTechnique: "Pushups until failure",
    detoxDrink: "Electrolyte mix",
    avoid: "Elevators (take stairs)",
    mindsetReset: "My lungs are powerful.",
    medicalFact: "Lung function increases up to 30%.",
    drCarloMessage: "Your lungs were designed to expand, to take in the world, not to be chimneys for soot. Feel the air rush into the deepest corners of your chest. That is the feeling of life claiming its territory."
  },
  {
    day: 16,
    title: "Mental Clarity",
    goal: "Use your sharper focus.",
    checklist: ["Solve a crossword/Sudoku", "Write a letter", "Plan career goals", "Organize workspace"],
    breathingRoutine: "Focus Breathing (Count to 10) - 3 mins",
    antiCravingTechnique: "Detailed task focus",
    detoxDrink: "Matcha Tea",
    avoid: "Multitasking",
    mindsetReset: "My mind is sharp as a razor.",
    medicalFact: "Cognitive function improves as oxygen levels optimize.",
    drCarloMessage: "The fog has lifted. The intellect is sharpened. You are thinking with a clarity you haven't possessed in years. Use this weapon. A clear mind is the most dangerous thing a man can possess."
  },
  {
    day: 17,
    title: "Trigger Management",
    goal: "Face a known trigger safely.",
    checklist: ["Go out with friends (sober)", "Drive the old route", "Sit outside without smoking", "Observe smokers objectively"],
    breathingRoutine: "Grounding Breath - 3 mins",
    antiCravingTechnique: "Hold a pebble in hand",
    detoxDrink: "Iced Tea",
    avoid: "Feeling deprived",
    mindsetReset: "I don't envy smokers, I pity them.",
    medicalFact: "Withdrawal symptoms have largely ceased.",
    drCarloMessage: "Look at the smoker huddling in the rain, desperate for a fix. Do not envy him. Pity the slave. You are the free man walking past the prison cell. Walk tall."
  },
  {
    day: 18,
    title: "Social Confidence",
    goal: "Socialize without the crutch.",
    checklist: ["Conversation without smoke break", "Help someone else", "Stand tall posture", "Smile more"],
    breathingRoutine: "Confidence Breath (Chest out) - 2 mins",
    antiCravingTechnique: "Focus on the other person",
    detoxDrink: "Mineral water",
    avoid: "Hiding in corners",
    mindsetReset: "I am enough without the cigarette.",
    medicalFact: "Oxygen levels to the brain are fully normal.",
    drCarloMessage: "You do not need a prop to be a man. You do not need a shield of smoke to be present. Your presence is enough. Your voice is enough. Stand in your own power."
  },
  {
    day: 19,
    title: "Financial Reality",
    goal: " visualize the wealth.",
    checklist: ["Calculate annual savings", "Start a 'Quit Fund'", "Look at investment apps", "Visualize a new car/trip"],
    breathingRoutine: "Abundance Breathing - 3 mins",
    antiCravingTechnique: "Check bank balance",
    detoxDrink: "Golden Milk (Turmeric)",
    avoid: "Spending on junk",
    mindsetReset: "I am investing in my future.",
    medicalFact: "Cilia are fully regrown in lungs.",
    drCarloMessage: "Wealth is not just coin; it is the accumulation of value. You were burning value daily. Now you accumulate it—in your pocket, in your lungs, in your future. You are building an empire of self."
  },
  {
    day: 20,
    title: "The Final Stretch",
    goal: "Prepare for graduation.",
    checklist: ["Reflect on Day 1", "Write a note to yourself", "Clean house top to bottom", "Prepare celebration"],
    breathingRoutine: "Reflection Breathing - 5 mins",
    antiCravingTechnique: "Review the journey",
    detoxDrink: "Fresh Berry Juice",
    avoid: "Looking back",
    mindsetReset: "I am ready for the rest of my life.",
    medicalFact: "Overall energy levels increase.",
    drCarloMessage: "One day remains. You have walked through the fire and not been consumed. You have forged a new self in the kiln of discipline. Be proud, but stay vigilant."
  },
  {
    day: 21,
    title: "Protocol Complete",
    goal: "Embrace your new identity.",
    checklist: ["Celebrate big!", "Accept 'Free Man' badge", "Help a friend quit", "Set a new 21-day goal"],
    breathingRoutine: "Freedom Breath (Open air) - 5 mins",
    antiCravingTechnique: "Smile",
    detoxDrink: "Champagne (or sparkling grape)",
    avoid: "Thinking it's over (It's a lifestyle)",
    mindsetReset: "I AM FREE.",
    medicalFact: "Risk of coronary heart disease is half that of a smoker.",
    drCarloMessage: "Freedom is not a destination; it is a responsibility. You have reclaimed your breath, your time, your life. The cage is open. Fly, man. Fly and never look back."
  }
];