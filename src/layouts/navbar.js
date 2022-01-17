import React from 'react';
import NavLogo from '../images/bits-logo.png';
import { Link } from 'react-router-dom';

function MyNavbar() {

	return (
    <div>
		<nav class="navbar navbar-light px-3 navbar-expand-lg sticky-top bg-white">
			<div class="container-fluid">
				<a class="navbar-brand my-2" href="/ICMC23-Website/">
				<img src={NavLogo} height="70" class="d-inline-block align-top p-1" alt="" />
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class='collapse navbar-collapse justify-content-end' id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto main-nav-list container b justify-content-end borderXwidth">
						<li class="nav-item">
							<Link className='nav-link text-dark' data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/'>Home</Link>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle text-dark" href='/ICMC23-Website/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							About
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown" >
								<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/about/bpgc'>BPGC</Link>
								<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/about/bpgcmathdept'>BPGC Math Dept</Link>
								<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/about/icmc'>ICMC</Link>
							</div>
						</li>
						<li class="nav-item">
							<Link className='nav-link text-dark' data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/speakers'>Speakers</Link>
						</li>
						<li class="nav-item">
							<Link className='nav-link text-dark' data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/timeline'>Timeline</Link>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle text-dark" href='/ICMC23-Website/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Committee
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/committee/patrons/'>Patrons</Link>
							<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/committee/orgcommittee/'>Organizing Committee</Link>
							<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/committee/techprocommittee/'>Technical Program Committee</Link>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle text-dark" href='/ICMC23-Website/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Call for Papers
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/callforpapers/tracks/'>Contribution Tracks</Link>
							<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/callforpapers/guidelines/'>Paper Guidelines</Link>
							<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/callforpapers/submitpaper/'>Submit your Paper</Link>
							<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/callforpapers/listaccepted/'>Accepted Papers</Link>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle text-dark" href='/ICMC23-Website/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Registration
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/registration/confregfee/'>Conference Registration Fee</Link>
							<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/registration/payregfee/'>Pay Registration Fee</Link>
							</div>
						</li>
						<li class="nav-item">
							<Link className='nav-link text-dark' data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/pasteditions'>Past Editions</Link>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle text-dark" href='/ICMC23-Website/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Venue
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/venue/bgpc-goa'>BITS Goa</Link>
							<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/venue/howtoreach'>How to reach?</Link>
							<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/venue/accomodation'>Accomodation</Link>
							<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/venue/visa'>VISA Information</Link>
							</div>
						</li>
						<li class="nav-item">
							<Link className='nav-link text-dark' data-toggle="collapse" data-target=".navbar-collapse.show" to='/ICMC23-Website/contact'>Contact Us</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
    </div>
  );
}

export default MyNavbar;