import React from "react";

const Search = (props) => {    
    return (
        <div className="search">
            <form>
                <input type="text" placeholder="Search"  value={props.searchText} onChange={props.handleSearchText} />
                <input type="button" value="Clear" onClick={props.clearData}/>
                <input type="button" value="Search" onClick={props.searchData}/>            
            </form>
        </div>

    );
};
export default Search;