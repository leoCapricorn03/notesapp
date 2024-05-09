import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { NotebookText } from "lucide-react";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-100 font-sans">
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
              <div className="flex items-center">
                <NotebookText className="rounded-full w-10 h-10 mr-2" />
                <h1 className="text-xl font-semibold">NotesApp</h1>
              </div>
              <div className="flex items-center">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </header>
          <main className="">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
