import { Logo } from "./Logo";
import { useEffect, useState } from "react";

export const NavbarContainer = ({ children }) => {
	const [theme, setTheme] = useState('dark');
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	}

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setTheme(savedTheme);
		} else {
			const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const defaultTheme = systemPreference ? 'dark' : 'light';
			setTheme(defaultTheme);
			localStorage.setItem('theme', defaultTheme);
		}
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	return (
		<nav className="relative w-full bg-lightNavbar dark:bg-black">
			<div className="max-w-[900px] mx-auto px-4 py-5">
				<div className="flex items-center justify-between">
					<Logo />

					{/* Pantalla Grande */}
					<div className="hidden md:flex items-center justify-between flex-1 ml-10">
						<div className="flex justify-center flex-1 gap-5">
							{children}
						</div>
						<div className="flex items-center gap-5">
							<a href="/presentacion" className="hover:text-rosado duration-500">
								{/* <svg
									aria-label="Video de presentacion"
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
									/>
								</svg> */}
								<svg
									aria-label="Video de presentacion"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"
								></path><path d="m7 21 5-5 5 5"></path></svg
								>
							</a>
							<button
								aria-label="Cambiar tema"
								onClick={handleTheme}
								className="hover:text-rosado duration-500"
							>
								{theme === 'dark' ? (
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
										<circle cx="12" cy="12" r="4" />
										<path d="M12 2v2" />
										<path d="M12 20v2" />
										<path d="m4.93 4.93 1.41 1.41" />
										<path d="m17.66 17.66 1.41 1.41" />
										<path d="M2 12h2" />
										<path d="M20 12h2" />
										<path d="m6.34 17.66-1.41 1.41" />
										<path d="m19.07 4.93-1.41 1.41" />
									</svg>
								) : (
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon-star">
										<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
										<path d="M20 3v4" />
										<path d="M22 5h-4" />
									</svg>
								)}
							</button>
						</div>
					</div>

					{/* Botón hamburguesa*/}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden hover:text-rosado duration-500"
						aria-label="Menú de navegación"
					>
						<svg
							className="w-10 h-10"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="4" x2="20" y1="12" y2="12" />
							<line x1="4" x2="20" y1="6" y2="6" />
							<line x1="4" x2="20" y1="18" y2="18" />
						</svg>
					</button>
				</div>

				{/* Celu */}
				{isMenuOpen && (
					<div className="md:hidden absolute top-full left-0 right-0 bg-lightNavbar dark:bg-black shadow-lg">
						<div className="px-4 py-3">
							<div className="flex flex-col gap-4 items-center">
								{children}
								<div className="flex justify-center gap-5 pt-4 border-t border-gray-700">
									<a href="/presentacion" className="hover:text-rosado duration-500">
										{/* <svg
											aria-label="Video de presentacion"
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
											/>
										</svg> */}
										<svg
											aria-label="Video de presentacion"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"
										></path><path d="m7 21 5-5 5 5"></path></svg
										>
									</a>
									<button
										aria-label="Cambiar tema"
										onClick={handleTheme}
										className="hover:text-rosado duration-500"
									>
										{theme === 'dark' ? (
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
												<circle cx="12" cy="12" r="4" />
												<path d="M12 2v2" />
												<path d="M12 20v2" />
												<path d="m4.93 4.93 1.41 1.41" />
												<path d="m17.66 17.66 1.41 1.41" />
												<path d="M2 12h2" />
												<path d="M20 12h2" />
												<path d="m6.34 17.66-1.41 1.41" />
												<path d="m19.07 4.93-1.41 1.41" />
											</svg>
										) : (
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon-star">
												<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
												<path d="M20 3v4" />
												<path d="M22 5h-4" />
											</svg>
										)}
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};
