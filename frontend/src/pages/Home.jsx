import LandingView from "../components/LandingView";
import NavBar from "../components/NavBar";
import ResourceList from "../components/ResourceList";
import Login from "./Login";
import { useState } from "react";

export default function Home({ isAuthenticated }) {
  return (
    <>
      {!isAuthenticated && (
        <NavBar title="Student Resources" but1="About" but2="Login" />
      )}
      {isAuthenticated && (
        <NavBar title="Student Resources" but1="About" but2="My Profile" />
      )}
      <LandingView />
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
