import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiLinkExternal, BiLogoGoLang } from 'react-icons/bi'
import { SiTailwindcss, SiNextdotjs, SiReact } from 'react-icons/si'
import { FaDocker, FaWordpressSimple } from 'react-icons/fa'

const Homepage = () => {
	return (
		<div className="min-h-screen bg-emeraldx-300 font-body">
			<nav className="sticky top-0 flex z-50 justify-between items-center p-4 h-[10vh]">
				<div>
					<a href="#top">home</a>
				</div>
				<div className="flex gap-2">
					<a href="#experience">experience</a>
					<a href="#projects">projects</a>
					<a href="#about">about/ed</a>
					<a href="#contact">contact</a>
				</div>
			</nav>

			<main className="p-4 flex-1 grow h-[90vh] flex flex-col justify-end">
				<h1 className="text-4xl font-bold md:text-5xl lg:text-6xl md:text-justify md:w-2/3 lg:w-3/4">
					My name is Cesar and I can help you take your business to the next level.
				</h1>
			</main>

			<section className="relative z-0 min-h-screen text-white bg-red-500" id="experience">
				<div className="absolute bottom-0 right-0 p-4">
					<h2 className="text-4xl font-semibold" >experience</h2>
				</div>

				<div className="flex flex-col gap-12 px-6 py-24">
					<div className="flex flex-col items-center justify-center">
						<div className="flex flex-col w-full gap-4 md:w-1/2 lg:w-1/3">
							<div className="flex items-center justify-between w-full">
								<div className="flex items-center gap-2 text-lg font-semibold">
									<a href="https://sumawealth.com/sumaapp" target="_blank" className="text-2xl">Suma Wealth</a>
									<a href="https://sumawealth.com/sumaapp" target="_blank"><BiLinkExternal /></a>
								</div>
								<p>Jul 2022 - Feb 2023</p>
							</div>
							<div className="flex flex-col">
								<p className="text-sm font-code">Role</p>
								<p>Full stack JS developer</p>
							</div>
							<div className="flex flex-col">
								<p className="text-sm font-code">Activities</p>
								<ul className="pl-4 list-disc">
									<li>
										I wrote an API in node that received data generated from a fintech platform and relayed that info
										to a user through push notifications. Users could receive their latest bank activity, tips and
										personalized suggestions on their phone, desktop and smartwatch.
									</li>
									<li>
										Maintained, modified and upgraded packages as the challenges faced by a fintech startup arose, from
										urgent 2FA maintenance to UI changes.
									</li>
									<li>
										Learned CI/CD and DevOps processes by managing multiple app environments with Heroku CI /
										Pipelines.
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center">
						<div className="flex flex-col w-full gap-4 md:w-1/2 lg:w-1/3">
							<div className="flex items-center justify-between w-full">
								<div className="flex items-center gap-2 text-lg font-semibold">
									<a href="https://www.ixaya.com/" target="_blank" className="text-2xl">Ixaya</a>
									<a href="https://www.ixaya.com/" target="_blank"><BiLinkExternal /></a>
								</div>
								<p>Jan 2022 - Jun 2022</p>
							</div>
							<div className="flex flex-col">
								<p className="text-sm font-code">Role</p>
								<p>Front-end developer (React)</p>
							</div>
							<div className="flex flex-col">
								<p className="text-sm font-code">Activities</p>
								<ul className="pl-4 list-disc">
									<li>
										Built react app components with strict testing requirements to be implemented into US Air
										Force flight documentation software.
									</li>
									<li>
										Learned the basics of software development when working as a team using Jira, Github and
										the common pitfalls when collaborating with multiple people. This is where my interest in
										a reliable, consistent environment where you don't have to worry about breaking dependencies.
										Started reading and learning about Docker, CI/CD tools, and DevOps.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative z-0 min-h-screen bg-amber-400" id="projects">
				<div className="absolute bottom-0 right-0 p-4">
					<h2 className="text-4xl font-semibold">projects/education</h2>
				</div>

				<div className="grid gap-6 px-6 py-24 md:p-12 lg:p-24 lg:grid-cols-3 md:gap-12">
					<div className="flex flex-col gap-2">
						<h3 className="text-xl font-medium">
							Blinkr / a started CRUD RESTful API written in Go, running
							on Docker Containers.
						</h3>
						<p>
							This is a starter project for a CRUD RESTful API running
							three containers:

						</p>
						<ol className="pl-8 list-decimal">
							<li>
								<span className="font-semibold">UI: A NextJS 13 front end application.</span>

							</li>
							<li>
								<span className="font-semibold">REST-SERVER: A REST API serving CRUD endpoints written in Go.</span>
							</li>
							<li>
								<span className="font-semibold">DB: A MongoDB instance.</span>
							</li>
						</ol>
						<p>
							With a simple command, you can create a complete management
							system based on containers ready to be deployed to any
							cloud provider.
						</p>

						<a href="https://github.com/mar-cial/blinkr"
							className="font-semibold underline">
							You can check out the Github repo here.
						</a>

						<div className="flex flex-col gap-2">
							<div>
								<h4 className="text-sm font-code">tech used</h4>
							</div>

							<div className="flex gap-2 text-3xl">
								<FaDocker />
								<BiLogoGoLang />
								<SiNextdotjs />
								<SiTailwindcss />

							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="text-xl font-medium">
							Polyfill Furniture / Full Stack Blockchain developer bootcamp
							final project
						</h3>
						<p>
							This website is a final project delivered to graduate from a
							full stack blockchain developer bootcamp imparted by
							<a href="https://blockdemy.com/"
								className="font-medium underline"> Blockdemy</a>.
						</p>
						<p>
							This is a marketplace interface to showcase your NFT
							gallery and purchase for Ethereum. It connects to your
							MetaMask wallet (on compatible browsers).
						</p>
						<p>
							I graduated from this bootcamp and received my certificate.
						</p>
						<a href="https://drive.google.com/file/d/1IUlGN3ieHCK2JF4WMegPSffrptPK09v4/view?usp=sharing" className="font-semibold underline">You can check it out here.</a>

						<a href="https://polyfill-furniture.vercel.app/"
							className="font-semibold underline">
							You can also check out the live website here.
						</a>

						<div className="flex flex-col gap-2">
							<div>
								<h4 className="text-sm font-code">tech used</h4>
							</div>

							<div className="flex gap-2 text-3xl">
								<SiNextdotjs />
								<SiTailwindcss />
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<h3 className="text-xl font-medium">
							Freelance front end development
						</h3>
						<p>
							I've done front end freelance projects throughout 3 years now.
							My latest solo project was redesigning the <a className="font-bold hover:underline" href="https://cabrasportshq.com/" target="_blank">
								CabraSportsHQ</a> site. A new, custom theme was implemented. I was also tasked with integrating
							newsletter sign-up and a sweepstakes tournament page.
						</p>
						<p>
							The tournament exceeced expectations, with
							over <strong>1,000+ users</strong> entered to win a prize. Through the newsletter and sweepstakes
							implementation, over <strong>1,400+ emails</strong> were collected in the span of 2 days.
						</p>

						<div className="flex flex-col gap-2">
							<div>
								<h4 className="text-sm font-code">tech used</h4>
							</div>

							<div className="flex gap-2 text-3xl">
								<FaWordpressSimple />
								<SiReact />
								<SiTailwindcss />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative z-0 min-h-screen bg-outrageous-orange-400" id="about">
				<div className="absolute bottom-0 right-0 p-4">
					<h2 className="text-4xl font-semibold">about me / education</h2>
				</div>

				<div className="flex items-end justify-end h-screen gap-12">

					<div className="flex flex-col gap-12 p-4 pb-24 text-right md:w-1/3">
						<div className="flex flex-col gap-4">

							<div className="flex flex-col">

								<div className="flex justify-end gap-4">
									<h4 className="font-medium">Cetys Universidad</h4>
									<p>2017 - 2021</p>
								</div>
								<p>Bachelor in Business Administration</p>
							</div>
							<div>

								<div className="flex justify-end gap-4">
									<h4 className="font-medium">Blockdemy</h4>
									<p>Jul 29 2022 - Aug 5 2022</p>
								</div>
								<p>Full stack blockchain software development bootcamp</p>
							</div>

						</div>
						<div>
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
				</div>

			</section>

			<section className="relative z-0 h-[100vh] bg-gossip-400" id="contact">
				<div className="absolute bottom-0 right-0 p-4" >
					<h2 className="text-4xl font-semibold">contact</h2>
				</div>

				<div className="flex items-center justify-center h-full">
					<div className="flex gap-2 text-6xl">
						<a href="https://twitter.com/marcialxx" target="_blank"><AiFillTwitterCircle /></a>
						<a href="https://github.com/mar-cial" target="_blank"><AiFillGithub /></a>
						<a href="https://www.linkedin.com/in/mar-cial/" target="_blank"><AiFillLinkedin /></a>
					</div>
				</div>
			</section>
		</div>

	)
}

export default Homepage
