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