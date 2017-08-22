import React from "react";
import ShowBookDetail from "../components/showBookDetail.js";
import EditBookDetail from "../components/editBookDetail";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

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
        this.postData = this.postData.bind(this);
        this.closePopUp = this.closePopUp.bind(this);        
    }
    filterData(){
        // var length = this.props.booksData.length;
        // var searchString = this.props.match.params.id;        
        // for (let i = 0; i < length; i++) {
        //     let id = this.props.booksData[i]["id"];
        //     if (searchString === id) {
        //         this.setState({
        //             itemData: this.props.booksData[i],
        //             tempData: this.props.booksData[i]
        //         });
        //         break;
        //     }
        // }
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
    // postData() {

        // var payload = Object.assign({}, this.state.tempData);
        // var id = this.state.tempData.id;
        // var data = new FormData();
        // fetch(`http://localhost:3000/booksData/${id}`, {
        //     method: "put",
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(payload)
        // }).then(function (response) {
        //     return response.json();
        // }).then(function (data) {

        // });
    // }
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
        //this.postData();
        this.props.storeBookData(this.state.tempData);
    }

    componentWillMount() {
        var booksData = this.props.booksData;
        var length = booksData.length;
        var searchString = this.props.match.params.id;        
        for (let i = 0; i < length; i++) {
            let id = booksData[i]["id"];
            if (searchString === id) {
                this.setState({
                    itemData: booksData[i],
                    tempData: booksData[i]
                });
                break;
            }
        }
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
const mapStateToProps = ({state}) => {
    return {
        booksData: state.booksData
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        storeBookData: (data) => {
            dispatch(actions.storeBookData(data));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);