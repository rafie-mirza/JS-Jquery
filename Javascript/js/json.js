document.querySelector("#klik").addEventListener("click",tampil);

function tampil(params) {
    let url = 'js/tblmenu.json';
    fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data){
        let output = "<h1>Data Menu</h1> <table>";
        data.forEach(element => {
            output += `<tr>
                <td>${element.menu}</td>
                <td>${element.harga}</td>
                <td>${element.warna[0]}</td>
            </tr>`
        });
        output += "</table>";
        document.querySelector("#isi").innerHTML = output;
    })

    
}


// let tblmenu =[

//     {

//         "idmenu"        : 1,
//         "idkategori"    : 1,
//         "menu"          :"Apel Merah",
//         "harga"         :3000,
//         "warna"         : ["merah","kuning","hijau"],
//         "stok"          :true,
//         "keteragan"     :null
//     },
//     {

//         "idmenu"        : 2,
//         "idkategori"    : 2,
//         "menu"          :"Apel kuning",
//         "harga"         :3000,
//         "warna"         : ["merah","kuning","hijau"],
//         "stok"          :true,
//         "keteragan"     :null
//     }

// ] 

// console.log(tblmenu);