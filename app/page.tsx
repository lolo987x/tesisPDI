"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login");
}