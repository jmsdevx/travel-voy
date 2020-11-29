import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../../ducks/actions';

function MobileNav({
  isAuth,
  logout,
}) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md" className="d-md-none">

        <Link className="navbar-brand" to="/">Travel Voy</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/quiz">Quiz</Link>
            {isAuth ?
              (<>
                <Link className="nav-link" to="/profile">Profile</Link>
                <Link className="nav-link" onClick={logout}>Logout</Link>
              </>)
              :
              <Link className="nav-link" to="/login">Login</Link>
            }

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, actions)(MobileNav);