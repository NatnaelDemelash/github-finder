/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import githubReducer from "./githubReducer";
// import.meta.env.VITE_GITHUB_URL;
// import.meta.env.VITE_GITHUB_TOKEN;

// const GITHUB_TOKEN = process.env.VITE_GITHUB_TOKEN;
// const GITHUB_URL = process.env.VITE_GITHUB_URL;

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(
      `https://api.github.com/search/users?${params}`
    );

    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // Get Single User
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`https://api.github.com/users/${login}`);

    const data = await response.json();

    if (response.status === 404) {
      window.location = "/not-Found";
    } else {
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  // Clear users from the UI

  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        isLoading: state.isLoading,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
