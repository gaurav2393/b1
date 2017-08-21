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
        this.handleBookEdit = this.handleBookEdit.bind(this);
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
    handleBookEdit() {
        this.setState({
            editBookData: true
        });
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
    postData(dataToStore) {
        // var copyOfData = Object.assign({}, dataToStore);
        this.props.storeBookData(dataToStore);
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
        this.postData(this.state.tempData);
    }

    componentWillMount() {
        var length = this.props.booksData.length;
        var searchString = this.props.match.params.id;        
        for (let i = 0; i < length; i++) {
            let id = this.props.booksData[i]["id"];
            if (searchString === id) {
                this.setState({
                    itemData: this.props.booksData[i],
                    tempData: this.props.booksData[i]
                });
                break;
            }
        }
    }
    render() {
        return (
            <div className="details">
                {!this.state.editBookData? <ShowBookDetail itemData={this.state.itemData} handleBookEdit={this.handleBookEdit} />:""}
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