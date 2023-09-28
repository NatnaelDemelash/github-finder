import github from "../assets/github.png";
const Footer = () => {
  return (
    <footer className="h-[130px] w-full bg-[#d7dbddd4] py-6 absolute bottom-0 text-center flex flex-col gap-4 justify-center items-center shadow-sm">
      <img src={github} alt="github logo" width={70} />
      <p>Copyright &copy; 2023 All right reserved</p>
    </footer>
  );
};

export default Footer;
