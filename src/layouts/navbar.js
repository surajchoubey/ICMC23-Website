import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function MyNavbar() {
  return (
    <div>
		<Navbar fixed="top" bg="primary" variant="dark">
			<Container>
				<Navbar.Brand href="/"> ICMC Conference 2023 </Navbar.Brand>
					<Nav className="justify-content-end">
					<Nav.Item> 
						<Nav.Link href = "/"> Home </Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href = "/about"> About </Nav.Link>
					</Nav.Item> 
					<Nav.Item>
						<Nav.Link href = "/speakers"> Speakers </Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href = "/registration"> Registration </Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href = "/pasteditions"> Past Editions </Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href = "/publications"> Publications </Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href = "/contact"> Contact Us </Nav.Link>
					</Nav.Item>
				</Nav>
			</Container>
		</Navbar>	
    </div>
  );
}

export default MyNavbar;