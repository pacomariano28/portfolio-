import './hero.css'

export function Hero() {
	return (
		<section className='hero container col-12 col-lg-10 col-md-10'>
			<div className='d-flex flex-column align-items-start'>
				<h1 className="gradient">pacode<span className='gradient'>|</span></h1>
				<span className='ms-2'><span className='text-warning'>Web developer</span> and UI/UX designer</span>
				<div className="d-flex gap-3 align-items-center mt-lg-2 mt-4 ms-1">
					<span className="p-2 badge rounded-pill text-success border border-2 border-success float">AVAIBLE FOR WORK</span>
					<span className="fs-3 text-warning">|</span>
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-cv" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EDAC40" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M14 3v4a1 1 0 0 0 1 1h4" />
						<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
						<path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
						<path d="M13 11l1.5 6l1.5 -6" />
					</svg>
				</div>
			</div>

			<article className='d-flex justify-content-center align-items-center w-100'>
				<div className='d-flex flex-column gap-3 col-lg-9 col-md-11 col-12'>
					<h2 className="gradient fw-bold fs-3">EXPERIENCE</h2>
					<section className="experiencia d-flex card-gradient p-1 p-lg-4 justify-content-center">
						<aside className="d-flex flex-column">
							<section className='d-flex flex-column gap-1 mb-1'>
								<h3 className="m-0 fs-4 gradient">Intern <strong>at Viewnext</strong></h3>
								<small>March - 2023</small>
							</section>

							<section className='d-flex flex-column gap-4'>
								<aside>
									<h5 className='fw-bold fs-5'>RESPONSABILITIES</h5>
									<div className='fs-5'>
										<li>Developed an internal application for vacation booking using <strong>React</strong>.</li>
										<li>Trained in the <strong>latest technologies</strong> used in companies.</li>
										<li>Practiced <strong>Agile Methodologies</strong>.</li>
									</div>
								</aside>

								<aside>
									<h5 className='fw-bold fs-5'>KEY ACCOMPLISHMENTS</h5>
									<div className='fs-5'>
										<li>Awarded <strong>best web design</strong> among candidate projects.</li>
										<li><strong>Effective responsive design</strong>. </li>
										<li>Excellent UX.</li>
									</div>
								</aside>
							</section>
						</aside>
					</section>
				</div>
			</article>
		</section>
	)
}
