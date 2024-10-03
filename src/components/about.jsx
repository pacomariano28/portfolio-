import './about.css'

export function About() {
	return (
		<section className='col-12 about p-3 pi-0 mb-5'>
			<article className='d-flex flex-lg-row flex-column align-items-center justify-content-center w-100 gap-5 p-0'>
				<aside className='d-flex flex-column order-2 col-12 col-lg-5'>
					<h2 className='fw-bold gradient aboutTitle ms-3 ms-lg-0 ms-md-3'>ABOUT ME</h2>
					<p className='text-light fs-5'>
						I'm Francisco, but everyone calls me
						<div className='text-warning fw-bold fs-1 jumpscare-text ms-2'>
							<span>P</span><span>a</span><span>c</span><span>o</span><span>!</span>
						</div>
						<br /><br />
						Active <span className='text-warning fw-bold'>web developer</span> constantly evolving, may i say.
						<br /><br />
						While I'm <span className='text-warning fw-bold'>passionate about design, layout, and animation details</span>, I also have experience in other areas of web development.🚀
						<br /><br />
						Currently studying at <a className='text-warning fw-bold' target='blank' href="https://www.fundaciontelefonica.com/empleabilidad/campus-42/"> 42 Málaga</a> and already hold a <span className='text-warning fw-bold'> Web Aplication Developer degree</span>.
						<br /><br />
						I'm always <span className='text-warning fw-bold'>working on new projects, improving my skills, and advancing</span> in this ever-changing world of development. 😁
					</p>
				</aside>
				<img className='col-lg-2 col-6 col-md-4 order-1 order-lg-2 image about_img' src="https://cdn.intra.42.fr/users/bb7e4e90140bf5eb75ba0d5040599a25/frmarian.jpg" alt="" />
			</article>
		</section>
	);
}
