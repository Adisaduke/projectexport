import { Suspense } from "react";
import {
	Navbar,
	ProjectIntro,
	AboutProject,
	ProjectSlider,
	Goals,
	Roadmap,
	Blogs,
	Footer,
	Loader,
} from "../components";
import introImg from "../assets/img/argo_big.png";
import roadmapImg from "../assets/img/argo/roadmap.png";
import vidUrl from "../assets/video/ARGO_Presentation.mp4";
import sliderImg1 from "../assets/img/argo/jetson_nano.png";
import sliderImg2 from "../assets/img/argo/pixhawk.png";
import sliderImg3 from "../assets/img/argo/rplidar.png";
import sliderImg4 from "../assets/img/argo/4kcamera.png";

const data = [
	{
		header1: "NVidia Jetson",
		header2: "Nano",
		text:
			"A powerful computer designed for embedded applications, such as autonomous vehicles and drones. It features a quad-core ARM Cortex-A57 CPU, 128-core NVIDIA Maxwell GPU, and 4GB of LPDDR4 memory.",
		img: sliderImg1,
	},
	{
		header1: "PixHawk",
		header2: "Flight Controller",
		text:
			"An open-source autopilot system designed for drones, helicopters, and other unmanned vehicles. It features a powerful ARM Cortex-M4 CPU, multiple sensors, and a range of I/O ports.",
		img: sliderImg2,
	},
	{
		header1: "RPLiDAR",
		header2: "A2 M12",
		text:
			"A 360-degree laser scanner is used for mapping and navigation. It can scan up to 12 meters in range and 10,000 times per second.",
		img: sliderImg3,
	},
	{
		header1: "E-con Systems",
		header2: "4K Camera",
		text:
			"A high resolution camera used to capture images and video of the drone’s surroundings.",
		img: sliderImg4,
	},
];

const blogs = [
	{
		title: "Notion Page",
		text:
			"You'll be able to see all the detailed aspects of the engineering process behind this project.",
		url:
			"https://incongruous-notebook-e1d.notion.site/VulCAN-db9826bb9481426b99661145c1439a80",
	},
	{
		title: "Medium Blog",
		text:
			"You'll be able to follow up with our roadmap, projects, the prototypes, the tasks and more.",
		url: "https://medium.com/@ydehhani",
	},
];

const ArgoContent = () => {
	return (
		<div>
			<Navbar />
			<ProjectIntro
				title="ARGO"
				subtitle="The Autonomous Drone"
				img={introImg}
			/>
			<main>
				<AboutProject
					header1="Argo is an autonomous drone that can fly both indoors and outdoors"
					header2="and be used for a variety of applications, such as aerial photography,
					mapping, surveillance, and more."
					text="We set out to design and build a cutting-edge machine."
					video={vidUrl}
				/>
				<ProjectSlider data={data} />
				<Goals
					goals={[
						"Design and build a cutting-edge technology drone",
						"Demonstrate the power of Data",
						"Develop hardware and software skills",
					]}
				/>
				<Roadmap
					title="The Roadmap"
					text="How the project's going ?"
					image={roadmapImg}
				/>
				<Blogs blogs={blogs} />
			</main>
			<Footer />
		</div>
	);
};

const Argo = () => {
	return (
		<div>
			<Suspense fallback={<Loader />}>
				<ArgoContent />
			</Suspense>
		</div>
	);
};

export default Argo;
