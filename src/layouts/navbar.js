import React from 'react';
import NavLogo from '../images/bits-pilani.png';
import { Link } from 'react-router-dom';

function MyNavbar() {

	return (
    <div>
		<nav class="navbar navbar-light bg-secondary px-3 py-1 navbar-expand-lg sticky-top">
			<div class="container-fluid">
				<a class="navbar-brand text-white" href="/ICMC23-Website/">
				<img src={NavLogo} width="30" height="30" class="d-inline-block align-top p-1" alt="" />
					ICMC Conference 2023
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class='collapse navbar-collapse justify-content-end' id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<Link className='nav-link text-white' data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/'>Home</Link>
						</li>
						<li class="nav-item">
							<Link className='nav-link text-white' data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/about'>About</Link>
						</li>
						<li class="nav-item">
							<Link className='nav-link text-white' data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/speakers'>Speakers</Link>
						</li>
						<li class="nav-item">
							<Link className='nav-link text-white' data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/registration'>Registration</Link>
						</li>
						<li class="nav-item">
							<Link className='nav-link text-white' data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/pasteditions'>Past Editions</Link>
						</li>
						<li class="nav-item">
							<Link className='nav-link text-white' data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/publications'>Publications</Link>
						</li>
						<li class="nav-item">
							<Link className='nav-link text-white' data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/contact'>Contact Us</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
    </div>
  );
}

export default MyNavbar;