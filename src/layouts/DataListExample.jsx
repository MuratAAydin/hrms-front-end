/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";

import {
	 TabContent,
	 TabPane,
	 Container,
	 Row,
	 Col,
	 Card,
	 CardHeader,
	 CardBody,
	 Nav,
	 NavItem,
	 NavLink, ListGroup, ListGroupItem, CardFooter, Button
} from "reactstrap";

export default function DataListExample() {
	 const [textTabs, setTextTabs] = React.useState(4);
	 return (
			 <div className="section section-tabs">
					<Container>
						 <div className="title">
								<h3 className="mb-3">Job adverts</h3>
						 </div>
						 <Row>
								<Col className="ml-auto mr-auto" md="12" xl="12">
									 <div className="mb-3">
											<small className="text-uppercase font-weight-bold">
												 Example job adverts
											</small>
									 </div>
									 <Card>
											<CardHeader>
												 <Nav className="nav-tabs-info" role="tablist" tabs>
														<NavItem>
															 <NavLink
																	 className={classnames({
																			active: textTabs === 4,
																	 })}
																	 onClick={(e) => setTextTabs(4)}
																	 href="#pablo"
															 >
																	Job Adverts
															 </NavLink>
														</NavItem
														><NavItem>
														<NavLink
																className={classnames({
																	 active: textTabs === 5,
																})}
																onClick={(e) => setTextTabs(5)}
																href="#pablo"
														>
															 Employees
														</NavLink>
												 </NavItem>

												 </Nav>
											</CardHeader>
											<CardBody>
												 <TabContent className="tab-space" activeTab={"link" + textTabs}>
														<TabPane tabId="link4">
															 <Row>
																	<Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example job advert</h4>
																								 <span>company name</span>
																								 <hr className="line-danger"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>3000$ - 3500$</ListGroupItem>
																								 <ListGroupItem>Location</ListGroupItem>
																								 <ListGroupItem>Job Title</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="success">
																							View
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col><Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example job advert</h4>
																								 <span>company name</span>
																								 <hr className="line-danger"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>3000$ - 3500$</ListGroupItem>
																								 <ListGroupItem>Location</ListGroupItem>
																								 <ListGroupItem>Job Title</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="success">
																							View
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col><Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example job advert</h4>
																								 <span>company name</span>
																								 <hr className="line-danger"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>3000$ - 3500$</ListGroupItem>
																								 <ListGroupItem>Location</ListGroupItem>
																								 <ListGroupItem>Job Title</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="success">
																							View
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col><Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example job advert</h4>
																								 <span>company name</span>
																								 <hr className="line-danger"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>3000$ - 3500$</ListGroupItem>
																								 <ListGroupItem>Location</ListGroupItem>
																								 <ListGroupItem>Job Title</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="success">
																							View
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col><Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example job advert</h4>
																								 <span>company name</span>
																								 <hr className="line-danger"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>3000$ - 3500$</ListGroupItem>
																								 <ListGroupItem>Location</ListGroupItem>
																								 <ListGroupItem>Job Title</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="success">
																							View
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col><Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example job advert</h4>
																								 <span>company name</span>
																								 <hr className="line-danger"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>3000$ - 3500$</ListGroupItem>
																								 <ListGroupItem>Location</ListGroupItem>
																								 <ListGroupItem>Job Title</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="success">
																							View
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col><Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example job advert</h4>
																								 <span>company name</span>
																								 <hr className="line-danger"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>3000$ - 3500$</ListGroupItem>
																								 <ListGroupItem>Location</ListGroupItem>
																								 <ListGroupItem>Job Title</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="success">
																							View
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col><Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example job advert</h4>
																								 <span>company name</span>
																								 <hr className="line-danger"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>3000$ - 3500$</ListGroupItem>
																								 <ListGroupItem>Location</ListGroupItem>
																								 <ListGroupItem>Job Title</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="success">
																							View
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col><Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example job advert</h4>
																								 <span>company name</span>
																								 <hr className="line-danger"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>3000$ - 3500$</ListGroupItem>
																								 <ListGroupItem>Location</ListGroupItem>
																								 <ListGroupItem>Job Title</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="success">
																							View
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col>
															 </Row>
															 <div className='text-center'>
																	<Button className="btn-round" color="primary" type="button">
																		 view all employee
																	</Button>
															 </div>
														</TabPane>
														<TabPane tabId="link5">
															 <Row>
																	<Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example employee</h4>
																								 <span>Employee about me</span>
																								 <hr className="line-success"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>Github</ListGroupItem>
																								 <ListGroupItem>LinkedIn</ListGroupItem>
																								 <ListGroupItem>24/7 Support</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="primary">
																							view profile
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col>
																	<Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example employee</h4>
																								 <span>Employee about me</span>
																								 <hr className="line-success"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>Github</ListGroupItem>
																								 <ListGroupItem>LinkedIn</ListGroupItem>
																								 <ListGroupItem>24/7 Support</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="primary">
																							view profile
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col>
																	<Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example employee</h4>
																								 <span>Employee about me</span>
																								 <hr className="line-success"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>Github</ListGroupItem>
																								 <ListGroupItem>LinkedIn</ListGroupItem>
																								 <ListGroupItem>24/7 Support</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="primary">
																							view profile
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col>
																	<Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example employee</h4>
																								 <span>Employee about me</span>
																								 <hr className="line-success"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>Github</ListGroupItem>
																								 <ListGroupItem>LinkedIn</ListGroupItem>
																								 <ListGroupItem>24/7 Support</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="primary">
																							view profile
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col>
																	<Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example employee</h4>
																								 <span>Employee about me</span>
																								 <hr className="line-success"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>Github</ListGroupItem>
																								 <ListGroupItem>LinkedIn</ListGroupItem>
																								 <ListGroupItem>24/7 Support</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="primary">
																							view profile
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col>
																	<Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example employee</h4>
																								 <span>Employee about me</span>
																								 <hr className="line-success"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>Github</ListGroupItem>
																								 <ListGroupItem>LinkedIn</ListGroupItem>
																								 <ListGroupItem>24/7 Support</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="primary">
																							view profile
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col>
																	<Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example employee</h4>
																								 <span>Employee about me</span>
																								 <hr className="line-success"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>Github</ListGroupItem>
																								 <ListGroupItem>LinkedIn</ListGroupItem>
																								 <ListGroupItem>24/7 Support</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="primary">
																							view profile
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col>
																	<Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example employee</h4>
																								 <span>Employee about me</span>
																								 <hr className="line-success"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>Github</ListGroupItem>
																								 <ListGroupItem>LinkedIn</ListGroupItem>
																								 <ListGroupItem>24/7 Support</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="primary">
																							view profile
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col>
																	<Col md="4">
																		 <Card className="card-coin card-plain">
																				<CardBody>
																					 <Row>
																							<Col className="text-center" md="12">
																								 <h4 className="text-uppercase">Example employee</h4>
																								 <span>Employee about me</span>
																								 <hr className="line-success"/>
																							</Col>
																					 </Row>
																					 <Row>
																							<ListGroup>
																								 <ListGroupItem>Github</ListGroupItem>
																								 <ListGroupItem>LinkedIn</ListGroupItem>
																								 <ListGroupItem>24/7 Support</ListGroupItem>
																							</ListGroup>
																					 </Row>
																				</CardBody>
																				<CardFooter className="text-center">
																					 <Button className="btn-simple" color="primary">
																							view profile
																					 </Button>
																				</CardFooter>
																		 </Card>
																	</Col>
															 </Row>
															 <div className='text-center'>
																	<Button className="btn-round" color="primary" type="button">
																		 view all employee
																	</Button>
															 </div>
														</TabPane>
												 </TabContent>
											</CardBody>
									 </Card>
								</Col>
						 </Row>
					</Container>
			 </div>
	 );
}
