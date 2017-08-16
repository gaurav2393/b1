import React from "react";
const EditBookDetail = (props) => {
    return (
        <div className="edit-data">
            <div>
                <h3>Edit Book Data</h3>
                <form>
                    <span className="close" onClick={props.closePopUp}>&#10006;</span>
                    <label htmlFor="id">ID Read Only</label>
                    <input id="id" type="number" value={props.itemData.id} readOnly/>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={props.itemData.name} onChange={props.handleDataChange.bind(this, [{name:"name"}])} />
                    <label htmlFor="description">Description</label>
                    <input id="description" type="text" value={props.itemData.description} onChange={props.handleDataChange.bind(this, [{name:"description"}])} />                    
                    <input type="button" onClick={props.saveData} value="Save" />
                    <input type="button" onClick={props.clearData} value="Reset" />
                </form>
            </div>
        </div>
    );
};
export default EditBookDetail;