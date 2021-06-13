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
						 <Route exact path='/'>
								<img
										alt="..."
										className="path path3"
										style={{width: '75rem', left: '0'}}
										src={require("./assets/img/path5.png").default}
								/>
								<PageHeader/>
						 </Route>
						 <div className="main">
								<div className='section section-typo'>
									 <Container>
											<img
													alt="..."
													className="path path3"
													src={require("./assets/img/path2.png").default}
											/>
											<Route path='/' component={Dashboard}/>
									 </Container>
								</div>
								<Footer/>
						 </div>
					</div>
			 </>
	 );
}

export default App;
