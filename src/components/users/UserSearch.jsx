import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please make sure you fill the input", "error");
    } else {
      searchUsers(text);
    }
    setText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="h-full text-center">
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
          </button>{" "}
          <br />
          {users.length > 0 && (
            <button
              type="button"
              className="mt-2 bg-[#884EA0] text-white py-3 px-10 rounded-full "
              onClick={clearUsers}
            >
              Clear
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default UserSearch;
