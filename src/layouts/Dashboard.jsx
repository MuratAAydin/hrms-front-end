import React from "react";
import classnames from "classnames";
import JobAdvertCards from "../pages/JobAdvertCards";
import EmployeeCards from "../pages/EmployeeCards";
import {
	 TabContent,
	 Container,
	 Row,
	 Col,
	 Card,
	 CardHeader,
	 CardBody,
	 Nav,
	 NavItem,
	 NavLink, Input, Navbar, Collapse
} from "reactstrap";

export default function DataListExample() {
	 const [textTabs, setTextTabs] = React.useState('JobAdverts');
	 return (
			 <div className="section section-tabs">
					<Container>
						 <div className="title">
								<h3 className="mb-3">{textTabs}</h3>
						 </div>
						 <Row>
								<Col className="ml-auto mr-auto" md="12" xl="12">
									 <div className="mb-3">
											<small className="text-uppercase font-weight-bold">
												 Example {textTabs}
											</small>
									 </div>
									 <Card>
											<CardHeader>
												 <Navbar className="navbar-transparent nav-tabs-info" expand="lg">
														<Nav className="nav-tabs-info" role="tablist" tabs>
																	<NavItem>
																		 <NavLink
																				 className={classnames({
																						active: textTabs === 'JobAdverts',
																				 })}
																				 onClick={(e) => setTextTabs('JobAdverts')}
																				 href="#"
																		 >
																				Job Adverts
																		 </NavLink>
																	</NavItem>
																	<NavItem>
																		 <NavLink
																				 className={classnames({
																						active: textTabs === 'Employee',
																				 })}
																				 onClick={(e) => setTextTabs('Employee')}
																				 href="#"
																		 >
																				Employees
																		 </NavLink>
																	</NavItem>
														</Nav>
														<Collapse navbar isOpen={false}>
															 <div className="ml-auto">
																	<NavLink href="#" onClick={(e) => e.preventDefault()}>
																		 <Input defaultValue="" style={{width: 250}} placeholder="Search..." type="text"/>
																	</NavLink>
															 </div>
														</Collapse>
												 </Navbar>
											</CardHeader>
											<CardBody>
												 <TabContent className="tab-space m" activeTab={"link" + textTabs}>
														<JobAdvertCards/>
														<EmployeeCards/>
												 </TabContent>
											</CardBody>
									 </Card>
								</Col>
						 </Row>
					</Container>
			 </div>
	 );
}
