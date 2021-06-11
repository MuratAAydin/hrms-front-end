import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, Col, ListGroup, ListGroupItem, Row, TabPane} from "reactstrap";
import JobAdvertService from "../services/jobAdvertService";

export default function JobAdvertCards() {
	 const [jobAdverts, setJobAdverts] = useState([]);

	 useEffect(() => {
			let jobAdvertService = new JobAdvertService();
			jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data))
	 }, [])
	 return (
			 <>
					<TabPane tabId="link4">
						 <Row>
								{jobAdverts.map((jobAdvert)=>
									 <Col md="4">
											<Card className="card-coin card-plain py-2 ">
												 <CardBody>
														<Row>
															 <Col className="text-center" md="12">
																	<h4 className="text-uppercase">{jobAdvert.jobPositionPosition}</h4>
																	<span>{jobAdvert.employerCompanyName}</span>
																	<hr className="line-danger"/>
															 </Col>
														</Row>
														<Row>
															 <ListGroup>
																	<ListGroupItem>{jobAdvert.maxSalary + ' - ' + jobAdvert.minSalary }</ListGroupItem>
																	<ListGroupItem>{jobAdvert.openPositionNumber}</ListGroupItem>
																	<ListGroupItem>{jobAdvert.closedDate}</ListGroupItem>
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
								)}
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