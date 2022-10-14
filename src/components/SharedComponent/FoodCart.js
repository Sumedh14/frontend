import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Table } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { baseUrl } from '../shared/baseUrl';
//import CartNotifier from '../';
import { removeFoodFromCart } from '../redux/actionCreators';
import OrderComponent from '../OrderComponent';

const mapStateToProps = state => ({
  orders: state.orders
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  removeFoodFromCart,
}, dispatch)

class FoodCart extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }

  componentDidMount() {

  }

  removeFoodItem = (foodId) => {
    this.props.removeFoodFromCart(foodId);
  }

  render() {
    const {
      orders: {
        foodList = [],
      } = {},
    } = this.props;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="row col-8">
              <Breadcrumb >
                <BreadcrumbItem><Link to="/menu">Dashboard</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/veg">Veg</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/non-veg">Non-Veg</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/beverages">Beverages</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/breakfast">Breakfast</Link></BreadcrumbItem>
              </Breadcrumb>
            </div>

            <div className="col-2 offset-md-2 center">
              <Breadcrumb >
                <BreadcrumbItem><Link to="/food-cart">Food Cart</Link></BreadcrumbItem>
                {/* <CartNotifier /> */}
              </Breadcrumb>
            </div>
          </div>
          {
            foodList.length !== 0 ? (
              <>
                <div className="row col-md-8 mx-auto">
                  <Table>
                    <thead>
                      <tr>
                        <th>Snapshot</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        foodList.map(obj => (
                          <tr>
                            <th scope="row"><img src={baseUrl + obj.image} width="120px" /></th>
                            <td>{obj.name}</td>
                            <td>{obj.price}</td>
                            <td><Button value="Remove" color="warning" onClick={() => this.removeFoodItem(obj.id)}>Remove</Button></td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </Table>
                </div>

                <div className="row">
                  <hr className="horizontal-line" />
                </div>
                <div className="row">
                  <OrderComponent />
                </div>
                <div className="row">
                  <hr className="horizontal-line" />
                </div>
              </>
            ) : (
              <>
                <div className="col-md-8 mx-auto">
                  <h4 className="no-items">No Items in Food Cart, Please have a look in food category sections</h4>
                </div>
              </>
            )
          }
        </div>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodCart);