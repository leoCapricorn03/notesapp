import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Welcome to Your Tasks and Notes App!!!
          </h2>
          <p className="text-gray-700 text-lg text-center mb-8">
            Keep track of your tasks and write down your notes easily.
          </p>
          <div className="flex justify-center">
            <Link href="/tasks" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mr-4">
              
                View Tasks
             
            </Link>
            <Link href="/notes" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full">
             
                View Notes
              
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
