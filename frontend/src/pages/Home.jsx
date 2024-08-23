import LandingView from "../components/LandingView";
import NavBar from "../components/NavBar";
import ResourceList from "../components/ResourceList";
import Login from "./Login";
import { useState } from "react";
import Referral from "../components/referral";


export default function Home({ isAuthenticated, userId }) {
  return (
    <>
      {!isAuthenticated && (
        <NavBar title="Student Resources" but1="About" but2="Login" />
      )}
      {isAuthenticated && (
        <NavBar title="Student Resources" but1="About" but2="My Profile" />
      )}
      <LandingView userId={userId} />
      <ResourceList />
      {/* {!isAuthenticated && (
        <div>
          <NavBar title="Login / Sign Up" but1="Home" but2="About" />
          <Login onAuthenticate={() => setIsAuthenticated(true)} />
        </div>
      )} */}
    </>
  );
}
