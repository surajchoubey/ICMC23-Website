import React from 'react';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Speakers from './pages/speakers';
import PastEditions from './pages/pasteditions';
import Registration from './pages/registration';
import Publications from './pages/publications';
import Contact from './pages/contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLogo from './images/bits-pilani.png';

function App() {
  return (
    <div className="App">
		<nav class="navbar navbar-light bg-primary px-3">
			<a class="navbar-brand text-white" href="/">
			<img src={NavLogo} width="30" height="30" class="d-inline-block align-top p-1" alt="" />
				ICMC Conference 2023
			</a>
			<ul class="nav justify-content-end">
			<li class="nav-item">
				<a class="nav-link text-white" href="/ICMC23-Website/">Home</a>
			</li>
			<li class="nav-item">
				<a class="nav-link text-white" href="/ICMC23-Website/about">About</a>
			</li>
			<li class="nav-item">
				<a class="nav-link text-white" href="/ICMC23-Website/speakers">Speakers</a>
			</li>
			<li class="nav-item">
				<a class="nav-link text-white" href="/ICMC23-Website/registration">Registration</a>
			</li>
			<li class="nav-item">
				<a class="nav-link text-white" href="/ICMC23-Website/pasteditions">Past Editions</a>
			</li>
			<li class="nav-item">
				<a class="nav-link text-white" href="/ICMC23-Website/publications"> Publications </a>
			</li>
			<li class="nav-item">
				<a class="nav-link text-white" href="/ICMC23-Website/contact"> Contact Us </a>
			</li>
			</ul>
		</nav>
		<Router>
			<Routes>
				<Route path='/ICMC23-Website/' element = {<Home />} />
			</Routes>
			<Routes>
				<Route path='/ICMC23-Website/about' element = {<About />} />
			</Routes>
			<Routes>
				<Route path='/ICMC23-Website/speakers' element = {<Speakers />} />
			</Routes>
			<Routes>
				<Route path='/ICMC23-Website/registration' element = {<Registration />} />
			</Routes>
			<Routes>
				<Route path='/ICMC23-Website/pasteditions' element = {<PastEditions />} />
			</Routes>
			<Routes>
				<Route path='/ICMC23-Website/publications' element = {<Publications />} />
			</Routes>
			<Routes>
				<Route path='/ICMC23-Website/contact' element = {<Contact />} />
			</Routes>
		</Router>
    </div>
  );
}

export default App;
