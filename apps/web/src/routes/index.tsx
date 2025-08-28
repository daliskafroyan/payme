import { createFileRoute } from "@tanstack/react-router";
import Card from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { banks, ewallets } from "@/data/showcase";
import GridContainer from "@/components/ui/grid-container";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<>
			{/* Header Section */}
			{/* <GridContainer className="mb-12">
				<h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
					daliskafroyan.github.io/payme
				</h1>
			</GridContainer> */}

			<GridContainer className="mb-3">
				<p className="px-2 font-mono text-sm font-medium tracking-widest text-blue-500 dark:text-blue-400 uppercase">
					bank
				</p>
			</GridContainer>

			<GridContainer>
				<h2 className="mt-4 px-2 text-[2.5rem]/10 font-medium tracking-tighter text-gray-600 dark:text-gray-300 max-sm:px-4 2xl:mt-0">
					Akun Bank
				</h2>
			</GridContainer>

			<div className="mt-12 mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{banks.map((item) => (
					<Card
						key={item.name}
						name={item.name}
						description={item.description}
						logo={item.logo}
					/>
				))}
			</div>


			<GridContainer className="mb-3">
				<p className="px-2 font-mono text-sm font-medium tracking-widest text-blue-500 dark:text-blue-400 uppercase">
					e-wallet
				</p>
			</GridContainer>

			<GridContainer>
				<h2 className="mt-4 px-2 text-[2.5rem]/10 font-medium tracking-tighter text-gray-600 dark:text-gray-300 max-sm:px-4 2xl:mt-0">
					Dompet Digital
				</h2>
			</GridContainer>

			{/* Cards Grid */}
			<div className="mt-12 mb-18 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{ewallets.map((item) => (
					<Card
						key={item.name}
						name={item.name}
						description={item.description}
						logo={item.logo}
					/>
				))}
			</div>


		</>
	);
}
