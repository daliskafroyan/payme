import { ModeToggle } from "./mode-toggle";

export function Header() {
	return (
		<div className="bg-white dark:bg-gray-950">
			<div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
				<div className="flex items-center gap-4">
					{/* <Link
						to="/"
						className="shrink-0 text-xl font-bold text-black dark:text-white"
						aria-label="Home"
					>
						PayMe
					</Link> */}
				</div>
				<div className="flex items-center gap-6">
			
					<ModeToggle />
				</div>
			</div>
		</div>
	);
}



