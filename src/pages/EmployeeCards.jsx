import React from "react";
import {Button, Card, CardBody, CardFooter, Col, ListGroup, ListGroupItem, Row, TabPane} from "reactstrap";

export default function EmployeeCards() {
	 return (
			 <>
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
						 </Row>
						 <div className='text-center'>
								<Button className="btn-round" color="primary" type="button">
									 view all employee
								</Button>
						 </div>
					</TabPane>
			 </>
	 )
}