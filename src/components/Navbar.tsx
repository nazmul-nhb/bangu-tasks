import { navlinks } from "@/constants/navlinks";
import { SiGoogletasks } from "react-icons/si";
import NavLinkItem from "./NavLinkItem";
import { ToggleTheme } from "./ToggleTheme";

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between gap-2 px-3 sm:px-8 py-2">
			<div className="flex items-center gap-2">
				<SiGoogletasks className="text-red-400" size={30} />
				<h1 className="text-red-700 text-2xl sm:text-3xl font-bold">Bangu Tasks</h1>
			</div>
			<div className="flex items-center gap-3 text-">
				<ToggleTheme />
				{navlinks.map(({ title, path }, index) => (
					<NavLinkItem key={index} to={path}>
						{title}
					</NavLinkItem>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
