import React from "react";
import ShowBookDetail from "../components/showBookDetail.js";
import EditBookDetail from "../components/editBookDetail";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import PropTypes from "prop-types";

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemData: {},
            editBookData: false,
            tempData: {}
        };
        this.openPopUp = this.openPopUp.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.saveData = this.saveData.bind(this);
        this.clearData = this.clearData.bind(this);
        this.closePopUp = this.closePopUp.bind(this);        
    }

    handleDataChange(args, event) {
        var value = event.target.value;
        var name = args[0]["name"];
        var newObj = {};
        newObj[name] = value;
        var newItemData = Object.assign({}, this.state.tempData, newObj);
        this.setState({
            tempData: newItemData
        });
    }

    clearData() {
        this.setState({
            tempData: this.state.itemData
        });
    }
    openPopUp() {
        this.setState({
            editBookData: true
        });
    }
    closePopUp() {
        this.setState({
            editBookData: false
        });
    }
    saveData() {
        this.setState({
            itemData: this.state.tempData,
            editBookData: false
        });
        this.props.storeBookData(this.state.tempData);
    }

    componentDidMount() {
        this.props.fetchBooksData();
        var booksData = this.props.booksData;
        var length = booksData.length;
        var searchString = this.props.match.params.id;
        booksData.map((data)=>{
            let id = data["id"];
            if(searchString===id) {
                this.setState({
                    itemData: data,
                    tempData: data
                });
            }
        });
        // for (let i = 0; i < length; i++) {
        //     let id = booksData[i]["id"];
        //     if (searchString === id) {
        //         this.setState({
        //             itemData: booksData[i],
        //             tempData: booksData[i]
        //         });
        //         break;
        //     }
        // }
    }
    render() {
        return (
            <div className="details">
                {!this.state.editBookData? <ShowBookDetail itemData={this.state.itemData} handleBookEdit={this.openPopUp} />:""}
                {this.state.editBookData? <EditBookDetail itemData={this.state.tempData} handleDataChange={this.handleDataChange} 
                    saveData={this.saveData} closePopUp={this.closePopUp} clearData={this.clearData}/>: ""}
            </div>
        );
    }
}
Details.PropTypes = {
    booksData: PropTypes.array
};
export default Details;