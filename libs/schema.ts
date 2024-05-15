import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: String;
  userName?: String;
  isLoggedIn: boolean;
  remember?: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn:false
}

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY!, 
  cookieName: "session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production"
  }
}