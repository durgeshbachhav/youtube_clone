import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto p-4 text-white mt-32">
      <header className="text-center mb-4">
        <h1 className="text-4xl font-bold">Welcome to <span className="text-red-600">YouTube</span>.</h1>
        <p className="text-lg">Discover and enjoy videos on <span className="text-red-600">YouTube</span>.<span className="text-red-600">com</span></p>
      </header>

      <section className="flex justify-center items-center">
        <div className="bg-gray-800 p-6 rounded-md shadow-md ">
          🙋‍♂️ Welcome to Your Daily Dose of Entertainment!
        </div>
      </section>
    </div>
  );
};

export default Home;
