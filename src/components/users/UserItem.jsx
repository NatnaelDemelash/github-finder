/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div>
      <div className="card m-4">
        <div className="flex items-center gap-2 ">
          <div className="rounded">
            <img
              src={avatar_url}
              width={70}
              alt="Profile"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold">{login}</h3>
            <Link to={`/user/${login}`} className="text-sm text-[#EB984E]">
              Visit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
