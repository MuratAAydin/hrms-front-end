import React, {useEffect, useState} from "react";
import {
	 Button,
	 Card,
	 CardBody,
	 CardHeader,
	 Col, Dropdown,
	 Form,
	 FormGroup,
	 Input, Label,
	 Row,

} from "reactstrap";
import CityService from "../services/cityService";
import {useFormik} from "formik";
import JobAdvertService from "../services/jobAdvertService";
import WorkTypeService from "../services/workTypeService";
import {useHistory} from "react-router-dom";

export default function JobAdvertisementForm() {

	 let jobAdService = new JobAdvertService();
	 const JobAdvertAdd = ({
			lastDate: 'req',
			description: 'req',
			jobPositionId: 'req',
			workPlaceId: 'req',
			openPositions: 'req',
			cityId: 'req',
			minSalary: 'req',
			maxSalary: 'req'
	 });

	 const history = useHistory();

	 const formik = useFormik({
			initialValues: {
				 description: "",
				 jobPositionId: "",
				 workTypeId: "",
				 openPositions: "",
				 cityId: "",
				 minSalary: "",
				 maxSalary: "",
				 lastDate: "",
			},
			validationSchema: JobAdvertAdd,
			onSubmit: (values) => {
				 values.employerId = 4;
				 jobAdService.add(values).then((result) => console.log(result.data.data));
				 document.writeln("İş ilanı eklendi personelin onayı ardından listelenecektir");
				 history.push("/jobAdverts");
			},
	 });

	 const [workType, setWorkType] = useState([]);
	 const [cities, setCities] = useState([]);

	 useEffect(() => {
			let workTypeService = new WorkTypeService();
			let cityService = new CityService();

			workTypeService.getWorkTypes().then((result) => setWorkType(result.data.data));
			cityService.getCities().then((result) => setCities(result.data.data));
	 }, []);

	 const cityOption = cities.map((city, index) => ({
			key: index,
			text: city.name,
			value: city.id,
	 }));

	 const handleChangeSemantic = (value, fieldName) => {
			formik.setFieldValue(fieldName, value);
	 }
	 return <>
			<Card className="card-plain">
				 <CardHeader>
						<h1 className="profile-title text-left">İş ilanında bulun</h1>
				 </CardHeader>
				 <CardBody>
						<Form>
							 <Row>
									<Col md="3">
										 <FormGroup>
												<label>First Name</label>
												<Input placeholder="First Name" type="text"/>
										 </FormGroup>
									</Col>
									<Col md="3">
										 <FormGroup>
												<label>Last Name</label>
												<Input placeholder="Last Name" type="text"/>
										 </FormGroup>
									</Col>
									<Col md="6">
										 <FormGroup>
												<label>Email address</label>
												<Input placeholder="asd" type="email"/>
										 </FormGroup>
									</Col>
							 </Row>
							 <Row>
									<Col md="3">
										 <FormGroup>
												<label>Job position</label>
												<Input onChange={formik.handleChange} placeholder='Job position' type="text"/>
										 </FormGroup>
									</Col>
									<Col md="3">
										 <FormGroup>
												<label>Available position</label>
												<Input onChange={formik.handleChange} placeholder='Available position' type="text"/>
										 </FormGroup>
									</Col>
									<Col md="6">
										 <FormGroup>
												<label>City</label>
												<Dropdown

														search
														selection
														id="cityId"
														placeholder="City"
														options={cityOption}
														value={formik.values.cityId}
														onChange={(event, data) =>
																handleChangeSemantic(data.value, "cityId")
														}
												/>
										 </FormGroup>
									</Col>
							 </Row>
							 <Row>
									<Col md="3">
										 <FormGroup>
												<label>Max Salary</label>
												<Input placeholder="Max salary" type="text"/>
										 </FormGroup>
									</Col>
									<Col md="3">
										 <FormGroup>
												<label>Min salary</label>
												<Input placeholder="Min salary" type="text"/>
										 </FormGroup>
									</Col>
									<Col md="3">
										 <FormGroup>
												<label>Start date</label>
												<Input type="date"/>
										 </FormGroup>
									</Col>
									<Col md="3">
										 <FormGroup>
												<label>End Date</label>
												<Input type="date"/>
										 </FormGroup>
									</Col>
							 </Row>
							 <Row>
									<Col md='9'>
										 <label>Description</label>
										 <Input placeholder='Description' type='text'/>
									</Col>
							 </Row>
							 <Button
									 className="btn-round float-right"
									 color="success"
									 data-placement="right"
									 id="tooltip341148792"
									 type="button"
							 >
									Send job advert
							 </Button>
							 <FormGroup check>
									<Label check>
										 <Input type="checkbox"/>
										 <span className="form-check-sign"/>
										 Work type
									</Label>
							 </FormGroup>
						</Form>
				 </CardBody>
			</Card>
	 </>
}