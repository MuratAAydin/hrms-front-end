import React, {Component} from 'react'
import "reactstrap";

export default class MenuExampleBasic extends Component {
	 render() {
			return (
					<nav className="navbar navbar-expand-lg fixed-top navbar-transparent " color-on-scroll="100">
						 <div className="container">
								<div className="navbar-translate">
									 <a className="navbar-brand " href="#"
											rel="tooltip" title="Human Resource Management System" data-placement="bottom">
											<span className='btn-link btn-danger'>H</span>uman
											<span className='btn-link btn-danger'> R</span>esource
											<span className='btn-link btn-danger'> M</span>anagement
											<span className='btn-link btn-danger'> S</span>ystem
									 </a>
									 <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse"
													 data-target="#navigation" aria-controls="navigation-index" aria-expanded="false"
													 aria-label="Toggle navigation">
											<span className="navbar-toggler-bar bar1"/>
											<span className="navbar-toggler-bar bar2"/>
											<span className="navbar-toggler-bar bar3"/>
									 </button>
								</div>
								<div className="collapse navbar-collapse justify-content-end" id="navigation">
									 <div className="navbar-collapse-header">
											<div className="row">
												 <div className="col-6 collapse-brand">
														<a>HRMS</a>
												 </div>
												 <div className="col-6 collapse-close text-right">
														<button type="button" className="navbar-toggler" data-toggle="collapse"
																		data-target="#navigation" aria-controls="navigation-index" aria-expanded="false"
																		aria-label="Toggle navigation">
															 <i className="tim-icons icon-simple-remove"/>
														</button>
												 </div>
											</div>
									 </div>
									 <ul className="navbar-nav">
											<li className="nav-item p-0">
												 <a className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom"
														href="https://twitter.com/" target="_blank">
														<i className="fab fa-twitter"/>
														<p className="d-lg-none d-xl-none">Twitter</p>
												 </a>
											</li>
											<li className="nav-item p-0">
												 <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom"
														href="https://www.facebook.com/" target="_blank">
														<i className="fab fa-facebook-square"/>
														<p className="d-lg-none d-xl-none">Facebook</p>
												 </a>
											</li>
											<li className="nav-item p-0">
												 <a className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom"
														href="https://www.instagram.com/" target="_blank">
														<i className="fab fa-instagram"/>
														<p className="d-lg-none d-xl-none">Instagram</p>
												 </a>
											</li>
											<li className="dropdown nav-item">
												 <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
														<i className="fa fa-cogs d-lg-none d-xl-none"/> Getting started
												 </a>
												 <div className="dropdown-menu dropdown-with-icons">
														<a href="https://demos.creative-tim.com/blk-design-system/docs/1.0/getting-started/overview.html"
															 className="dropdown-item">
															 <i className="tim-icons icon-paper"/> Documentation
														</a>
														<a href="#" className="dropdown-item">
															 <i className="tim-icons icon-bullet-list-67"/>Register Page
														</a>
														<a href="#" className="dropdown-item">
															 <i className="tim-icons icon-image-02"/>Landing Page
														</a>
														<a href="#" className="dropdown-item">
															 <i className="tim-icons icon-single-02"/>Profile Page
														</a>
												 </div>
											</li>
											<li className="nav-item">
												 <a className="nav-link btn btn-default d-none d-lg-block" href="javascript:void(0)"
														onClick="scrollToDownload()">
														<i className="tim-icons icon-cloud-download-93"/> Download
												 </a>
											</li>
											<li className="nav-item">
												 <a className="nav-link btn btn-default d-none d-lg-block" href="javascript:void(0)"
														onClick="scrollToDownload()">
														<i className="tim-icons icon-cloud-download-93"/> Download
												 </a>
											</li>
									 </ul>
								</div>
						 </div>
					</nav>
			)
	 }
}
