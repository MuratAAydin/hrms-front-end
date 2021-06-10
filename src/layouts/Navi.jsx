import React from 'react'
import "reactstrap";
import {
	 Button, Col,
	 Collapse,
	 Container, DropdownItem, DropdownMenu,
	 DropdownToggle,
	 Nav,
	 Navbar,
	 NavbarBrand,
	 NavItem,
	 Row, UncontrolledDropdown,
	 UncontrolledTooltip
} from "reactstrap";

export default function MenuExampleBasic() {
	 const [collapseOpen, setCollapseOpen] = React.useState(false);
	 const [collapseOut, setCollapseOut] = React.useState("");
	 const [color, setColor] = React.useState("navbar-transparent");
	 React.useEffect(() => {
			window.addEventListener("scroll", changeColor);
			return function cleanup() {
				 window.removeEventListener("scroll", changeColor);
			};
	 }, []);
	 const changeColor = () => {
			if (
					document.documentElement.scrollTop > 99 ||
					document.body.scrollTop > 99
			) {
				 setColor("bg-info");
			} else if (
					document.documentElement.scrollTop < 100 ||
					document.body.scrollTop < 100
			) {
				 setColor("navbar-transparent");
			}
	 };
	 const toggleCollapse = () => {
			document.documentElement.classList.toggle("nav-open");
			setCollapseOpen(!collapseOpen);
	 };
	 const onCollapseExiting = () => {
			setCollapseOut("collapsing-out");
	 };
	 const onCollapseExited = () => {
			setCollapseOut("");
	 };
	 const scrollToDownload = () => {
			document
					.getElementById("download-section")
					.scrollIntoView({behavior: "smooth"});
	 };
	 return (
			 <Navbar className={"fixed-top text-white " + color } color-on-scroll="100" expand="lg">
					<Container>
						 <div className="navbar-translate">
								<NavbarBrand to="/" id="navbar-brand" >
									 <span className='btn-link btn-danger'>H</span>uman
									 <span className='btn-link btn-danger'> R</span>esource
									 <span className='btn-link btn-danger'> M</span>anagement
									 <span className='btn-link btn-danger'> S</span>ystem
								</NavbarBrand>
								<UncontrolledTooltip placement="bottom" target="navbar-brand">
									 Designed Creative Tim
								</UncontrolledTooltip>
								<button
										aria-expanded={collapseOpen}
										className="navbar-toggler navbar-toggler"
										onClick={toggleCollapse}
								>
									 <span className="navbar-toggler-bar bar1" />
									 <span className="navbar-toggler-bar bar2" />
									 <span className="navbar-toggler-bar bar3" />
								</button>
						 </div>
						 <Collapse
								 className={"justify-content-end " + collapseOut }
								 navbar
								 isOpen={collapseOpen}
								 onExiting={onCollapseExiting}
								 onExited={onCollapseExited}
						 >
								<div className={"navbar-collapse-header "}>
									 <Row>
											<Col className="collapse-brand" xs="6">
												 <a href="#pablo" className='text-success' onClick={(e) => e.preventDefault()}>
														<span className='btn-link btn-danger'>H</span>uman
														<span className='btn-link btn-danger'> R</span>esource
														<span className='btn-link btn-danger'> M</span>anagement
														<span className='btn-link btn-danger'> S</span>ystem
												 </a>
											</Col>
											<Col className="collapse-close text-right" xs="6">
												 <button
														 aria-expanded={collapseOpen}
														 className="navbar-toggler"
														 onClick={toggleCollapse}
												 >
														<i className="tim-icons icon-simple-remove" />x
												 </button>
											</Col>
									 </Row>
								</div>
								<Nav navbar>
									 <UncontrolledDropdown nav>
											<DropdownToggle
													caret
													color="default"
													data-toggle="dropdown"
													href="#pablo"
													nav
													onClick={(e) => e.preventDefault()}
											>
												 <i className="fa fa-cogs d-lg-none d-xl-none" />
												 Language
											</DropdownToggle>
											<DropdownMenu className="dropdown-with-icons">
												 <DropdownItem to="/register-page">
														English
												 </DropdownItem>
												 <DropdownItem to="/landing-page">
														Türkçe
												 </DropdownItem>
											</DropdownMenu>
									 </UncontrolledDropdown>
									 <NavItem>
											<Button
													className="nav-link px-2 pr-3"
													color="primary"
													target="_blank"
													href="#"
											>
												 <i className="tim-icons icon-spaceship" /> Sign Up
											</Button>
											<Button
													className="nav-link d-lg-none d-xl-none pr-3 ml-1"
													color="default"
													onClick={scrollToDownload}
											>
												 <i className="tim-icons icon-cloud-download-93" /> Sign In
											</Button>
									 </NavItem>
									 <NavItem>
											<Button
													className="nav-link d-none d-lg-block"
													color="default"
													style={{paddingRight: '10px'}}
													onClick={scrollToDownload}
											>
												 <i className="tim-icons icon-cloud-download-93" /> Sign In
											</Button>
									 </NavItem>
								</Nav>
						 </Collapse>
					</Container>
			 </Navbar>
	 )
}
