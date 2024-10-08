import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-300 border-t-2 border-black py-4 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-between max-w-7xl text-blue-900">
        <div className="text-center">
          <p className="font-bold">© 2024 CUNY Student Resources</p>
          <p className="text-sm">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
