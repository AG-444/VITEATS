import React from "react";
import list from "../../Constanst.js";
import { Link } from "react-router-dom";
import "./List.css";
const List = () => {
  return (
    <div>
      {list.map((l) => (
        <div key={l.id} className="item">
          <img src={l.image} alt="" />
          <div>
            <h2>{l.name}</h2>
            <p>{l.description}</p>
            <Link to={`/${l.id}`}>
              <button>Visit</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
