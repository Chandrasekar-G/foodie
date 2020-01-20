import React, { Component } from "react";
import "../styles/ordersPageStyles.css";
import HeaderBar from "../components/HeaderBar";

class OrdersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HeaderBar />
        <div>Order page works along with the common header!</div>
      </div>
    );
  }
}
export default OrdersPage;
