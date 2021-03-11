document.querySelector("#klik").addEventListener("click", tampil)

function tampil(params) {
    let url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
    // .then(function (params) {
    //     return params.json();
    // })
    .then(res => res.json())

    .then(data => {
        //console.log(data);
        let out = "<ul>";
        data.forEach(element => {
            out += `<li>${element.title}</li>`
            console.log(element.title);
        });
        out += "</ul>";
        document.querySelector('#isi').innerHTML = out;
    })
}