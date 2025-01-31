import React, { useState, useContext } from "react";
import { createCase } from "../utils/api";
import AuthContext from "../context/AuthContext";

const CreateCase = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCase({ title, description, budget }, localStorage.getItem("token"));
      alert("Case posted successfully!");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Create Case</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Case Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="number" placeholder="Budget" value={budget} onChange={(e) => setBudget(e.target.value)} required />
        <button type="submit">Post Case</button>
      </form>
    </div>
  );
};

export default CreateCase;
