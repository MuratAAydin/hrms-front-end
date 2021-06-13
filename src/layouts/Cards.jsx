import React from "react";
import {
	 CardBody,
	 Col,
	 Container,
	 Row,
	 TabContent
} from "reactstrap";

export default function Cards() {
	 return (
			 <>
					<div className="section section-tabs">
						 <Container>
								<Row>
									 <Col className="ml-auto mr-auto" md="12" xl="12">
											<Cards>
												 <CardBody>
														<TabContent className="tab-space" activeTab={"link"}>
														</TabContent>
												 </CardBody>
											</Cards>
									 </Col>
								</Row>
						 </Container>
					</div>
			 </>
	 )
}