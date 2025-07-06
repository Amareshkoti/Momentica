import { Routes, Route } from "react-router-dom";

import {
  Home,
  Explore,
  Saved,
  CreatePost,
  Profile,
  EditPost,
  PostDetails,
  UpdateProfile,
  AllUsers,
} from "@/_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignupForm from "@/_auth/forms/SignupForm";
import SigninForm from "@/_auth/forms/SigninForm";
import { Toaster } from "@/components/ui/toaster";
import { ConfigError, DebugInfo } from "@/components/shared";

import "./globals.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <ConfigError />
      <DebugInfo />
      <div className="flex-center flex-col w-full">
        <h1 className="h1-bold text-white mb-4">Welcome to Snapgram!</h1>
        <p className="text-light-3 mb-6">Your social media app is running successfully.</p>
        <div className="flex gap-4">
          <a href="/sign-up" className="shad-button_primary px-6 py-2 rounded-lg">
            Sign Up
          </a>
          <a href="/sign-in" className="shad-button_dark_4 px-6 py-2 rounded-lg">
            Sign In
          </a>
        </div>
      </div>
      <Toaster />
    </main>
  );
};
export default App;
