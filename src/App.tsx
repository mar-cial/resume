
const Homepage = () => {
	return (
		<div className="bg-emeraldx-300 min-h-screen">
			<nav className="sticky top-0 flex z-50 justify-between items-center p-4 h-[10vh]">
				<div>
					<a href="#top">home</a>
				</div>
				<div className="flex gap-2">
					<a href="#experience">experience</a>
					<a href="#projects">projects</a>
					<a href="#about">about</a>
					<a href="#contact">contact</a>
				</div>
			</nav>

			<main className="p-4 flex-1 grow h-[90vh] flex flex-col justify-end">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold md:text-justify md:w-2/3 lg:w-3/4">
					My name is Cesar and I can help you take your business to the next level.
				</h1>
			</main>

			<section className="relative z-0 h-[100vh] bg-white" id="experience">
				<div className="absolute right-0 bottom-0 p-4">
					<h2 className="text-4xl font-semibold" >experience</h2>
				</div>
			</section>

			<section className="relative z-0 h-[100vh] bg-amber-400" id="projects">
				<div className="absolute right-0 bottom-0 p-4">
					<h2 className="text-4xl font-semibold">projects</h2>
				</div>
			</section>

			<section className="relative z-0 h-[100vh] bg-outrageous-orange-400" id="about">
				<div className="absolute right-0 bottom-0 p-4">
					<h2 className="text-4xl font-semibold">about me</h2>
				</div>

				<div className="flex justify-end items-end h-full">
					<div className="p-4 pb-24 text-right md:w-1/3">
						<p>
							I am a self-taught software developer with a great passion for learning
							new things and challenging myself constantly.
						</p>

						<p>
							My developer journey started on my last semester of college, when I was
							tasked to create a couple landing pages for school events. I haven't stopped
							practicing every day since.
						</p>
						<p>
							I have explored many fields in the programming world, but the one field that
							interests me the most is cloud computing.
						</p>
						<p>
							Aside from my programming interests, I am a pretty standard guy. I love
							my fiancé, my dogs, eating good food and drinking good coffee on the
							mornings.
						</p>
					</div>
				</div>

			</section>

			<section className="relative z-0 h-[100vh] bg-gossip-400" id="contact">
				<div className="absolute right-0 bottom-0 p-4" >
					<h2 className="text-4xl font-semibold">contact</h2>
				</div>
			</section>
		</div>

	)
}

export default Homepage
