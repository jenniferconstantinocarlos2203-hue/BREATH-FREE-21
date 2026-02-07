import React, { useState, useEffect, useMemo } from 'react';
import { 
  Wind, Shield, Activity, Lock, Play, Book, 
  Menu, X, CheckCircle, AlertTriangle, 
  ChevronRight, Calendar, User, Settings,
  LogOut, Award, TrendingUp, Heart, Gamepad2,
  Zap, Brain, Target, RefreshCw, Bell, BellRing
} from 'lucide-react';
import { 
  PROTOCOL_DAYS, CITIES, AGES, 
  SMOKING_YEARS, CIGS_PER_DAY, 
  KNOWLEDGE_ARTICLES, TESTIMONIALS 
} from './constants';
import { AppScreen, UserProfile, DayPlan } from './types';

// --- Components ---

const Button = ({ children, onClick, variant = 'primary', className = '', full = false, disabled = false }: any) => {
  const base = "font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02]",
    secondary: "bg-navy-800 text-cyan-400 border border-navy-700 hover:border-cyan-500/50",
    danger: "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-900/40 hover:scale-[1.02] animate-pulse",
    outline: "border border-slate-600 text-slate-300 hover:border-white hover:text-white"
  };
  const width = full ? "w-full py-3.5 text-lg" : "px-6 py-2.5";
  
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${base} ${variants[variant as keyof typeof variants]} ${width} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '', onClick }: any) => (
  <div 
    onClick={onClick}
    className={`bg-navy-900/50 border border-white/5 backdrop-blur-sm rounded-xl p-5 ${className} ${onClick ? 'cursor-pointer hover:bg-navy-800/50 transition-colors' : ''}`}
  >
    {children}
  </div>
);

const Input = ({ label, type = "text", value, onChange, options = [] }: any) => (
  <div className="mb-4">
    <label className="block text-slate-400 text-sm font-medium mb-2">{label}</label>
    {options.length > 0 ? (
      <select 
        value={value} 
        onChange={e => onChange(e.target.value)}
        className="w-full bg-navy-950 border border-slate-700 rounded-lg p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
      >
        <option value="">Select...</option>
        {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    ) : (
      <input 
        type={type} 
        value={value} 
        onChange={e => onChange(e.target.value)}
        className="w-full bg-navy-950 border border-slate-700 rounded-lg p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
      />
    )}
  </div>
);

// --- Sub-components for Games ---

const MemoryGame = ({ onBack }: { onBack: () => void }) => {
  const [cards, setCards] = useState<any[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<any>(null);
  const [choiceTwo, setChoiceTwo] = useState<any>(null);
  const [disabled, setDisabled] = useState(false);

  const cardIcons = [
    { src: Wind, color: 'text-cyan-400' },
    { src: Shield, color: 'text-red-400' },
    { src: Activity, color: 'text-green-400' },
    { src: Zap, color: 'text-yellow-400' },
    { src: Brain, color: 'text-purple-400' },
    { src: Heart, color: 'text-pink-400' },
  ];

  const shuffleCards = () => {
    const shuffledCards = [...cardIcons, ...cardIcons]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), matched: false }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card: any) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="p-2 bg-navy-800 rounded-full text-slate-400">
           <X size={20} />
        </button>
        <div className="flex items-center gap-2">
           <h3 className="text-xl font-bold text-white">Neural Match</h3>
        </div>
        <button onClick={shuffleCards} className="p-2 bg-navy-800 rounded-full text-cyan-400">
           <RefreshCw size={20} />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3 mb-6">
        {cards.map(card => (
          <div 
            key={card.id} 
            className="aspect-square relative cursor-pointer"
            onClick={() => !disabled && !card.matched && card !== choiceOne && card !== choiceTwo && handleChoice(card)}
          >
             <div className={`w-full h-full rounded-lg flex items-center justify-center transition-all duration-300 transform ${card.matched || card === choiceOne || card === choiceTwo ? 'bg-navy-800 rotate-0 border border-cyan-500/50' : 'bg-navy-700 rotate-180 border border-slate-700'}`}>
                {(card.matched || card === choiceOne || card === choiceTwo) ? (
                   <card.src className={card.color} size={28} />
                ) : (
                   <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                )}
             </div>
          </div>
        ))}
      </div>
      
      <div className="bg-navy-900 p-4 rounded-xl text-center">
        <p className="text-slate-400 text-sm">Turns: <span className="text-white font-bold">{turns}</span></p>
        <p className="text-xs text-slate-500 mt-2">Focus on the pattern. Ignore the craving.</p>
      </div>
    </div>
  );
};

