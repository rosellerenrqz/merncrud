import React, { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

interface User {
  _id: number;
  name: string;
  email: string;
  age: number;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUser = async () => {
    const response = await fetch("http://localhost:3000/user");

    if (!response.ok) {
      throw new Error("Unable to fetch User");
    }

    const data = await response.json();
    setUsers(data.user);
    return data;
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex mt-20 justify-center items-center">
      <div className="w-3/4 bg-white rounded p-4">
        {users.length <= 0 ? (
          <p className="text-center text-lg">No User Available</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Age</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border">
                  <td className="py-2 px-4 border">{user.name}</td>
                  <td className="py-2 px-4 border">{user.email}</td>
                  <td className="py-2 px-4 border">{user.age}</td>
                  <td className="py-2 px-4 border flex gap-5 items-center justify-center">
                    <a href={`/update/${user._id}`}>
                      <UpdateButton />
                    </a>
                    <DeleteButton id={user._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Users;
