import ProyectCard from './proyect-card';
import './proyects.css';

export function Proyects() {
	return (
		<section className='proyects_container d-flex align-items-center justify-content-center col-12 col-lg-10 col-md-10 '>
			<div className='col-lg-8 col-12'>
				<h2 className="gradient fw-bold">&lt;PROJECTS&gt;</h2>
				<div className='d-flex flex-column cards-container gap-5'>
					<ProyectCard
						title="Weather App"
						techs={["Astro", "TailwindCss"]}
						text="Aplicación funcional del tiempo. Funcionalidades completas con especial mimo al diseño."
						image="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/10/visual-studio-code.jpeg?fit=1920%2C1080&quality=50&strip=all&ssl=1"
					/>

					<ProyectCard
						title="MECKI JS"
						techs={["React", "apachekafka"]}
						text="Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS."
						image="https://www.blog.brightcoding.dev/wp-content/uploads/2023/05/Angular-Fundamentals-A-Practical-Guide-with-Code-Examples-bright-coding-mohamed-idbrahim.png"
					/>

					<ProyectCard
						title="LAMEBICHOS"
						techs={["React", "Bootstrap"]}
						text="Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS."
						image="https://i.ytimg.com/vi/AXST7grbqVQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAqzzl1yssvre-LoxZYoeakZzksoQ"
					/>
				</div>
			</div>
		</section>
	);
}
