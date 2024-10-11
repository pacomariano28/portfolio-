import ProyectCard from './proyect-card';
import './proyects.css';

export function Proyects() {
	return (
		<section className='d-flex align-items-center justify-content-center col-12 col-lg-10 col-md-10 '>
			<div className='col-lg-9 col-12'>
				<h2 className="gradient fw-bold">&lt;PROJECTS&gt;</h2>
				<div className='d-flex flex-column cards-container gap-5'>
					<ProyectCard
						title="Weather App"
						techs={["React", "vitejs", "Bootstrap"]}
						text="Functional time application. Complete functionalities with special care for the design."
						image="https://tinyminute.com/wordpress/wp-content/uploads/2019/09/weather-app.jpg"
					/>

					<ProyectCard
						title="SVGL App"
						techs={["Angular","Nextjs", "TailwindCss"]}
						text="Library of SVG logos of the most popular brands. Over 10k monthly visits. More than 2k SVGs downloaded. Created from scratch with Next.js, Angular, and Tailwind CSS."
						image="https://www.blog.brightcoding.dev/wp-content/uploads/2023/05/Angular-Fundamentals-A-Practical-Guide-with-Code-Examples-bright-coding-mohamed-idbrahim.png"
					/>

					<ProyectCard
						title="Tailwind Bros"
						techs={["React", "TailwindCss"]}
						text="Landing page of Mario Bros created with Tailwind CSS and React."
						image="https://i.ytimg.com/vi/AXST7grbqVQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAqzzl1yssvre-LoxZYoeakZzksoQ"
					/>
				</div>
			</div>
		</section>
	);
}
