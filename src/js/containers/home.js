import React from "react";
import Search from "../components/search";
import BooksList from "../components/booksList";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            data: []
        };
        this.handleSearchText = this.handleSearchText.bind(this);
        this.searchData = this.searchData.bind(this);
        this.clearData = this.clearData.bind(this);
    }
    handleSearchText(event) {
        var value = event.target.value;
        this.setState({
            searchText: value
        });
    }
    clearData(){
        this.setState({
            searchText: ""
        });
    }
    searchData() {
        // window.location.href = window.location.hostname+window.location.port+'search/q='+ this.state.searchText;        
       window.location.href = "/search/"+ this.state.searchText;
    }
    componentDidMount() {
        var main = this;
        fetch("http://localhost:3000/booksData").then(function(response){
            return response.json();
        }).then(function(data){
            var currentURL = window.location.href;
            if(currentURL.indexOf("search") > 0) {
                let splitURL = currentURL.split("/");
                let searchString = splitURL[splitURL.length-1].toUpperCase();
                let dataToRender = [];
                let lengthOfItems = data.items.length;
                for(let i = 0; i < lengthOfItems ; i++) {                    
                    let name = data.items[i]["name"].toUpperCase();                    
                    if(name.indexOf(searchString)>=0) {
                        dataToRender.push(data.items[i]);
                    }
                }
                main.setState({
                    data: dataToRender
                });
            }
            else {
                main.setState({
                    data: data.items
                });
            }
        })
        .catch(function(err){
            console.log("An Error Occured:", err);
        });
    }
    render() {
        return (            
            <div className="home">
                <h1>BOOK STORE</h1>
                <Search searchText={this.state.searchText} handleSearchText={this.handleSearchText} searchData={this.searchData} clearData={this.clearData}/>
                <BooksList searchText={this.state.searchText} items={this.state.data}/>
            </div>
        );
    }
}
export default Home;