export function fetchBookData() {
    var data=fetch("http://localhost:3000/booksData").then(function(response){
        return response.json();
    }).then(function(data){
        // var currentURL = window.location.href;
        // if(currentURL.indexOf("search") > 0) {
        //     let splitURL = currentURL.split("/");
        //     let searchString = splitURL[splitURL.length-1].toUpperCase();
        //     let dataToRender = [];
        //     let lengthOfItems = data.items.length;
        //     for(let i = 0; i < lengthOfItems ; i++) {                    
        //         let name = data.items[i]["name"].toUpperCase();                    
        //         if(name.indexOf(searchString)>=0) {
        //             dataToRender.push(data.items[i]);
        //         }
        //     }
        //     main.setState({
        //         data: dataToRender
        //     });
        // }
        // else {
        //     main.setState({
        //         data: data.items
        //     });
        // }
        console.log("common",data);
        return data;
    })
    .catch(function(err){
        console.log("An Error Occured:", err);
    });
    return data;
}