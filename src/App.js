import React from 'react';
import './App.css';
import './App2.css';
import Home from './pages/home';
import BPGC from './pages/about/bpgc';
import BPGCMathDept from './pages/about/bpgcmathdept';
import ICMC from './pages/about/icmc';
import Speakers from './pages/speakers';
import Timeline from './pages/timeline';
import Patrons from './pages/commitee/patrons';
import OrgCommittee from './pages/commitee/orgcommitee';
import TechProCommittee from './pages/commitee/techprocommitee';
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

function App() {
  return (
    <div className="App" style={{"display": "flex","min-height": "100vh", "flex-direction": "column", "justify-content": "flex-start"}}>
		<MyNavBar />
		<Routes>
			<Route exact path='/' element = {<Home/> } />
			<Route exact path='/ICMC23-Website/' element = {<Home />} />
			<Route exact path='/ICMC23-Website/about/bpgc' element = {<BPGC />} />
			<Route exact path='/ICMC23-Website/about/bpgcmathdept' element = {<BPGCMathDept />} />
			<Route exact path='/ICMC23-Website/about/icmc' element = {<ICMC />} />
			<Route exact path='/ICMC23-Website/speakers' element = {<Speakers />} />
			<Route exact path='/ICMC23-Website/timeline' element = {<Timeline />} />
			<Route exact path='/ICMC23-Website/committee/patrons' element = {<Patrons />} />
			<Route exact path='/ICMC23-Website/committee/orgcommittee' element = {<OrgCommittee />} />
			<Route exact path='/ICMC23-Website/committee/techprocommittee' element = {<TechProCommittee />} /> 
			<Route exact path='/ICMC23-Website/callforpapers/tracks' element = {<Tracks />} />
			<Route exact path='/ICMC23-Website/callforpapers/guidelines' element = {<Guidelines />} />
			<Route exact path='/ICMC23-Website/callforpapers/submitpaper' element = {<SubmitPaper />} />
			<Route exact path='/ICMC23-Website/callforpapers/listaccepted' element = {<ListAccepted />} />
			<Route exact path='/ICMC23-Website/registration/confregfee' element = {<ConfRegFee />} />
			<Route exact path='/ICMC23-Website/registration/payregfee' element = {<PayRegFee />} />
			<Route exact path='/ICMC23-Website/pasteditions' element = {<PastEditions />} />
			<Route exact path='/ICMC23-Website/venue/bgpc-goa' element = {<BPGCGoa />} />
			<Route exact path='/ICMC23-Website/venue/howtoreach' element = {<HowToReach />} />
			<Route exact path='/ICMC23-Website/venue/accomodation' element = {<Accomodation />} />
			<Route exact path='/ICMC23-Website/venue/visa' element = {<VISA />} />
			<Route exact path='/ICMC23-Website/contact' element = {<Contact />} />
			<Route exact path='/*' element = {<ErrorPage />} />
		</Routes>
		<MyFooter />
    </div>
  );
}

export default App;
