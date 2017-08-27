import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Search = (props) => {    
    return (
        <div className="search">
            <form>
                <input type="text" placeholder="Search"  value={props.searchText} onChange={props.handleSearchText} />
                <input type="button" value="Clear" onClick={props.clearSearchTerm}/>
                <Link to={`/search/${props.searchText}`}><input type="button" value="Search" onClick={props.handleSearchClick}/></Link>
            </form>
        </div>

    );
};
Search.PropTypes = {
	searchText: PropTypes.string
};
export default Search;