import React, { PureComponent } from 'react'
import { Breadcrumb, BreadcrumbItem, Button, Table } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { setSelectedFood, addFoodToCart, removeFoodFromCart } from '../redux/actionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { placeOrder } from '../../sharedMethods/placeOrder';
//import CartNotifier from '../SharedComponents/CartNotifier';

const mapStateToProps = state => ({
  orders: state.orders,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setSelectedFood,
  addFoodToCart,
  removeFoodFromCart,
}, dispatch)

class VegComponent extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isOpenOrderBox: false,
      isAdded: false,
    }

  }

  addToList = (foodProduct) => {
    this.props.addFoodToCart(foodProduct)
  }

  removeFromList = (foodId) => {
    this.props.removeFoodFromCart(foodId);
  }

  checkAddedOrNot = (name) => {
    const {
      orders: {
        foodList = [],
      } = {},
    } = this.props;
    const flag = foodList.filter(obj => obj.name === name)
    if (flag.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const {
      vegItems = [],
    } = this.props;

    const {
      isOpenOrderBox = false,
    } = this.state;
    return (
      <>
        <div className="container">
          <div className="row mb-3">
            <div className="row col-8">
              <Breadcrumb >
                <BreadcrumbItem><Link to="/menu">Dashboard</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/veg">Veg</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/non-veg">Non-Veg</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/beverages">Beverages</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/breakfast">Breakfast</Link></BreadcrumbItem>
                <BreadcrumbItem active>Veg</BreadcrumbItem>
              </Breadcrumb>
            </div>

            <div className="col-2 offset-md-2">
              <Breadcrumb >
                <BreadcrumbItem><Link to="/food-cart">Food Cart</Link></BreadcrumbItem>
                {/* <CartNotifier /> */}
              </Breadcrumb>
            </div>
          </div>

          {
            isOpenOrderBox && (
              <Redirect to={{ pathname: '/order' }} />
            )
          }

          <div className="row">
            <Table>
              <thead>
                <tr>
                  <th>Snapshot</th>
                  <th>Tasty Food</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Add to List</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {
                  vegItems.map(obj => (
                    <tr>
                      <th scope="row"><img src={baseUrl + obj.image} width="120px" /></th>
                      <td>{obj.name}</td>
                      <td>{obj.price}</td>
                      <td>{obj.description}</td>
                      <td>
                        <Button
                          value="Order Now"
                          color="success"
                          onClick={() => this.addToList(obj)}
                          disabled={this.checkAddedOrNot(obj.name)}
                        >
                          Add to List
                        </Button>
                      </td>

                      <td>
                        <Button
                          value="Order Now"
                          color="warning"
                          onClick={() => this.removeFromList(obj.id)}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
        </div>
      </>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(VegComponent);