"use client"

import { login } from "@/libs/actions"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useState } from "react"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000"

const Login = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("")

    if(!email) {
      setMessage("Enter Email!")
    } else if(!password) {
      setMessage("Enter Password!")
    }

    try {
      const res = await fetch(`${baseUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const body = await res.json();

        if (body.status) {
          login(body.data)
        } else {
          setMessage(body.message)
        }
      }

    } catch (error) {
      
    }
  }

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img className="rounded-full w-8 h-8 mr-2" src="/logo-icon.jpg" alt="logo" />
          Fxgrow
        </Link>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" placeholder="name@test .com" required="" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " required="" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" name="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 " required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 ">Remember me</label>
                  </div>
                </div>

              </div>
              <button type="submit" className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
            </form>

            {message?.length > 0 &&<p className="text-red-600">{message}</p>} 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login