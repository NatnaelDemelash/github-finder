import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { searchUsers } = useContext(GithubContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Please fill the input");
    } else {
      searchUsers(text);
    }
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-full my-32 text-center">
        <input
          type="text"
          placeholder="User's account name"
          value={text}
          onChange={handleChange}
          className="w-1/3 py-4 px-6 bg-transparent border-[2.7px] border-[#333] outline-none rounded-md rounded-r-none"
        />
        <button
          type="submit"
          className="bg-[#333] text-white p-[1.12rem] px-10 rounded-md rounded-l-none"
        >
          Find
        </button>
      </div>
    </form>
  );
};

export default UserSearch;
