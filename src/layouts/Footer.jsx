import React from 'react';

function Footer(props) {
	 return (
			 <div>
					<footer className="footer">
						 <div className="container">
								<div className="row">
									 <div className="col-md-3">
											<h1 className="title">HRMS</h1>
									 </div>
									 <div className="col-md-3">
											<ul className="nav">
												 <li className="nav-item">
														<a href="#" className="nav-link">
															 Home
														</a>
												 </li>
												 <li className="nav-item">
														<a href="#" className="nav-link">
															 Landing
														</a>
												 </li>
												 <li className="nav-item">
														<a href="#" className="nav-link">
															 Register
														</a>
												 </li>
												 <li className="nav-item">
														<a href="#" className="nav-link">
															 Profile
														</a>
												 </li>
											</ul>
									 </div>
									 <div className="col-md-3">
											<ul className="nav">
												 <li className="nav-item">
														<a href="https://creative-tim.com/contact-us" className="nav-link">
															 Contact Us
														</a>
												 </li>
												 <li className="nav-item">
														<a href="https://creative-tim.com/about-us" className="nav-link">
															 About Us
														</a>
												 </li>
												 <li className="nav-item">
														<a href="https://creative-tim.com/blog" className="nav-link">
															 Blog
														</a>
												 </li>
												 <li className="nav-item">
														<a href="https://opensource.org/licenses/MIT" className="nav-link">
															 License
														</a>
												 </li>
											</ul>
									 </div>
									 <div className="col-md-3">
											<h3 className="title">Follow us:</h3>
											<div className="btn-wrapper profile">
												 <a target="_blank" href="https://twitter.com/creativetim"
														className="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip"
														data-original-title="Follow us">
														<i className="fab fa-twitter"/>
												 </a>
												 <a target="_blank" href="https://www.facebook.com/creativetim"
														className="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip"
														data-original-title="Like us">
														<i className="fab fa-facebook-square"/>
												 </a>
												 <a target="_blank" href="https://dribbble.com/creativetim"
														className="btn btn-icon btn-neutral  btn-round btn-simple" data-toggle="tooltip"
														data-original-title="Follow us">
														<i className="fab fa-dribbble"/>
												 </a>
											</div>
									 </div>
								</div>
						 </div>
					</footer>
			 </div>
	 );
}

export default Footer;