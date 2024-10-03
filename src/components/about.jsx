import './about.css'

export function About() {
	return (
		<section className='mb-5 col-12 about mb-3'>
			<article className='d-flex flex-lg-row flex-column align-items-center justify-content-center w-100 gap-5'>
				<aside className='d-flex flex-column order-2 col-12 col-lg-5'>
					<h2 className='fw-bold gradient aboutTitle '>ABOUT ME</h2>
					<p className='text-light fs-5'>
						I'm Francisco, but everyone calls me <span className='text-warning fw-bold'>Paco!</span>
						<br />
						<span className='text-warning fw-bold'>Active web developer constantly evolving</span>, may i say.
						<br /><br />
						While I'm <span className='text-warning fw-bold'>passionate about design, layout, and animation details</span>, I also have experience in other areas of web development.🚀
						<br /><br />
						Currently studying at <a className='text-warning fw-bold' target='blank' href="https://www.fundaciontelefonica.com/empleabilidad/campus-42/"> 42 Málaga</a> and already hold a DAW degree. 
						<br />
						I'm always <span className='text-warning fw-bold'>working on new projects, improving my skills, and advancing</span> in this ever-changing world of development. 😁
					</p>
				</aside>
				<img className='col-lg-2 col-6 col-md-4 order-1 order-lg-2 image about_img' src="https://cdn.intra.42.fr/users/bb7e4e90140bf5eb75ba0d5040599a25/frmarian.jpg" alt="" />
			</article>
		</section>
	);
}
