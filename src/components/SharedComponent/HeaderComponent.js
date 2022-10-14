// @ts-nocheck
import React, { PureComponent } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Button,
  Label,
  Form,
  Input,
} from "reactstrap";
import { NavLink, Redirect } from "react-router-dom";
import Login from "../LoginForm/Login";
import Signup from "../RegisterForm/register";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setLoginStatus } from "../redux/actionCreators";

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setLoginStatus,
    },
    dispatch
  );

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isLoginModalOpen: false,
      isSignUpModalOpen: false,
      isLogout: false,
    };
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };

  toggleLoginModal = () => {
    this.setState({
      isLoginModalOpen: !this.state.isLoginModalOpen,
    });
  };

  toggleSignUpModal = () => {
    this.setState({
      isSignUpModalOpen: !this.state.isSignUpModalOpen,
    });
  };

  logout = () => {
    this.setState({
      isLogout: true,
    });
    this.props.setLoginStatus(false);
  };

  navigateToOrdersView = () => {
    this.setState({
      isRedirectToOrdersView: true,
    });
  };

  render() {
    const { userInfo: { isUserLoggedIn } = {} } = this.props;
    const { isLogout = false, isRedirectToOrdersView = false } = this.state;
    return (
      <>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />

            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/forks.png"
                height="40"
                width="40"
                alt="Food Court"
              />
            </NavbarBrand>

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>

                {isUserLoggedIn && (
                  <NavItem>
                    <NavLink className="nav-link" to="/menu">
                      <span className="fa fa-list fa-lg"></span> Dashboard
                    </NavLink>
                  </NavItem>
                )}

                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
              </Nav>

              {!isUserLoggedIn && (
                <>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Button color="success" onClick={this.toggleLoginModal}>
                        <span className="fa fa-sign-in fa-lg"></span>Login
                      </Button>
                    </NavItem>
                  </Nav>

                  <Nav className="ml-2" navbar>
                    <NavItem>
                      <Button color="warning" onClick={this.toggleSignUpModal}>
                        <span className="fa fa-user-plus fa-lg"></span>Sign Up
                      </Button>
                    </NavItem>
                  </Nav>
                </>
              )}
              {isUserLoggedIn && (
                <>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Button
                        color="success"
                        onClick={this.navigateToOrdersView}
                      >
                        <span className="fa fa-shopping-bag fa-md"></span> My
                        Orders
                      </Button>
                    </NavItem>
                  </Nav>

                  <Nav className="ml-3" navbar>
                    <NavItem>
                      <Button color="warning" onClick={this.logout}>
                        <span className="fa fa-sign-in fa-lg"></span>Logout
                      </Button>
                    </NavItem>
                  </Nav>
                </>
              )}
              {isLogout && <Redirect to="/home" />}
              {isRedirectToOrdersView && <Redirect to="/orders-view" />}
            </Collapse>
          </div>
        </Navbar>

        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Indian Food Court</h1>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Login
          isLoginModalOpen={this.state.isLoginModalOpen}
          toggleLoginModal={this.toggleLoginModal}
          fetchRegisterdUsers={this.props.fetchRegisterdUsers}
        />

        <Signup
          isSignUpModalOpen={this.state.isSignUpModalOpen}
          toggleSignUpModal={this.toggleSignUpModal}
        />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
