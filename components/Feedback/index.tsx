import Image from "next/image"

export const Feedback = () => {
    return (
    <section className="bg-white">
		<div className="container px-6 py-12 mx-auto">
			<div className="grid items-center gap-4 xl:grid-cols-5">
				<div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
					<h2 className="text-4xl font-bold text-sky-500">Estudantes que conseguiram moradia com a Republiquei</h2>
					<p>Diversos universitários passam pela nossa plataforma diariamente e nos recomendam para encontrar a sua república ideal.</p>
				</div>
				<div className="p-6 xl:col-span-3">
					<div className="grid gap-4 md:grid-cols-2">
						<div className="grid content-center gap-4">
							<div className="p-6 rounded shadow-md">
								<p>A Republiquei me ajudou a encontrar a república que mais combinava comigo. Com ela consegui encontrar um local onde só tem meninas.</p>
								<div className="flex items-center mt-4 space-x-4">
									<img className="w-12 h-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/50x50/?portrait?1" alt="img" />
									<div>
										<p className="text-lg font-semibold">Nathaly Silva</p>
										<p className="text-sm">Estudante de Ciencia da Computação</p>
									</div>
								</div>
							</div>
							<div className="p-6 rounded shadow-md">
								<p>Com a Republiquei pude encontrar a minha república sem precisar ir até a cidade, dessa forma, quando me mudei já tinha o local me esperando.</p>
								<div className="flex items-center mt-4 space-x-4">
									<img className="w-12 h-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/50x50/?portrait?2" alt="img" />
									<div>
										<p className="text-lg font-semibold">Bruno Arantes</p>
										<p className="text-sm">Estudante de Direito.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="grid content-center gap-4">
							<div className="p-6 rounded shadow-md">
								<p>A Republiquei facilitou a encontrar repúblicas mais próximas a minha universidade, além disso pude escolher uma república de acordo com o meu gosto.</p>
								<div className="flex items-center mt-4 space-x-4">
									<img className="w-12 h-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/50x50/?portrait?3" alt="img" />
									<div>
										<p className="text-lg font-semibold">Gabrielly Spindola</p>
										<p className="text-sm">Estudante de Medicina.</p>
									</div>
								</div>
							</div>
							<div className="p-6 rounded shadow-md">
								<p>A Republiquei facilitou o meu contato com o proprietário da casa, não precisei ir até a cidade para ver república por república. Com poucos cliques pude encontrar uma república sensacional e próxima a minha universidade.</p>
								<div className="flex items-center mt-4 space-x-4">
									<img className="w-12 h-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/50x50/?portrait?4" alt="" />
									<div>
										<p className="text-lg font-semibold">Renato Hilbert</p>
										<p className="text-sm">Estudante de Engenharia Civil</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
}
