import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import User from "../types/User";

const UpdateUser = () => {
  const [user, setUser] = useState({ name: "", email: "", age: 0 });
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const getUserById = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      if (!response.ok) {
        throw new Error("unable to fetch user by id");
      }

      const data: User = await response.json();
      setUser(data.user as any);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserById();
  }, [id]);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/user/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          age: user.age,
        }),
      });

      if (!response.ok) {
        throw new Error("Error updating user");
      }
      navigate("/");
      return response.json();
    } catch (error) {}
  };

  return (
    <form
      id={id}
      onSubmit={submitHandler}
      className="w-[50rem] bg-gray-50 px-5 py-2 mx-auto">
      <h1 className="my-5 text-xl font-bold">Update User</h1>
      <p className="my-3">
        <label className="block font-medium">Name:</label>
        <input
          type="text"
          name=""
          id=""
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
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
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
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
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value as any })}
          placeholder="Age"
          className="w-full p-2 rounded mt-2"
        />
      </p>
      <button className="bg-blue-400 text-white p-2 rounded my-5 w-full hover:bg-blue-300">
        Update
      </button>
    </form>
  );
};

export default UpdateUser;
