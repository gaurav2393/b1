import config from "./utils.js";

export function search(searchValue, searchIn) {
    if(searchIn.indexOf(searchValue)>=0) {
        return true;
    } else {
        return false;
    }
}
export function fetchBookData() {
    return new Promise(function (resolve, reject) {
        fetch(`${config.base}${config.booksData}`)
            .then(response => response.json())
            .then(data => {
                let items = data.items;
                resolve(items);
            })
            .catch(error => {
                reject(error);
            });

    });
}
export function storeBookData(action) {
    return new Promise(function (resolve, reject) {
        var payload = Object.assign({}, action.bookData);
        var id = action.bookData.id;
        var data = new FormData();
        fetch(`${config.base}${config.booksData}/${id}`, {
            method: "put",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        }).then( (response) => {
            return response.json();
        }).then( (data) => {

        });

    });
}