const ReflexGame = ({ onBack }: { onBack: () => void }) => {
  const [gameState, setGameState] = useState<'waiting' | 'ready' | 'now' | 'finished'>('waiting');
  const [startTime, setStartTime] = useState(0);
  const [reactionTime, setReactionTime] = useState(0);
  const [message, setMessage] = useState("Tap 'Start' to begin protocol.");

  const startTest = () => {
    setGameState('ready');
    setMessage("Wait for green...");
    setReactionTime(0);
    
    const randomDelay = Math.floor(Math.random() * 3000) + 2000;
    setTimeout(() => {
      setGameState(prev => {
        if (prev === 'ready') {
            setStartTime(Date.now());
            setMessage("TAP NOW!");
            return 'now';
        }
        return prev;
      });
    }, randomDelay);
  };

  const handleClick = () => {
    if (gameState === 'ready') {
      setGameState('waiting');
      setMessage("Too early! Protocol failed. Try again.");
    } else if (gameState === 'now') {
      const endTime = Date.now();
      setReactionTime(endTime - startTime);
      setGameState('finished');
      setMessage("Excellent reflexes.");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 bg-navy-800 rounded-full text-slate-400">
           <X size={20} />
        </button>
        <h3 className="text-xl font-bold text-white">Reflex Focus</h3>
      </div>

      <div 
        onClick={gameState === 'waiting' || gameState === 'finished' ? undefined : handleClick}
        className={`flex-1 rounded-2xl flex flex-col items-center justify-center p-6 text-center transition-all cursor-pointer select-none
          ${gameState === 'waiting' || gameState === 'finished' ? 'bg-navy-800' : ''}
          ${gameState === 'ready' ? 'bg-red-900 animate-pulse' : ''}
          ${gameState === 'now' ? 'bg-green-600' : ''}
        `}
      >
        {gameState === 'finished' && (
           <div className="mb-6">
             <span className="text-6xl font-bold text-white">{reactionTime}</span>
             <span className="text-xl text-slate-300 ml-2">ms</span>
           </div>
        )}

        <h2 className="text-2xl font-bold text-white mb-2">{message}</h2>
        
        {gameState === 'now' && <Target size={60} className="text-white animate-ping mt-4" />}
        
        {(gameState === 'waiting' || gameState === 'finished') && (
           <Button onClick={startTest} className="mt-8">
             {gameState === 'finished' ? 'Retry Protocol' : 'Start Protocol'}
           </Button>
        )}
      </div>
    </div>
  );
};


// --- Main App Component ---

export default function App() {
  const [screen, setScreen] = useState<AppScreen>(AppScreen.WELCOME);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [currentDay, setCurrentDay] = useState(1);
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  
  // Registration State
  const [regForm, setRegForm] = useState({
    name: '', email: '', password: '', confirm: '', 
    age: '', city: '', smokingYears: '', cigs: '', agreed: false
  });
  const [setupForm, setSetupForm] = useState({
    reason: '', trigger: '', reminder: '08:00'
  });

  // Games State
  const [activeGame, setActiveGame] = useState<'memory' | 'reflex' | null>(null);

  // Notification State
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  // Emergency Mode State
  const [emergencyTimer, setEmergencyTimer] = useState(60);
  const [emergencyActive, setEmergencyActive] = useState(false);

  // Derived State
  const progressPercent = Math.round((completedDays.length / 21) * 100);
  
  // Handlers
  const handleLogin = () => {
    // Mock login
    setUser({
      name: "User", email: "user@example.com", age: "30", city: "Johannesburg",
      smokingYears: "5-10", cigarettesPerDay: "10", quitReason: "Health",
      cravingTrigger: "Stress", reminderTime: "08:00", startDate: new Date().toISOString()
    });
    setScreen(AppScreen.DASHBOARD);
  };

  const handleRegister = () => {
    if (!regForm.agreed) return alert("Please agree to terms.");
    setScreen(AppScreen.VERIFY);
  };

  const handleVerify = () => {
    setScreen(AppScreen.SETUP);
  };

  const handleSetupComplete = () => {
    setUser({
      ...regForm,
      quitReason: setupForm.reason,
      cravingTrigger: setupForm.trigger,
      reminderTime: setupForm.reminder,
      cigarettesPerDay: regForm.cigs,
      startDate: new Date().toISOString()
    } as any);
    setScreen(AppScreen.DASHBOARD);
  };

  const startEmergency = () => {
    setScreen(AppScreen.EMERGENCY);
    setEmergencyActive(true);
    setEmergencyTimer(60);
  };

  const handleDownload = (title: string) => {
    const textContent = `
================================================================
${title}
================================================================

Thank you for downloading this premium resource from Breathe Free 21™.

[PREMIUM CONTENT PLACEHOLDER]

This file represents the downloaded ebook. In the full production version,
this would be a complete PDF document containing the guide.

Keep pushing forward.
    `;
    
    const element = document.createElement("a");
    const file = new Blob([textContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
  };

  const handleEnableNotifications = async () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notifications");
    } else if (Notification.permission === "granted") {
      setNotificationsEnabled(true);
      new Notification("Breathe Free 21™", { body: "Daily motivational notifications are active." });
    } else if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        setNotificationsEnabled(true);
        new Notification("Breathe Free 21™", { body: "Welcome to daily strength." });
      }
    }
  };

  useEffect(() => {
    let interval: any;
    if (emergencyActive && emergencyTimer > 0) {
      interval = setInterval(() => setEmergencyTimer(t => t - 1), 1000);
    } else if (emergencyTimer === 0) {
      setEmergencyActive(false);
    }
    return () => clearInterval(interval);
  }, [emergencyActive, emergencyTimer]);

  useEffect(() => {
    if ("Notification" in window && Notification.permission === "granted") {
      setNotificationsEnabled(true);
    }
  }, []);

  const toggleDayComplete = (day: number) => {
    if (completedDays.includes(day)) {
      setCompletedDays(prev => prev.filter(d => d !== day));
    } else {
      setCompletedDays(prev => [...prev, day]);
      // Auto-advance current day if we complete the current one
      if (day === currentDay && day < 21) {
        // Optional: you might want to force the user to stay on current day until tomorrow
        // But for this demo, we let them advance.
        setCurrentDay(day + 1);
      }
    }
  };

  // --- Screens ---

  const renderWelcome = () => (
    <div className="h-screen flex flex-col justify-center items-center px-6 text-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-800 via-navy-950 to-navy-950">
      <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
        <Wind size={40} className="text-cyan-400" />
      </div>
      <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Breathe Free 21™</h1>
      <p className="text-slate-400 mb-12 text-lg">Secure Protocol Access</p>
      
      <div className="w-full max-w-sm space-y-4">
        <Button full onClick={() => setScreen(AppScreen.REGISTER)}>Create New Account</Button>
        <Button variant="outline" full onClick={handleLogin}>Login</Button>
      </div>
      
      <div className="mt-12 flex items-center gap-2 text-xs text-slate-500">
        <Shield size={12} />
        <span>Medical-grade Encryption</span>
      </div>
    </div>
  );

  const renderRegister = () => (
    <div className="min-h-screen pt-12 pb-6 px-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>
      <div className="space-y-4">
        <Input label="Full Name" value={regForm.name} onChange={(v: string) => setRegForm({...regForm, name: v})} />
        <Input label="Email" type="email" value={regForm.email} onChange={(v: string) => setRegForm({...regForm, email: v})} />
        <Input label="Password" type="password" value={regForm.password} onChange={(v: string) => setRegForm({...regForm, password: v})} />
        <div className="grid grid-cols-2 gap-4">
          <Input label="Age" options={AGES} value={regForm.age} onChange={(v: string) => setRegForm({...regForm, age: v})} />
          <Input label="City" options={CITIES} value={regForm.city} onChange={(v: string) => setRegForm({...regForm, city: v})} />
        </div>
        <Input label="Smoking History" options={SMOKING_YEARS} value={regForm.smokingYears} onChange={(v: string) => setRegForm({...regForm, smokingYears: v})} />
        <Input label="Cigs Per Day" options={CIGS_PER_DAY} value={regForm.cigs} onChange={(v: string) => setRegForm({...regForm, cigs: v})} />
        
        <div className="flex items-center gap-3 py-4">
          <input 
            type="checkbox" 
            className="w-5 h-5 accent-cyan-500"
            checked={regForm.agreed} 
            onChange={e => setRegForm({...regForm, agreed: e.target.checked})} 
          />
          <span className="text-sm text-slate-400">I agree to Protocol Terms & Privacy Policy</span>
        </div>

        <Button full onClick={handleRegister}>Create Account & Start</Button>
        <button onClick={() => setScreen(AppScreen.WELCOME)} className="w-full text-center text-slate-500 py-4 text-sm">Back</button>
      </div>
    </div>
  );

  const renderVerify = () => (
    <div className="h-screen flex flex-col justify-center px-6 max-w-md mx-auto text-center">
      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <Lock size={32} className="text-green-400" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Check Your Email</h2>
      <p className="text-slate-400 mb-8">We sent a 6-digit secure code to your email.</p>
      
      <Input label="Verification Code" value="123456" onChange={() => {}} />
      <Button full onClick={handleVerify} className="mt-4">Verify & Continue</Button>
    </div>
  );

  const renderSetup = () => (
    <div className="min-h-screen pt-12 px-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-2">Personalize Protocol</h2>
      <p className="text-slate-400 mb-8">Dr. Carlo needs this data to tailor your recovery.</p>
      
      <div className="space-y-6">
        <div>
          <label className="text-white font-medium block mb-3">Why do you want to quit?</label>
          <div className="grid grid-cols-2 gap-3">
            {['Health', 'Family', 'Money', 'Fitness', 'Sex Life', 'Mental'].map(opt => (
              <button 
                key={opt}
                onClick={() => setSetupForm({...setupForm, reason: opt})}
                className={`p-3 rounded-lg border text-sm text-left transition-all ${setupForm.reason === opt ? 'bg-cyan-900/30 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-400'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white font-medium block mb-3">When do cravings hit hardest?</label>
          <div className="flex flex-wrap gap-2">
            {['Morning', 'After Meals', 'Work Stress', 'Night', 'Drinking'].map(opt => (
              <button 
                key={opt}
                onClick={() => setSetupForm({...setupForm, trigger: opt})}
                className={`px-4 py-2 rounded-full border text-sm transition-all ${setupForm.trigger === opt ? 'bg-cyan-900/30 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-400'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <Input label="Daily Protocol Reminder Time" type="time" value={setupForm.reminder} onChange={(v: string) => setSetupForm({...setupForm, reminder: v})} />
        
        <Button full onClick={handleSetupComplete} className="mt-8">Activate My 21-Day Protocol</Button>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-navy-900 p-6 pt-12 pb-8 rounded-b-3xl shadow-2xl shadow-navy-950">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-xl text-slate-300">Day {currentDay} of 21</h1>
            <p className="text-2xl font-bold text-white mt-1">{PROTOCOL_DAYS[currentDay - 1]?.title}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
              <span className="text-green-400 text-xs font-bold tracking-wide">ACTIVE</span>
            </div>
            {!notificationsEnabled && (
              <button onClick={handleEnableNotifications} className="flex items-center gap-1 text-[10px] text-cyan-400 bg-navy-800 px-2 py-1 rounded-lg border border-cyan-500/30 animate-pulse">
                <Bell size={10} />
                ENABLE ALERTS
              </button>
            )}
          </div>
        </div>
        
        {/* Expanded Progress Timeline */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-slate-400 mb-2">
            <span>Protocol Timeline</span>
            <span>{Math.round((completedDays.length / 21) * 100)}% Complete</span>
          </div>
          
          <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar snap-x">
             {PROTOCOL_DAYS.map((day) => {
               const isCompleted = completedDays.includes(day.day);
               const isCurrent = day.day === currentDay;
               const isLocked = day.day > currentDay;

               return (
                 <div 
                    key={day.day} 
                    className={`
                      flex-shrink-0 w-12 h-16 rounded-lg flex flex-col items-center justify-center border snap-center transition-all
                      ${isCompleted ? 'bg-green-600 border-green-500' : ''}
                      ${isCurrent ? 'bg-cyan-600 border-cyan-400 ring-2 ring-cyan-500/30 scale-105' : ''}
                      ${isLocked ? 'bg-navy-800 border-navy-700 opacity-50' : ''}
                    `}
                 >
                    <span className={`text-[10px] font-bold ${isCompleted || isCurrent ? 'text-white' : 'text-slate-500'}`}>DAY</span>
                    <span className={`text-xl font-bold ${isCompleted || isCurrent ? 'text-white' : 'text-slate-500'}`}>{day.day}</span>
                    {isCompleted && <CheckCircle size={10} className="text-white mt-1" />}
                 </div>
               );
             })}
          </div>
        </div>

        <Button variant="danger" full onClick={startEmergency} className="mb-0 shadow-lg shadow-red-900/20">
          <AlertTriangle size={18} />
          EMERGENCY CRAVING MODE
        </Button>
      </div>

      {/* Main Grid */}
      <div className="px-6 mt-8 space-y-4">
        <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4">Quick Access</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <Card onClick={() => setScreen(AppScreen.PROTOCOL_DETAIL)} className="flex flex-col items-center text-center gap-3 py-6">
            <Calendar size={28} className="text-cyan-400" />
            <span className="text-sm font-medium">Today's<br/>Protocol</span>
          </Card>
          
          <Card onClick={() => setScreen(AppScreen.PROGRESS)} className="flex flex-col items-center text-center gap-3 py-6">
            <TrendingUp size={28} className="text-emerald-400" />
            <span className="text-sm font-medium">Progress<br/>& Stats</span>
          </Card>

          <Card onClick={() => setScreen(AppScreen.KNOWLEDGE)} className="flex flex-col items-center text-center gap-3 py-6">
            <Book size={28} className="text-indigo-400" />
            <span className="text-sm font-medium">Knowledge<br/>Vault</span>
          </Card>

          <Card onClick={() => setScreen(AppScreen.GAMES)} className="flex flex-col items-center text-center gap-3 py-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Gamepad2 size={28} className="text-amber-400" />
            <span className="text-sm font-medium">Distraction<br/>Games</span>
          </Card>
        </div>

        {/* Dr Carlo Message Box with Helvetica Font */}
        <Card className="mt-4 bg-gradient-to-br from-navy-800 to-navy-900 border-none relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-14 h-14 bg-slate-700 rounded-full flex-shrink-0 overflow-hidden border-2 border-cyan-500/30">
              <img src="https://picsum.photos/100/100" alt="Dr Carlo" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs text-cyan-400 font-bold mb-2 uppercase tracking-widest">Daily Philosophy</p>
              <p 
                className="text-base text-slate-200 leading-relaxed italic" 
                style={{ fontFamily: '"Helvetica", "Arial", sans-serif' }}
              >
                "{PROTOCOL_DAYS[currentDay-1]?.drCarloMessage}"
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderProtocolDetail = () => {
    const day = PROTOCOL_DAYS[currentDay - 1];
    const isCompleted = completedDays.includes(day.day);

    return (
      <div className="pb-24">
         <div className="bg-navy-900 p-6 pt-12 rounded-b-3xl mb-6 sticky top-0 z-10 border-b border-slate-800">
           <div className="flex items-center gap-4 mb-4">
             <button onClick={() => setScreen(AppScreen.DASHBOARD)} className="p-2 bg-navy-800 rounded-full text-slate-400">
               <X size={20} />
             </button>
             <h2 className="text-xl font-bold text-white">Day {day.day}: {day.title}</h2>
           </div>
           <p className="text-cyan-400 font-medium">{day.goal}</p>
         </div>

         <div className="px-6 space-y-6">
            <section>
              <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Today's Checklist</h3>
              <div className="space-y-3">
                {day.checklist.map((item, i) => (
                  <label key={i} className="flex items-start gap-4 p-4 bg-navy-900/50 rounded-xl border border-white/5 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 accent-cyan-500" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </label>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Protocol Actions</h3>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-cyan-500">
                  <div className="flex items-center gap-3 mb-2 text-cyan-400">
                    <Wind size={20} />
                    <span className="font-bold">Breathing Routine</span>
                  </div>
                  <p className="text-sm">{day.breathingRoutine}</p>
                </Card>
                
                <Card className="border-l-4 border-l-red-500">
                  <div className="flex items-center gap-3 mb-2 text-red-400">
                    <Shield size={20} />
                    <span className="font-bold">Anti-Craving</span>
                  </div>
                  <p className="text-sm">{day.antiCravingTechnique}</p>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <div className="flex items-center gap-3 mb-2 text-green-400">
                    <Activity size={20} />
                    <span className="font-bold">Detox Drink</span>
                  </div>
                  <p className="text-sm">{day.detoxDrink}</p>
                </Card>
              </div>
            </section>
            
            <section className="bg-slate-800/50 p-5 rounded-xl">
               <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                 <Heart size={16} className="text-pink-500" /> Medical Fact
               </h4>
               <p className="text-sm text-slate-300 leading-relaxed">{day.medicalFact}</p>
            </section>

            <Button 
              full 
              variant={isCompleted ? "secondary" : "primary"}
              onClick={() => {
                toggleDayComplete(day.day);
                setScreen(AppScreen.DASHBOARD);
              }}
            >
              {isCompleted ? "Completed (Undo)" : "Complete Day"}
            </Button>
         </div>
      </div>
    );
  };

  const renderEmergency = () => (
    <div className="h-screen bg-red-950 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/50 via-red-950 to-navy-950 z-0"></div>
       
       <div className="relative z-10 w-full max-w-sm">
         <AlertTriangle size={60} className="text-red-500 mx-auto mb-6 animate-bounce" />
         <h1 className="text-3xl font-bold text-white mb-2">STOP. BREATHE.</h1>
         <p className="text-red-200 mb-8">Do not ruin your progress for 5 minutes of pleasure.</p>

         <div className="w-48 h-48 rounded-full border-4 border-red-500/30 flex items-center justify-center mx-auto mb-10 relative">
           <div className={`absolute inset-0 border-4 border-red-500 rounded-full transition-all duration-1000`} style={{clipPath: `inset(${100 - (emergencyTimer/60)*100}% 0 0 0)`}}></div>
           <span className="text-5xl font-mono font-bold text-white">{emergencyTimer}s</span>
         </div>

         <div className="space-y-3 text-left bg-red-900/30 p-6 rounded-xl backdrop-blur-md mb-8">
           <p className="text-white font-bold">1. Drink a full glass of cold water.</p>
           <p className="text-white font-bold">2. Take 5 deep breaths.</p>
           <p className="text-white font-bold">3. Remember why you started.</p>
         </div>

         <Button variant="secondary" full onClick={() => {
           setEmergencyActive(false);
           setScreen(AppScreen.DASHBOARD);
         }}>
           I Am In Control Now
         </Button>
       </div>
    </div>
  );

  const renderKnowledge = () => (
    <div className="pb-24 pt-12 px-6">
      <div className="flex items-center gap-4 mb-8">
         <button onClick={() => setScreen(AppScreen.DASHBOARD)} className="p-2 bg-navy-800 rounded-full text-slate-400">
           <X size={20} />
         </button>
         <h2 className="text-2xl font-bold text-white">Knowledge Vault</h2>
       </div>

       <div className="space-y-6">
         {KNOWLEDGE_ARTICLES.map(article => (
           <Card key={article.id} className="group">
             <div className="h-32 bg-navy-800 rounded-lg mb-4 overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                 {/* Placeholder for realistic illustration */}
                 <span className="text-xs uppercase tracking-widest">{article.imageAlt}</span>
               </div>
             </div>
             <h3 className="text-lg font-bold text-white mb-2">{article.title}</h3>
             <ul className="list-disc list-inside text-sm text-slate-400 mb-4 space-y-1">
               {article.points.map((p, i) => <li key={i}>{p}</li>)}
             </ul>
             <div className="bg-cyan-900/20 p-3 rounded border-l-2 border-cyan-500">
               <p className="text-xs text-cyan-300 italic">"{article.message}" - Dr. Carlo</p>
             </div>
           </Card>
         ))}
       </div>
    </div>
  );

  const renderProgress = () => {
    // Mock calculations
    const daysClean = completedDays.length;
    const packsSaved = Math.floor((daysClean * parseInt(user?.cigarettesPerDay || "0")) / 20);
    const moneySaved = packsSaved * 55; // Avg pack price ZAR

    return (
      <div className="pb-24 pt-12 px-6">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => setScreen(AppScreen.DASHBOARD)} className="p-2 bg-navy-800 rounded-full text-slate-400">
            <X size={20} />
          </button>
          <h2 className="text-2xl font-bold text-white">Recovery Stats</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="text-center py-6 bg-gradient-to-br from-green-900/50 to-navy-900">
             <p className="text-slate-400 text-xs uppercase mb-1">Money Saved</p>
             <p className="text-2xl font-bold text-green-400">R {moneySaved}</p>
          </Card>
          <Card className="text-center py-6 bg-gradient-to-br from-blue-900/50 to-navy-900">
             <p className="text-slate-400 text-xs uppercase mb-1">Cigs Avoided</p>
             <p className="text-2xl font-bold text-blue-400">~{daysClean * parseInt(user?.cigarettesPerDay || "10")}</p>
          </Card>
        </div>

        <h3 className="text-white font-bold mb-4">Badges</h3>
        <div className="flex gap-4 overflow-x-auto pb-4">
           {['24 Hours', '3 Days', '7 Days', '14 Days', '21 Days'].map((badge, i) => {
             const unlocked = daysClean >= [1,3,7,14,21][i];
             return (
               <div key={badge} className={`flex-shrink-0 w-24 h-24 rounded-full flex flex-col items-center justify-center border-2 ${unlocked ? 'border-yellow-500 bg-yellow-500/10' : 'border-slate-700 bg-slate-800 grayscale opacity-50'}`}>
                 <Award size={24} className={unlocked ? 'text-yellow-500' : 'text-slate-500'} />
                 <span className="text-xs text-white font-bold mt-1">{badge}</span>
               </div>
             )
           })}
        </div>

        <h3 className="text-white font-bold mb-4 mt-6">Health Timeline</h3>
        <div className="space-y-4">
          {[
            { label: 'Pulse Rate Normal', time: '20 min', val: 100 },
            { label: 'Oxygen Levels', time: '8 hours', val: daysClean > 0 ? 100 : 50 },
            { label: 'Nicotine Free', time: '48 hours', val: daysClean > 2 ? 100 : (daysClean/2)*100 },
            { label: 'Lung Function', time: '2 weeks', val: daysClean > 14 ? 100 : (daysClean/14)*50 },
          ].map((stat, i) => (
             <div key={i}>
               <div className="flex justify-between text-xs text-slate-400 mb-1">
                 <span>{stat.label}</span>
                 <span>{stat.time}</span>
               </div>
               <div className="h-2 bg-navy-800 rounded-full overflow-hidden">
                 <div className="h-full bg-cyan-500" style={{width: `${Math.min(100, stat.val)}%`}}></div>
               </div>
             </div>
          ))}
        </div>
      </div>
    );
  };

  const renderBonuses = () => (
    <div className="pb-24 pt-12 px-6">
       <div className="flex items-center gap-4 mb-8">
         <button onClick={() => setScreen(AppScreen.DASHBOARD)} className="p-2 bg-navy-800 rounded-full text-slate-400">
           <X size={20} />
         </button>
         <h2 className="text-2xl font-bold text-white">Bonus Content</h2>
       </div>

       <Card className="mb-4 border-yellow-500/30 bg-yellow-900/5">
         <div className="flex items-center gap-3 mb-3">
           <Award className="text-yellow-500" />
           <h3 className="font-bold text-white">Success Stories</h3>
         </div>
         <div className="space-y-4">
           {TESTIMONIALS.map((t, i) => (
             <div key={i} className="text-sm border-b border-white/5 pb-4 mb-4 last:border-0 last:mb-0">
               <div className="flex items-center gap-3 mb-2">
                  <img src={t.photoUrl} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-cyan-500/30" />
                  <div>
                    <span className="font-bold text-white block">{t.name}</span>
                    <span className="text-xs text-slate-400">{t.location}</span>
                  </div>
                  <div className="ml-auto flex text-yellow-500 text-xs">{'★'.repeat(t.rating)}</div>
               </div>
               <p className="text-slate-300 italic">"{t.text}"</p>
             </div>
           ))}
         </div>
       </Card>
       
       <h3 className="text-white font-bold mb-4">Premium Ebooks (Unlocked)</h3>
       <div className="space-y-4">
         <Card className="flex items-center gap-4">
           <div className="w-12 h-16 bg-slate-700 rounded flex items-center justify-center flex-shrink-0">
             <Book size={20} className="text-slate-400" />
           </div>
           <div>
             <h4 className="font-bold text-white text-sm">Breathe Free 21™: The Complete Quit Smoking Transformation</h4>
             <button 
               onClick={() => handleDownload("Breathe Free 21™: The Complete Quit Smoking Transformation")}
               className="text-cyan-400 text-xs font-bold mt-1 uppercase hover:text-cyan-300 transition-colors"
             >
               Download PDF
             </button>
           </div>
         </Card>
         <Card className="flex items-center gap-4">
           <div className="w-12 h-16 bg-slate-700 rounded flex items-center justify-center flex-shrink-0">
             <Book size={20} className="text-slate-400" />
           </div>
           <div>
             <h4 className="font-bold text-white text-sm">Quit Smoking in 21 Days: A Simple Guide</h4>
             <p className="text-xs text-slate-400 mb-1">by Doctor O'Donovan</p>
             <button 
               onClick={() => handleDownload("Quit Smoking in 21 Days: A Simple Guide")}
               className="text-cyan-400 text-xs font-bold uppercase hover:text-cyan-300 transition-colors"
             >
               Download PDF
             </button>
           </div>
         </Card>
       </div>
    </div>
  );

  const renderGames = () => {
    if (activeGame === 'memory') return <MemoryGame onBack={() => setActiveGame(null)} />;
    if (activeGame === 'reflex') return <ReflexGame onBack={() => setActiveGame(null)} />;

    return (
      <div className="pb-24 pt-12 px-6 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => setScreen(AppScreen.DASHBOARD)} className="p-2 bg-navy-800 rounded-full text-slate-400">
            <X size={20} />
          </button>
          <h2 className="text-2xl font-bold text-white">Distraction Games</h2>
        </div>
        
        <div className="grid gap-4">
          <Card onClick={() => setActiveGame('memory')} className="flex items-center justify-between group hover:bg-navy-800 transition-colors cursor-pointer border border-cyan-500/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                <Brain size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Neural Match</h4>
                <p className="text-xs text-slate-400">Memory & focus training</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-slate-600 group-hover:text-white" />
          </Card>

          <Card onClick={() => setActiveGame('reflex')} className="flex items-center justify-between group hover:bg-navy-800 transition-colors cursor-pointer border border-red-500/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-red-900/30 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all">
                <Target size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Reflex Focus</h4>
                <p className="text-xs text-slate-400">Reaction time drill</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-slate-600 group-hover:text-white" />
          </Card>
        </div>

        <div className="mt-auto bg-navy-900/50 p-4 rounded-xl border border-white/5">
           <p className="text-sm text-slate-400 text-center italic">"When a craving hits, distract the brain for 3 minutes. These tools are designed to break the loop." - Dr. Carlo</p>
        </div>
      </div>
    );
  };

  // --- Render Switcher ---

  const renderScreen = () => {
    switch(screen) {
      case AppScreen.WELCOME: return renderWelcome();
      case AppScreen.REGISTER: return renderRegister();
      case AppScreen.VERIFY: return renderVerify();
      case AppScreen.SETUP: return renderSetup();
      case AppScreen.DASHBOARD: return renderDashboard();
      case AppScreen.PROTOCOL_DETAIL: return renderProtocolDetail();
      case AppScreen.EMERGENCY: return renderEmergency();
      case AppScreen.KNOWLEDGE: return renderKnowledge();
      case AppScreen.PROGRESS: return renderProgress();
      case AppScreen.BONUS: return renderBonuses();
      case AppScreen.GAMES: return renderGames();
      case AppScreen.AUDIO: return renderGames(); // Fallback for settings nav for now, or just reuse Games UI
      default: return renderDashboard();
    }
  };

  // --- Bottom Nav (Only visible on authenticated screens) ---
  const showNav = [AppScreen.DASHBOARD, AppScreen.PROTOCOL_DETAIL, AppScreen.PROGRESS, AppScreen.KNOWLEDGE, AppScreen.GAMES, AppScreen.BONUS].includes(screen);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-50 font-sans selection:bg-cyan-500/30">
      {renderScreen()}
      
      {showNav && (
        <div className="fixed bottom-0 left-0 w-full bg-navy-900/90 backdrop-blur-md border-t border-white/5 py-4 px-6 flex justify-between items-center z-50">
           <button onClick={() => setScreen(AppScreen.DASHBOARD)} className={`flex flex-col items-center gap-1 ${screen === AppScreen.DASHBOARD ? 'text-cyan-400' : 'text-slate-500'}`}>
             <Calendar size={20} />
             <span className="text-[10px] font-bold">Today</span>
           </button>
           <button onClick={() => setScreen(AppScreen.PROGRESS)} className={`flex flex-col items-center gap-1 ${screen === AppScreen.PROGRESS ? 'text-cyan-400' : 'text-slate-500'}`}>
             <TrendingUp size={20} />
             <span className="text-[10px] font-bold">Progress</span>
           </button>
           <div className="relative -top-6">
             <button onClick={startEmergency} className="w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center shadow-lg shadow-red-900/50 border-4 border-navy-950 transform hover:scale-110 transition-transform">
               <AlertTriangle size={24} className="text-white" />
             </button>
           </div>
           <button onClick={() => setScreen(AppScreen.BONUS)} className={`flex flex-col items-center gap-1 ${screen === AppScreen.BONUS ? 'text-cyan-400' : 'text-slate-500'}`}>
             <Award size={20} />
             <span className="text-[10px] font-bold">Bonus</span>
           </button>
           <button onClick={() => setScreen(AppScreen.GAMES)} className={`flex flex-col items-center gap-1 ${screen === AppScreen.GAMES ? 'text-cyan-400' : 'text-slate-500'}`}>
             <Gamepad2 size={20} />
             <span className="text-[10px] font-bold">Games</span>
           </button>
        </div>
      )}
    </div>
  );
}