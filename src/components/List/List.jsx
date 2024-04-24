import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./List.css";
import Star from "../Star/Star.jsx";

const List = () => {
  // Sample list of restaurants
  const list = [
    {
      id: 1,
      name: "Nipun Restaurant",
      description: "A delightful culinary experience.",
      image: "nipun.jpg",
      veg: false,
      price: "mid-range",
      distance: 3,
      rating: 3 
    },
    {
      id: 2,
      name: "Anagha's Cafe",
      description: "Cozy atmosphere and delicious food.",
      image: "anagha.jpg",
      veg: true,
      price: "cheap",
      distance: 1,
      rating: 4
    }
  ];

  const [filters, setFilters] = useState({
    veg: false,
    price: "",
    distance: "",
    rating: ""
  });
  const [sortBy, setSortBy] = useState("relevance");

  // Filtering logic
  const applyFilters = (restaurant) => {
    if (filters.veg && !restaurant.veg) return false;

    if (filters.price !== "" && filters.price !== restaurant.price) return false;

    if (
      filters.distance !== "" &&
      (filters.distance === "2km" && restaurant.distance > 2) ||
      (filters.distance === "2to5km" && (restaurant.distance <= 2 || restaurant.distance > 5)) ||
      (filters.distance === "5+km" && restaurant.distance <= 5)
    )
      return false;

    if (filters.rating !== "" && restaurant.rating < 4) return false;

    return true;
  };

  // Sorting logic
  const applySorting = (a, b) => {
    switch (sortBy) {
      case "relevance":
        return 0;
      case "ratingHighToLow":
        return b.rating - a.rating;
      case "distance":
        return a.distance - b.distance; // Sort by distance (ascending order)
      case "priceLowToHigh":
        return getPriceValue(a.price) - getPriceValue(b.price); // Sort by price (low to high)
      case "priceHighToLow":
        return getPriceValue(b.price) - getPriceValue(a.price); // Sort by price (high to low)
      default:
        return 0;
    }
  };

  // Helper function to get numerical value for price
  const getPriceValue = (price) => {
    switch (price) {
      case "cheap":
        return 1;
      case "mid-range":
        return 2;
      case "expensive":
        return 3;
      default:
        return 0;
    }
  };

  // Apply filtering and sorting to the list
  const filteredAndSortedRestaurants = list
    .filter(applyFilters)
    .sort(applySorting);

  return (
    <div>
      {/* Filter Section */}
      <div className="filters">
        <h3>Filters:</h3>
        <label>
          <input
            type="checkbox"
            checked={filters.veg}
            onChange={(e) => setFilters({ ...filters, veg: e.target.checked })}
          />
          Vegetarian Only
        </label>
        <select
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        >
          <option value="">Price</option>
          <option value="cheap">Cheap</option>
          <option value="mid-range">Mid-range</option>
          <option value="expensive">Expensive</option>
        </select>
        <select
          value={filters.distance}
          onChange={(e) => setFilters({ ...filters, distance: e.target.value })}
        >
          <option value="">Distance</option>
          <option value="2km">Within 2 km</option>
          <option value="2to5km">2 to 5 km</option>
          <option value="5+km">5+ km</option>
        </select>
        <select
          value={filters.rating}
          onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
        >
          <option value="">Rating</option>
          <option value="4">4 stars or more</option>
        </select>
      </div>

      {/* Sort Section */}
      <div className="sort">
        <h3>Sort By:</h3>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="ratingHighToLow">Rating (High to Low)</option>
          <option value="distance">Distance</option>
          <option value="priceLowToHigh">Price (Low to High)</option>
          <option value="priceHighToLow">Price (High to Low)</option>
        </select>
      </div>

      {/* Restaurant List */}
      <div>
        {filteredAndSortedRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="item">
            <img src={restaurant.image} alt={restaurant.name} />
            <div>
              <h2>{restaurant.name}</h2>
              <p>{restaurant.description}</p>
              <Star id={restaurant.id} />
              <Link to={`/${restaurant.id}`}>
                <button>Visit</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
