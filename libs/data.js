"use server"
import AdminUser from "@/models/user";
import { connectMongoDB } from "./mongodb";

export const fetchAdminUser = async (formData) => {
  try {
    connectMongoDB()

    const email = formData.get("email")
    const password = formData.get("password")

    const admin = await AdminUser.find({ email: email, password: password })

    return admin;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch admin!")
  }
}