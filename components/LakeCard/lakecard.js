import React from "react";
import "./lakecard.css";

const LakeCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          Name:{props.name}
        </li>
        <li>
        Occupation: {props.park}
        </li>
        <li>
         Location:{props.location}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeLake(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default LakeCard;