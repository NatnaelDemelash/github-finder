import github from "../assets/github.png";
const Footer = () => {
  return (
    <footer className="h-[90px] w-full bg-[#d7dbddd4] py-6 fixed bottom-0 text-center flex flex-col gap-4 justify-center items-center shadow-sm">
      <img src={github} alt="github logo" width={50} />
      <p className="text-sm">Copyright &copy; 2023 All right reserved</p>
    </footer>
  );
};

export default Footer;
