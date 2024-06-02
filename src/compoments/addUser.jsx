import { useState } from "react";

function AddUser({ addUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setValidationMessage("Please fill in both fields.");
      return;
    }
    addUser({ id: Date.now(), name, email });
    setName("");
    setEmail("");
    setValidationMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="md:flex grid justify-between gap-3">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-orange-300 pl-2 rounded-lg hover:bg-gray-200"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-orange-300 pl-2 rounded-lg hover:bg-gray-200"
        />
        <div
          type="submit"
          className="bg-orange-400 w-[180px] hover:text-black cursor-pointer hover:bg-gray-200 border flex justify-center items-center p-2 rounded-lg text-white"
        >
          <button>Add User</button>
        </div>
      </div>
      {validationMessage && (
          <div className="text-red-500 text-sm mt-2">
            {validationMessage}
          </div>
        )}
    </form>
  );
}

export default AddUser;
