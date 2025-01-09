import { NavbarContainer } from "./NavbarContainer";
import { NavbarItem } from "./NavbarItem";

export const Navbar = () => {
	const currentPath = window.location.pathname;
	return (
		<header className="bg-lightNavbar dark:bg-black text-white fixed right-0 top-0 left-0 z-50 border-b border-rosado">
			<NavbarContainer>
				<NavbarItem texto="Sobre Mi" referencia="/" patchName={currentPath === '/' ? 'active' : ''} />
				<NavbarItem texto="Proyectos" referencia="/proyectos" patchName={currentPath === '/proyectos' ? 'active' : ''} />
			</NavbarContainer>
		</header>
	);
};
