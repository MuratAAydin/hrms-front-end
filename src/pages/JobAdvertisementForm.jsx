import React from "react";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Row, UncontrolledTooltip} from "reactstrap";

export default function JobAdvertisementForm() {
	 return <>
			<Card className="card-plain">
				 <CardHeader>
						<h1 className="profile-title text-left">İş ilanında bulun</h1>
				 </CardHeader>
				 <CardBody>
						<Form>
							 <Row>
									<Col md="6">
										 <FormGroup>
												<label>Your Name</label>
												<Input defaultValue="Mike" type="text"/>
										 </FormGroup>
									</Col>
									<Col md="6">
										 <FormGroup>
												<label>Email address</label>
												<Input placeholder="mike@email.com" type="email"/>
										 </FormGroup>
									</Col>
							 </Row>
							 <Row>
									<Col md="6">
										 <FormGroup>
												<label>Phone</label>
												<Input defaultValue="001-12321345" type="text"/>
										 </FormGroup>
									</Col>
									<Col md="6">
										 <FormGroup>
												<label>Company</label>
												<Input defaultValue="CreativeTim" type="text"/>
										 </FormGroup>
									</Col>
							 </Row>
							 <Row>
									<Col md="12">
										 <FormGroup>
												<label>Message</label>
												<Input placeholder="Hello there!" type="text"/>
										 </FormGroup>
									</Col>
							 </Row>
							 <Button
									 className="btn-round float-right"
									 color="primary"
									 data-placement="right"
									 id="tooltip341148792"
									 type="button"
							 >
									Send text
							 </Button>
							 <UncontrolledTooltip
									 delay={0}
									 placement="right"
									 target="tooltip341148792"
							 >
									Can't wait for your message
							 </UncontrolledTooltip>
						</Form>
				 </CardBody>
			</Card>
	 </>
}