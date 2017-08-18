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
        this.state = {
            data: []
        };        
        this.handleSearchTerm = this.handleSearchTerm.bind(this);
        this.searchData = this.searchData.bind(this);
        this.clearSearchTerm = this.clearSearchTerm.bind(this);
    }
    // handleSearchText(event) {
    //     var value = event.target.value;
    //     this.setState({
    //         searchText: value
    //     });
    // }
    handleSearchTerm(event){
        this.props.handleSearchTerm(event.target.value);
    }
    clearSearchTerm(){
        this.props.handleSearchTerm("");
    }
    searchData(){
        var length = this.props.booksData.length;
        var dataToRender = [];
        var searchString = this.props.search.searchTerm.toUpperCase();
        for( let i = 0; i < length; i++ ) {
            let name = this.props.booksData[i]["name"].toUpperCase();
            if( name.indexOf(searchString)>=0 ) {
                dataToRender.push(this.props.booksData[i]);
            }
        }
        this.setState({
            data: dataToRender
        });
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
    componentWillReceiveProps(nextProps) {
        if(this.props.booksData!==nextProps.booksData) {
            var length = nextProps.booksData.length;
            var dataToRender = [];
            var searchString = nextProps.search.searchTerm.toUpperCase();
            for( let i = 0; i < length; i++ ) {
                let name = nextProps.booksData[i]["name"].toUpperCase();
                if( name.indexOf( searchString ) >= 0 ) {
                    dataToRender.push(nextProps.booksData[i]);
                }
            }
            this.setState({
                data: dataToRender
            });
        }
    }
    render() {
        console.log(this.props);
        return (
            <div className="home">
                <h1>BOOK STORE</h1>
                <Search searchText={this.props.search.searchText} handleSearchText={this.handleSearchTerm} 
                searchData={this.searchData} clearSearchTerm={this.clearSearchTerm}/>
                <BooksList searchText={this.props.search.searchText} items={this.state.data}/>
            </div>
        );
    }
}
const mapStateToProps = ({state}) => {
    return {
        search: state.search,
        booksData: state.booksData
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchTerm: (searchValue) => {
            dispatch(actions.handleSearchTerm(searchValue));
        },
        fetchBooksData: () => {
            dispatch(actions.fetchBooksData());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);