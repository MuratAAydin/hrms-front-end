import './assets/css/App.css';
import 'reactstrap'
import 'jquery'
import Navi from "./layouts/Navi.jsx";
import Footer from "./layouts/Footer.jsx";
import Dashboard from './layouts/Dashboard'
import {Container} from "reactstrap";
import React from "react";
import PageHeader from "./layouts/PageHeader";
import {Route} from "react-router-dom";
import JobAdvertisementForm from "./pages/JobAdvertisementForm";

function App() {
	 return (
			 <>
					<Navi/>

					<PageHeader/>
					<div className="wrapper">
						 <Route exact path='/'>
								<img
										alt="..."
										className="path path3"
										style={{width: '75rem', left: '-150px'}}
										src={require("./assets/img/path5.png").default}
								/>
								<div className="main">
									 <div className='section section-typo'>
											<Container>
												 <img
														 alt="..."
														 className="path path3"
														 src={require("./assets/img/path2.png").default}
												 />
												 <Dashboard/>
												 <JobAdvertisementForm/>
											</Container>
									 </div>
								</div>
						 </Route>
						 <Route path='/details'>
								<div className="main" style={{marginTop: -1000}}>
									 <div className='section section-typo'>
											<Container>
												 <img
														 alt="..."
														 className="path path3"
														 src={require("./assets/img/path2.png").default}
												 />
												 <Dashboard/>
											</Container>
									 </div>
								</div>
						 </Route>
						 <Route exact path='/addJobAdvert'>
								<div className="main" style={{marginTop: -900 }}>
									 <div className='section section-typo'>
											<Container>
												 <img
													alt="..."
													className="path path2"
													src={require("./assets/img/path3.png").default}
											/>
												 <JobAdvertisementForm/>
											</Container>
									 </div>
								</div>
						 </Route>
						 <Footer/>
					</div>
			 </>
	 );
}

export default App;
