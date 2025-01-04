import { SiGoogletasks } from "react-icons/si";

const Navbar = () => {
	return (
		<nav className="flex items-center gap-2 p-4">
			<SiGoogletasks className="text-red-400" />{" "}
			<h1 className="text-red-700">Bangu Tasks</h1>
		</nav>
	);
};

export default Navbar;
