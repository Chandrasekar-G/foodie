import React, { Component } from "react";
import "../styles/restaurantListPageStyles.css";
import HeaderBar from "../components/HeaderBar";

export class RestaurantListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="restaurant-list-container">
        <HeaderBar />
      </div>
    );
  }
}

export default RestaurantListPage;
