import React from 'react';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Speakers from './pages/speakers';
import PastEditions from './pages/pasteditions';
import Registration from './pages/registration';
import Publications from './pages/publications';
import Contact from './pages/contact';
import ErrorPage from './pages/errorpage';
import { Routes, Route } from "react-router-dom";
import MyNavBar from './layouts/navbar';

function App() {
  return (
    <div className="App">
		<MyNavBar />
		<Routes>
			<Route exact path='/ICMC23-Website/' element = {<Home />} />
			<Route exact path='/ICMC23-Website/about' element = {<About />} />
			<Route exact path='/ICMC23-Website/speakers' element = {<Speakers />} />
			<Route exact path='/ICMC23-Website/registration' element = {<Registration />} />	
			<Route exact path='/ICMC23-Website/pasteditions' element = {<PastEditions />} />
			<Route exact path='/ICMC23-Website/publications' element = {<Publications />} />
			<Route exact path='/ICMC23-Website/contact' element = {<Contact />} />
			<Route exact path='*' element = {<ErrorPage />} />
		</Routes>
    </div>
  );
}

export default App;
