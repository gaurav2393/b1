export function fetchBookData() {
    return new Promise(function (resolve, reject) {
        fetch("http://localhost:3000/booksData")
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

    });
}