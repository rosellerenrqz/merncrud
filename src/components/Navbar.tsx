import React from "react";

const Navbar = () => {
  return (
    <header className="p-2 w-[50rem] bg-gray-50 rounded items-center mx-auto my-5 flex justify-between">
      <a href="/">
        <h1 className="font-bold text-xl">Logo</h1>
      </a>
      <nav>
        <a href="/create">
          <button className="bg-blue-400 text-white p-2 rounded hover:bg-blue-300">
            Create User
          </button>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
