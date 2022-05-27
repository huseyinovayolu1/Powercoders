fetch("https://jsonplaceholder.typicode.com/photos")
.then (response => {
    return response.json()
})
.then (data => mapping(data))

const main = document.getElementById("main")
function mapping(data){
    main.innerHTML = data.map(data =>{
        return(
            `
            <h1>${data.id}</h1>
            <h2>${data.albumId}</h2>
            <p>${data.title}</p>
            <img src=${data.url} alt="">
            `
        )
    })
}