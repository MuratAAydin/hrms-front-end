import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, Col, ListGroup, ListGroupItem, Row, TabPane} from "reactstrap";
import EmployeeService from "../services/employeeService";

export default function EmployeeCards() {
	 const [employee, setEmployees] = useState([]);

	 useEffect(() => {
			let employeeService = new EmployeeService();
			employeeService.getEmployees().then(result => setEmployees(result.data.data))
	 }, [])
	 return (
			 <>
					<TabPane tabId="link5">
						 <Row>
								{employee.map((employee) =>
										<Col md="4">
											 <Card className="card-coin card-plain">
													<CardBody>
														 <Row>
																<Col className="text-center" md="12">
																	 <h4 className="text-uppercase">{employee.name + ' ' + employee.surname}</h4>
																	 <span>{employee.resume?.description}</span>
																	 <hr className="line-success"/>
																</Col>
														 </Row>
														 <Row>
																<ListGroup>
																	 <ListGroupItem>{employee.name + ' ' + employee.surname}</ListGroupItem>
																	 <ListGroupItem>{employee.tech?.title}</ListGroupItem>
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