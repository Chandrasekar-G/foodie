import React, { Component } from "react";
import "../styles/ordersPageStyles.css";
import HeaderBar from "../components/HeaderBar";
import { RestaurantService } from "../services/RestaurantService";
import OrdersView from "../components/OrdersView";

class OrdersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        restaurant: {}
    };
  }

  componentDidMount() {
    this.fetchRestaurantDetails(this.props.id);
  }

  /**
   * Fetch the restaurant details from RestaurantService and updates the component state.
   * Sets the state to display loading indicator during data fetch from service.
   */
  async fetchRestaurantDetails(id) {
    this.setState({ isLoading: true });
    let restaurantDetails = await RestaurantService.getRestaurantDetail(id);
    if (restaurantDetails) {
      this.setState({
        isLoading: false,
        restaurant: restaurantDetails,
        error: null
      });
    } else {
      this.setState({
        isLoading: false,
        restaurant: null,
        error: "Restaurant detail not found!"
      });
    }
  }

  handleAddToCart = item => {
    console.log(item);
  };

  render() {
    return (
      <div className="main-container order-page">
        <HeaderBar />
        <div className="order">
          <OrdersView
            restaurant={this.state.restaurant}
            onAddToCart={this.handleAddToCart}
          />
        </div>
      </div>
    );
  }
}
export default OrdersPage;
