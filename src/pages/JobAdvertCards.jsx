import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, Col, ListGroup, ListGroupItem, Row, TabPane} from "reactstrap";
import JobAdvertService from "../services/jobAdvertService";
import {Link, Route} from "react-router-dom";

export default function JobAdvertCards() {
	 const [jobAdverts, setJobAdverts] = useState([]);

	 useEffect(() => {
			let jobAdvertService = new JobAdvertService();
			jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data))
	 }, [])
	 return (
			 <>
					<TabPane tabId="linkJobAdverts">
						 <Row>
								{jobAdverts.map((jobAdvert) =>
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
																	 <ListGroupItem>{`${jobAdvert.minSalary}$ - ${jobAdvert.maxSalary}$`}</ListGroupItem>
																	 <ListGroupItem>{`${jobAdvert.closedDate}`}</ListGroupItem>
																	 <span className='px-1'>{jobAdvert.description}</span>
																</ListGroup>
														 </Row>
													</CardBody>
													<CardFooter className="text-center">
														 <Link to={`/details/jobadverts/${jobAdvert.id}`}>
																<Button className="btn-simple" color="success">
																	 View
																</Button>
														 </Link>
													</CardFooter>
											 </Card>
										</Col>
								)}
						 </Row>
						 <Route exact path='/'>
								<div className='text-center'>
									 <Link to={`/details/jobadverts`}>

											<Button className="btn-round" color="primary" type="button">
												 view all employee
											</Button>
									 </Link>
								</div>
						 </Route>
					</TabPane>
			 </>
	 )
}