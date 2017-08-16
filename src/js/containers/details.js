import React from "react";
import ShowBookDetail from "../components/showBookDetail.js";
import EditBookDetail from "../components/editBookDetail";

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

    postData() {

        var payload = Object.assign({}, this.state.tempData);
        var id = this.state.tempData.id;
        var data = new FormData();
        fetch(`http://localhost:3000/booksData/${id}`, {
            method: "put",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        }).then(function (response) {
            return response.json();
        }).then(function (data) {

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
        this.postData();
    }

    componentDidMount() {
        var main = this;
        fetch("http://localhost:3000/booksData").then(function (response) {
            return response.json();
        }).then(function (data) {
            var currentURL = window.location.href;
            let splitURL = currentURL.split("/");
            let searchString = splitURL[splitURL.length - 1];
            let lengthOfItems = data.items.length;
            for (let i = 0; i < lengthOfItems; i++) {
                let id = data.items[i]["id"];
                if (searchString === id) {
                    main.setState({
                        itemData: data.items[i],
                        tempData: data.items[i]
                    });
                    break;
                }
            }
        });
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

export default Details;