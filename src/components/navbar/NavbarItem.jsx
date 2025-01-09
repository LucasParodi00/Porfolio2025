export const NavbarItem = ({ referencia = "#", texto = "Texto", patchName = '/' }) => {
	return (
		<a
			href={referencia}
			className={`uppercase text-lg  duration-500 ${patchName === 'active' ? 'text-rosado' : 'hover:text-rosado'}`}>
			{texto}
		</a>
	);
};
