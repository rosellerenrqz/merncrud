import React, { useState } from "react";
import User from "../types/User";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [userValue, setUserValue] = useState<User>({
    name: "",
    email: "",
    age: 0,
  });
  const navigate = useNavigate();

  const SubmitHandler = async (e: any) => {
    e.preventDefault();

    if (!userValue.name || !userValue.email || !userValue.age) {
      alert("input should not be empty!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: userValue.name,
          email: userValue.email,
          age: userValue.age,
        }),
      });

      if (!response.ok) {
        throw new Error("Error creating user");
      }

      navigate("/");

      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={SubmitHandler}
      className="w-[50rem] bg-gray-50 px-5 py-2 mx-auto">
      <h1 className="my-5 text-xl font-bold">Create User</h1>
      <p className="my-3">
        <label className="block font-medium">Name:</label>
        <input
          type="text"
          name=""
          id=""
          value={userValue.name}
          onChange={(e) => setUserValue({ ...userValue, name: e.target.value })}
          placeholder="Name"
          className="w-full p-2 rounded mt-2"
        />
      </p>
      <p className="my-3">
        <label className="block font-medium">Email:</label>
        <input
          type="text"
          name=""
          id=""
          value={userValue.email}
          onChange={(e) =>
            setUserValue({ ...userValue, email: e.target.value })
          }
          placeholder="Email"
          className="w-full p-2 rounded mt-2"
        />
      </p>
      <p className="my-3">
        <label className="block font-medium">Age:</label>
        <input
          type="text"
          name=""
          id=""
          value={userValue.age}
          onChange={(e) =>
            setUserValue({ ...userValue, age: parseInt(e.target.value) })
          }
          placeholder="Age"
          className="w-full p-2 rounded mt-2"
        />
      </p>
      <button className="bg-blue-400 text-white p-2 rounded my-5 w-full hover:bg-blue-300">
        Submit
      </button>
    </form>
  );
};

export default CreateUser;
