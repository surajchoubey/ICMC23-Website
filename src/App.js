import React from 'react';
import './App.css';
import './App2.css';
import Home from './pages/home';
import BPGC from './pages/about/bpgc';
import BPGCMathDept from './pages/about/bpgcmathdept';
import ICMC from './pages/about/icmc';
import Speakers from './pages/speakers';
// import Timeline from './pages/timeline';
import Committee from './pages/commitee/committee';
// import OrgCommittee from './pages/commitee/orgcommitee';
// import TechProCommittee from './pages/commitee/techprocommitee';
import Tracks from './pages/callforpapers/tracks';
import Guidelines from './pages/callforpapers/guidelines';
import SubmitPaper from './pages/callforpapers/submitpaper';
import ListAccepted from './pages/callforpapers/listaccepted';
import ConfRegFee from './pages/registration/confregfee';
import PayRegFee from './pages/registration/payregfee';
import PastEditions from './pages/pasteditions';
import BPGCGoa from './pages/venue/bpgcgoa';
import HowToReach from './pages/venue/howtoreach';
import Accomodation from './pages/venue/accomodation';
import VISA from './pages/venue/visa';
import Contact from './pages/contact';
import ErrorPage from './pages/errorpage';
import { Routes, Route } from "react-router-dom";
import MyNavBar from './layouts/navbar';
import MyFooter from './layouts/footer';
import ScrollToTop from './layouts/scrolltotop'

function App() {
  return (
    <div className="App" style={{"display": "flex","min-height": "100vh", "flex-direction": "column", "justify-content": "flex-start"}}>
		<MyNavBar />
		<ScrollToTop>
		<Routes>
			<Route exact path='/' element = {<Home/> } />
			<Route exact path='/about/bpgc' element = {<BPGC />} />
			<Route exact path='/about/bpgcmathdept' element = {<BPGCMathDept />} />
			<Route exact path='/about/icmc' element = {<ICMC />} />
			<Route exact path='/speakers' element = {<Speakers />} />
			<Route exact path='/committee' element = {<Committee />} />
			{/*
			<Route exact path='/timeline' element = {<Timeline />} />
			<Route exact path='/committee/patrons' element = {<Patrons />} />
			<Route exact path='/committee/orgcommittee' element = {<OrgCommittee />} />
			<Route exact path='/committee/techprocommittee' element = {<TechProCommittee />} />
			*/}
			<Route exact path='/callforpapers/tracks' element = {<Tracks />} />
			<Route exact path='/callforpapers/guidelines' element = {<Guidelines />} />
			<Route exact path='/callforpapers/submitpaper' element = {<SubmitPaper />} />
			<Route exact path='/callforpapers/listaccepted' element = {<ListAccepted />} />
			<Route exact path='/registration/confregfee' element = {<ConfRegFee />} />
			<Route exact path='/registration/payregfee' element = {<PayRegFee />} />
			<Route exact path='/pasteditions' element = {<PastEditions />} />
			<Route exact path='/venue/bgpc-goa' element = {<BPGCGoa />} />
			<Route exact path='/venue/howtoreach' element = {<HowToReach />} />
			<Route exact path='/venue/accomodation' element = {<Accomodation />} />
			<Route exact path='/venue/visa' element = {<VISA />} />
			<Route exact path='/contact' element = {<Contact />} />
			<Route exact path='/*' element = {<ErrorPage />} />
		</Routes>
		</ScrollToTop>
		<MyFooter />
    </div>
  );
}

export default App;
