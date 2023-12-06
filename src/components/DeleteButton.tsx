import React from "react";
import { MdDelete } from "react-icons/md";

interface DeleteButtonProps {
  id: any;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const deleteHandler = async () => {
    const confirmed = confirm("Do you really want to delete this user?");

    if (confirmed) {
      const response = await fetch(`http://localhost:3000/user/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Unable to delete user");
      }
      return response.json();
    }
  };

  return (
    <button onClick={deleteHandler} className="text-red-400">
      <MdDelete size={25} />
    </button>
  );
};

export default DeleteButton;
