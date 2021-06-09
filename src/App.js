import './assets/css/App.css';
import 'reactstrap'
import 'jquery'
import Navi from "./layouts/Navi.jsx";
import Footer from "./layouts/Footer.jsx";
import Dashboard from './layouts/Dashboard'
import {Col, Container, Row} from "reactstrap";
import React from "react";
import PageHeader from "./layouts/PageHeader";
import SideBar from "./layouts/SideBar";

function App() {
	 return (
			 <>
					<Navi/>
					<div className="wrapper">
						 <img
								 alt="..."
								 className="path path3"
								 style={{width: '75rem', left: '0'}}
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
											<Row>
												 <Col md="3">
														<SideBar/>
												 </Col>
												 <Col md='9'>
														<Dashboard/>
												 </Col>
											</Row>
									 </Container>
								</div>
								<Footer/>
						 </div>
					</div>
			 </>
	 );
}

export default App;
