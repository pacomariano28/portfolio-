import './about.css'

export function About() {
	return (
		<section className='container mb-5 col-12 about mb-3'>
			<article className='d-flex flex-lg-row flex-column align-items-center justify-content-center w-100 gap-5'>
				<aside className='d-flex flex-column order-2 order-lg-1 col-10 col-lg-6'>
					<h2 className='fw-bold gradient aboutTitle '>ABOUT ME</h2>
					<p className='text-light fs-5'>
						Me llamo Francisco pero mis amigos me llaman Paco
						Empecé en la programación con un Amstrad,
						tenía 10 años. Actualmente estoy liderando
						equipos de desarrollo en multinacionales. Me llamo Francisco pero mis amigos me llaman Paco
						Empecé en la programación con un Amstrad,
						tenía 10 años. Actualmente estoy liderando
						equipos de desarrollo en multinacionales.
					</p>
				</aside>

				<img className='col-lg-2 col-6 col-md-4 order-1 order-lg-2 image about_img' src="https://cdn.intra.42.fr/users/bb7e4e90140bf5eb75ba0d5040599a25/frmarian.jpg" alt="" />
			</article>
		</section>
	);
}
