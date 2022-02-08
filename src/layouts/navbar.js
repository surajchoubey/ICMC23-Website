import React from 'react';
import NavLogo from '../images/bits-logo.png';
import { Link } from 'react-router-dom';

let NavWithDropDown = (props) => {
	return (
		<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle text-dark" href='/ICMC23-Website/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			{props.name} &nbsp;<i class="fa fa-angle-down" style={{color: 'black'}}></i>
			</a>
			<div class="dropdown-menu" aria-labelledby="navbarDropdown" >
				{props.children}
			</div>
		</li>
	)
}

let NavWithoutDropDown = ({link, showname}) => {
	return (
		<li class="nav-item">
			<Link className='nav-link text-dark' data-toggle="collapse" data-target=".navbar-collapse.show" to={link}>{showname}</Link>
		</li>
	)
}

let DropDownItem = ({link, showname}) => {
	return (
		<Link class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to={link}>{showname}</Link>
	)
}

function MyNavbar() {

	return (
    <div class="container-fluid">
		<nav class="navbar navbar-light px-3 navbar-expand-lg sticky-top bg-white">
			<div class="container-fluid">

				<a class="navbar-brand my-2" href="/ICMC23-Website/">
				<img src={NavLogo} height="70" class="align-top p-1" alt="" />
				</a>
				
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class='collapse navbar-collapse justify-content-end' id="navbarSupportedContent">
					<ul class="navbar-nav d-flex flex-wrap main-nav-list justify-content-end borderXwidth">
						<NavWithoutDropDown link={"/ICMC23-Website/"} showname={"Home"} />

						<NavWithDropDown name="About">
								<DropDownItem link={"/ICMC23-Website/about/bpgc"} showname={"BPGC"} />
								<DropDownItem link={"/ICMC23-Website/about/bpgcmathdept"} showname={"BPGC Math Dept"} />
								<DropDownItem link={"/ICMC23-Website/about/icmc"} showname={"ICMC"} />
						</NavWithDropDown>

						<NavWithoutDropDown link={"/ICMC23-Website/speakers"} showname={"Speakers"} />

						<NavWithoutDropDown link={"/ICMC23-Website/timeline"} showname={"Timeline"} />

						<NavWithDropDown name="Committee">
								<DropDownItem link={"/ICMC23-Website/committee/patrons/"} showname={"Patrons"} />
								<DropDownItem link={"/ICMC23-Website/committee/orgcommittee/"} showname={"Organizing Committee"} />
								<DropDownItem link={"/ICMC23-Website/committee/techprocommittee/"} showname={"Technical Program Committee"} />
						</NavWithDropDown>

						<NavWithDropDown name="Call for Papers">
								<DropDownItem link={"/ICMC23-Website/callforpapers/tracks/"} showname={"Contribution Tracks"} />
								<DropDownItem link={"/ICMC23-Website/callforpapers/guidelines/"} showname={"Author Guidelines"} />
								<DropDownItem link={"/ICMC23-Website/callforpapers/submitpaper/"} showname={"Submit your Paper"} />
								<DropDownItem link={"/ICMC23-Website/callforpapers/listaccepted/"} showname={"Accepted Papers"} />
						</NavWithDropDown>

						<NavWithDropDown name="Registration">
								<DropDownItem link={"/ICMC23-Website/registration/confregfee/"} showname={"Conference Fees"} />
								<DropDownItem link={"/ICMC23-Website/registration/payregfee/"} showname={"Payment"} />
						</NavWithDropDown>

						<NavWithoutDropDown link={"/ICMC23-Website/pasteditions"} showname={"Past Editions"} />

						<NavWithDropDown name="Venue">
								<DropDownItem link={"/ICMC23-Website/venue/bgpc-goa"} showname={"BITS Goa"} />
								<DropDownItem link={"/ICMC23-Website/venue/howtoreach"} showname={"How to reach?"} />
								<DropDownItem link={"/ICMC23-Website/venue/accomodation"} showname={"Accomodation"} />
								<DropDownItem link={"/ICMC23-Website/venue/visa"} showname={"VISA Information"} />
						</NavWithDropDown>						

						<NavWithoutDropDown link={"/ICMC23-Website/contact"} showname={"Contact Us"} />
					</ul>
				</div>
			</div>
		</nav>
    </div>
  );
}

export default MyNavbar;