import spinner from "../assets/loading.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        className="text-center mx-auto"
        src={spinner}
        alt="Loading..."
        width={130}
      />
    </div>
  );
};

export default Spinner;
