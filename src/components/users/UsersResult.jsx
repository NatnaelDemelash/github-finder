import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import UserItem from "./UserItem";

const UsersResult = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();

    setUsers(data);
    setIsLoading(false);
  };

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UsersResult;
