export interface UserProfile {
  name: string;
  email: string;
  age: string;
  city: string;
  smokingYears: string;
  cigarettesPerDay: string;
  quitReason: string;
  cravingTrigger: string;
  reminderTime: string;
  startDate: string;
}

export interface DayPlan {
  day: number;
  title: string;
  goal: string;
  checklist: string[];
  breathingRoutine: string;
  antiCravingTechnique: string;
  detoxDrink: string;
  avoid: string;
  mindsetReset: string;
  medicalFact: string;
  drCarloMessage: string;
}

export enum AppScreen {
  WELCOME = 'WELCOME',
  REGISTER = 'REGISTER',
  VERIFY = 'VERIFY',
  SETUP = 'SETUP',
  DASHBOARD = 'DASHBOARD',
  PROTOCOL_DETAIL = 'PROTOCOL_DETAIL',
  EMERGENCY = 'EMERGENCY',
  PROGRESS = 'PROGRESS',
  KNOWLEDGE = 'KNOWLEDGE',
  AUDIO = 'AUDIO',
  GAMES = 'GAMES',
  BONUS = 'BONUS',
  SETTINGS = 'SETTINGS'
}

export interface Article {
  id: string;
  title: string;
  points: string[];
  message: string;
  imageAlt: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  photoUrl: string;
}