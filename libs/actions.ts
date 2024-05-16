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
  formData: FormData
) => {
  const session = await getSession();

  const formEmail = formData.get("email") as string
  const formPassword = formData.get("password") as string
  const formRemember = formData.get("remember")

  if (formRemember) {
    session.remember = true
  } else {
    session.remember = false
  }

  session.isLoggedIn = true;
  session.userId = "1";
  session.userName = "Test";

  console.log(session);


  await session.save()

  redirect("/dashboard")
}


export const logout = async () => {
  const session = await getSession()

  session.destroy()
  redirect("/")
}