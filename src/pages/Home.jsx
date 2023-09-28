/* eslint-disable no-undef */
import UsersResult from "../components/users/UsersResult";

const Home = () => {
  return (
    <>
      {/* <div className="h-full my-32 text-center">
        <input
          type="text"
          placeholder="User's account name"
          className="w-1/3 py-4 px-6 bg-transparent border-[2.7px] border-[#333] outline-none rounded-md rounded-r-none"
        />
        <button className="bg-[#333] text-white p-[1.12rem] px-10 rounded-md rounded-l-none">
          Find
        </button>
      </div> */}

      <UsersResult />
    </>
  );
};

export default Home;
