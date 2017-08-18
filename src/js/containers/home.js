import React from "react";
import Search from "../components/search";
import BooksList from "../components/booksList";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

class Home extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     searchText: "",
        //     data: []
        // };
        this.handleSearchText = this.handleSearchText.bind(this);
        this.searchData = this.searchData.bind(this);
        this.clearSearchTerm = this.clearSearchTerm.bind(this);
    }
    // handleSearchText(event) {
    //     var value = event.target.value;
    //     this.setState({
    //         searchText: value
    //     });
    // }
    handleSearchText(event){
        this.props.handleSearchTerm(event.target.value);
    }
    clearSearchTerm(){
        this.props.clearSearchTerm();
    }
    searchData(){
        
    }
    // clearData(){
    //     this.setState({
    //         searchText: ""
    //     });
    // }
    //searchData() {
    //    window.location.href = "/search/"+ this.state.searchText;
    //    this.props.searchData();
    //}
    componentDidMount() {
        console.log(this.props);
        this.props.fetchBooksData();
        // var main = this;
        // fetch("http://localhost:3000/booksData").then(function(response){
        //     return response.json();
        // }).then(function(data){
        //     var currentURL = window.location.href;
        //     if(currentURL.indexOf("search") > 0) {
        //         let splitURL = currentURL.split("/");
        //         let searchString = splitURL[splitURL.length-1].toUpperCase();
        //         let dataToRender = [];
        //         let lengthOfItems = data.items.length;
        //         for(let i = 0; i < lengthOfItems ; i++) {                    
        //             let name = data.items[i]["name"].toUpperCase();                    
        //             if(name.indexOf(searchString)>=0) {
        //                 dataToRender.push(data.items[i]);
        //             }
        //         }
        //         main.setState({
        //             data: dataToRender
        //         });
        //     }
        //     else {
        //         main.setState({
        //             data: data.items
        //         });
        //     }
        // })
        // .catch(function(err){
        //     console.log("An Error Occured:", err);
        // });
    }
    render() {        
        return (            
            <div className="home">
                <h1>BOOK STORE</h1>
                <Search searchText={this.props.search.searchText} handleSearchText={this.props.handleSearchTerm} 
                searchData={this.props.searchData} clearData={this.props.clearData}/>
                <BooksList searchText={this.props.search.searchText} items={this.props.booksData}/>
            </div>
        );
    }
}
const mapStateToProps = ({state}) => {
    let homeProps={};
    homeProps.search=state.search;
    homeProps.booksData;
    return homeProps;
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchTerm: (searchValue) => {
            dispatch(actions.handleSearchTerm(searchValue));
        },
        clearSearchTerm: () => {
            dispatch(actions.clearSearchTerm());
        },
        fetchBooksData: () => {
            dispatch(actions.fetchBooksData("sd"));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);