import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, Col, ListGroup, ListGroupItem, Row, TabPane} from "reactstrap";
import EmployeeService from "../services/employeeService";
import {Link, Route} from "react-router-dom";

export default function EmployeeCards() {
	 const [employee, setEmployees] = useState([]);

	 useEffect(() => {
			let employeeService = new EmployeeService();
			employeeService.getEmployees().then(result => setEmployees(result.data.data))
	 }, [])
	 return (
			 <>
					<TabPane tabId="linkEmployee">
						 <Row>
								{employee.map((employee) =>
										<Col md="4">
											 <Card className="card-coin card-plain">
													<CardBody>
														 <Row>
																<Col className="text-center" md="12">
																	 <h4 className="text-uppercase mt-2">{employee.name + ' ' + employee.surname}</h4>
																	 <span>{employee.resume?.description}</span>
																	 <hr className="line-success"/>
																</Col>
														 </Row>
														 <Row>
																<ListGroup>
																	 <ListGroupItem>{employee.name + ' ' + employee.surname}</ListGroupItem>
																	 <ListGroupItem>{employee.tech?.title}</ListGroupItem>
																	 <ListGroupItem>
																			<Link className='btn-link btn-success'
																						to={`${employee.curriculumVitaes?.github}`}>
																				 Github
																			</Link>
																	 </ListGroupItem>
																	 <ListGroupItem>
																			<Link className='btn-link btn-info' to={`${employee.curriculumVitaes?.LinkedIn}`}>
																				 LinkedIn
																			</Link>
																	 </ListGroupItem>
																</ListGroup>
														 </Row>
													</CardBody>
													<CardFooter className="text-center">
														 <Link to={`/details/${employee.id}`}>

																<Button className="btn-simple" color="primary">
																	 view profile
																</Button>
														 </Link>
													</CardFooter>
											 </Card>
										</Col>
								)}
						 </Row>
						 <Route exact path='/'>
								<div className='text-center'>
									 <Link to={`/details/employees`}>
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