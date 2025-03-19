export const Navbar = () => {
	const avatarUrl =
		"https://ui-avatars.com/api/?background=random&name=hazrat+akonda&format=svg";
	return (
		<nav className="flex justify-between px-20 items-center my-5 border-b h-20 shadow-xs ">
			<div className="text-[48px] w-16 border-2 text-center">H</div>
			<ul className="flex gap-6">
				<li>About me</li>
				<li>blog</li>
			</ul>
			<div className="flex gap-6">
				<input
					type="text"
					placeholder="Search"
					className="py-2 px-4 border rounded-md bg-black/20"
				/>
				<div className="w-12 h-12 relative outline rounded-full">
					<img
						src={avatarUrl}
						height={48}
						width={48}
						alt="avatar"
						className="rounded-full"
					/>
					<button className="rotate-90 absolute bottom-0 right-0 font-bold">
						{">"}
					</button>
				</div>
			</div>
		</nav>
	);
};
