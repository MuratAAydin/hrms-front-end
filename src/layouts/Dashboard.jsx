import React from 'react';
import path from '../assets/img/path1.png';
import 'reactstrap'

function Dashboard() {
	 return (
			 <div>
					<div className="main">
						 <div className="section section-basic" id="basic-elements">
								<img src={path} className="path" alt='alt'/>
									 <div className="container">
											<h2 className="title">Basic Elements</h2>
											<h3>Buttons</h3>
											<p className="category">Pick your style</p>
											<div className="row">
												 <div className="col-md-10">
														<button className="btn btn-primary" type="button">Default</button>
														<button className="btn btn-primary btn-round" type="button">Round</button>
														<button className="btn btn-primary btn-round" type="button">
															 <i className="tim-icons icon-heart-2"/> With Icon
														</button>
														<button className="btn btn-primary btn-icon btn-round" type="button">
															 <i className="tim-icons icon-heart-2"/>
														</button>
														<button className="btn btn-primary btn-simple btn-round" type="button">Simple</button>
												 </div>
											</div>
											<p className="category">Pick your size</p>
											<div className="row">
												 <div className="col-md-10">
														<button className="btn btn-primary btn-sm">Small</button>
														<button className="btn btn-primary">Regular</button>
														<button className="btn btn-primary btn-lg">Large</button>
												 </div>
											</div>
											<p className="category">Pick your color</p>
											<div className="row">
												 <div className="col-md-12">
														<button className="btn">Default</button>
														<button className="btn btn-primary">Primary</button>
														<button className="btn btn-info">Info</button>
														<button className="btn btn-success">Success</button>
														<button className="btn btn-warning">Warning</button>
														<button className="btn btn-danger">Danger</button>
														<button className="btn btn-neutral">Neutral</button>
												 </div>
											</div>
											<br/>
											<h3>Links</h3>
											<div className="row">
												 <div className="col-md-8">
														<button className="btn btn-link">Default</button>
														<button className="btn btn-link btn-primary">Primary</button>
														<button className="btn btn-link btn-info">Info</button>
														<button className="btn btn-link btn-success">Success</button>
														<button className="btn btn-link btn-warning">Warning</button>
														<button className="btn btn-link btn-danger">Danger</button>
												 </div>
											</div>
											<div className="space-70"/>
									 </div>
						 </div>
					</div>
			 </div>
);
}

export default Dashboard;