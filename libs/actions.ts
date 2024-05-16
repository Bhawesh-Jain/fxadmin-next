"use server"
import { sessionOptions, SessionData, defaultSession } from "@/libs/schema"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
}
export const login = async (
  body: JSON
) => {
  const session = await getSession();

  const formEmail = body["email"] as string
  const id = body["_id"] as string

  session.remember = true

  session.isLoggedIn = true;
  session.userId = id;
  session.userName = formEmail;
  
  await session.save()

  redirect("/dashboard")
}


export const logout = async () => {
  const session = await getSession()

  session.destroy()
  redirect("/")
}