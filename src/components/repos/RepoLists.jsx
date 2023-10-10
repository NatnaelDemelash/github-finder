import PropTypes from "prop-types";

const RepoLists = ({ repos }) => {
  return (
    <div className="card shadow-lg rounded-lg bg-base-100 ">
      <div className="card-body">
        <h3 className="text-3xl my-4 card-title font-bold">
          Top Repositories{" "}
        </h3>
        {repos?.map((repo) => (
          <h2 key={repo}>{repo.name}</h2>
        ))}
      </div>
    </div>
  );
};

RepoLists.propTypes = {
  repos: PropTypes.array,
};

export default RepoLists;
