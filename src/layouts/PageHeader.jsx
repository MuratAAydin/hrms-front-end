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
import {Container} from "reactstrap";

// core components

export default function PageHeader() {
	 const [squares1to6, setSquares1to6] = React.useState("");
	 const [squares7and8, setSquares7and8] = React.useState("");
	 React.useEffect(() => {
			document.body.classList.toggle("register-page");
			document.documentElement.addEventListener("mousemove", followCursor);
			// Specify how to clean up after this effect:
			return function cleanup() {
				 document.body.classList.toggle("register-page");
				 document.documentElement.removeEventListener("mousemove", followCursor);
			};
	 }, []);
	 const followCursor = (event) => {
			let posX = event.clientX - window.innerWidth / 2;
			let posY = event.clientY - window.innerWidth / 6;
			setSquares1to6(
					"perspective(500px) rotateY(" +
					posX * 0.05 +
					"deg) rotateX(" +
					posY * -0.05 +
					"deg)"
			);
			setSquares7and8(
					"perspective(500px) rotateY(" +
					posX * 0.02 +
					"deg) rotateX(" +
					posY * -0.02 +
					"deg)"
			);
	 };
	 return (
			 <>
					<div className="wrapper">
						 <div className="page-header">
								<div className="page-header-image"/>
								<div className="content">
									 <Container>
											<div
													className="square square-7"
													id="square7"
													style={{transform: squares7and8}}
											/>
											<div
													className="square square-8"
													id="square8"
													style={{transform: squares7and8}}
											/>
											<div className="content-center brand">
												 <h1 className="h1-seo " style={{fontWeight: 600, textTransform: 'capitalize', fontSize: '5rem'}}>HRMS</h1>
											</div>
											<div className="register-bg"/>
											<div
													className="square square-1"
													id="square1"
													style={{transform: squares1to6}}
											/>
											<div
													className="square square-2"
													id="square2"
													style={{transform: squares1to6}}
											/>
											<div
													className="square square-3"
													id="square3"
													style={{transform: squares1to6}}
											/>
											<div
													className="square square-4"
													id="square4"
													style={{transform: squares1to6}}
											/>
											<div
													className="square square-5"
													id="square5"
													style={{transform: squares1to6}}
											/>
											<div
													className="square square-6"
													id="square6"
													style={{transform: squares1to6}}
											/>
									 </Container>
								</div>
						 </div>
					</div>
			 </>
	 );
}
