import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function SideBar() {
	 return (
			 <div className="section section-typo">
					<Container>
						 <h3 className="title">Typography</h3>
						 <div id="typography">
								<Row>
									 <Col md="12">
											<div className="typography-line">
												 <h1>
														<span>Header 1</span>
														The Life of BLK• Design System React
												 </h1>
											</div>
									 </Col>
								</Row>
						 </div>
						 <div className="space-50" />
					</Container>
			 </div>
	 );
}
