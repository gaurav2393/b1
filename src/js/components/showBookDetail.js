import React from "react";
import PropTypes from "prop-types";

const ShowBookDetail = (props) => {
    return (
            <div className="show-data">
                <h1>Book Detail</h1>
                <div>
                    <img src={props.itemData.img} alt="boook"/>
                </div>
                <div className="data">
                    <h3>ID: {props.itemData.id}</h3>
                    <h3>Name: {props.itemData.name}</h3>
                    <h3>Description: {props.itemData.description}</h3>
                    <input type="button" onClick={props.handleBookEdit} value="Edit"/>
                </div>                
            </div>
    );
};

ShowBookDetail.PropTypes = {
    itemData: PropTypes.object
};
export default ShowBookDetail;