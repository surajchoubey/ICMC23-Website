import React from 'react';
import NavLogo from '../images/bits-logo.png';
import { Link } from 'react-router-dom';

let NavWithDropDown = (props) => {
	return (
		<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle text-dark" href='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
		<Link style={{fontWeight: '400'}} class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" to={link}>{showname}</Link>
	)
}

function MyNavbar() {

	return (
    <div class="container-fluid">
		<nav class="navbar navbar-light px-3 navbar-expand-lg sticky-top bg-white">
			<div class="container-fluid">

				<Link class="navbar-brand my-2" to="/">
				<img src={NavLogo} height="70" class="align-top p-1" alt="" />
				</Link>
				
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class='collapse navbar-collapse in justify-content-end' id="navbarSupportedContent">
					<ul class="navbar-nav d-flex flex-wrap main-nav-list justify-content-end borderXwidth">
						<NavWithoutDropDown link={"/"} showname={"Home"} />

						<NavWithDropDown name="About">
								<DropDownItem link={"/about/bitspilani"} showname={"University"} />
								<DropDownItem link={"/about/bpgcmathdept"} showname={"Math Department"} />
								<DropDownItem link={"/about/icmc"} showname={"ICMC"} />
						</NavWithDropDown>

						<NavWithoutDropDown link={"/speakers"} showname={"Speakers"} />

						<NavWithoutDropDown link={"/committee"} showname={"Committee"} />

						{/* <NavWithoutDropDown link={"/timeline"} showname={"Timeline"} /> 

						<NavWithDropDown name="Committee">
								<DropDownItem link={"/committee/patrons/"} showname={"Patrons"} />
								<DropDownItem link={"/committee/orgcommittee/"} showname={"Organizing Committee"} />
								<DropDownItem link={"/committee/techprocommittee/"} showname={"Technical Program Committee"} />
						</NavWithDropDown>
						*/}

						<NavWithDropDown name="Call for Papers">
								<DropDownItem link={"/callforpapers/tracks/"} showname={"Contribution Tracks"} />
								<DropDownItem link={"/callforpapers/guidelines/"} showname={"Author Guidelines"} />
								<DropDownItem link={"/callforpapers/submitpaper/"} showname={"Submit your Paper"} />
								<DropDownItem link={"/callforpapers/listaccepted/"} showname={"Accepted Papers"} />
						</NavWithDropDown>

						<NavWithDropDown name="Registration">
								<DropDownItem link={"/registration/confregfee/"} showname={"Conference Fees"} />
								<DropDownItem link={"/registration/payregfee/"} showname={"Payment"} />
						</NavWithDropDown>

						<NavWithoutDropDown link={"/pasteditions"} showname={"Past Editions"} />

						<NavWithDropDown name="Venue">
								<DropDownItem link={"/venue/bpgc-goa"} showname={"BITS Goa"} />
								<DropDownItem link={"/venue/howtoreach"} showname={"How to reach?"} />
								<DropDownItem link={"/venue/accomodation"} showname={"Accomodation"} />
								<DropDownItem link={"/venue/visa"} showname={"VISA Information"} />
						</NavWithDropDown>						

						<NavWithoutDropDown link={"/contact"} showname={"Contact Us"} />
					</ul>
				</div>
			</div>
		</nav>
    </div>
  );
}

export default MyNavbar;
