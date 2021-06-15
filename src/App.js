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

function App() {
	 return (
			 <>
					<Navi/>
					<div className="wrapper">
						 <Route path='/details'>
								<img
										alt="..."
										className="path path3"
										style={{width: '50rem', left: '-150px' }}
										src={require("./assets/img/path5.png").default}
								/>
								<PageHeader/>
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
									 <Footer/>
								</div>
						 </Route>
						 <Route exact path='/'>
								<img
										alt="..."
										className="path path3"
										style={{width: '75rem', left: '-150px'}}
										src={require("./assets/img/path5.png").default}
								/>
								<PageHeader/>
								<div className="main">
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
									 <Footer/>
								</div>
						 </Route>
					</div>
			 </>
	 );
}

export default App;
