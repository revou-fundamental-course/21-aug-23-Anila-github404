function replacaName(){
    let namee = prompt("Who Are You?", "");
    document.getElementById("namee").innerHTML =namee
}
replacaName();

function validateForm(){
    const nama = document.forms["myForm"]["nama"].value; 
    const tanggallahir = document.forms["myForm"]["tanggallahir"].value; 
    const usia = document.forms["myForm"]["usia"].value; 
    const jeniskelamin = document.forms["myForm"]["jeniskelamin"].value; 
    const pesan = document.forms["myForm"]["pesan"].value; 
if (nama == ""|| tanggallahir == ""|| usia == ""|| jeniskelamin == ""|| pesan == ""){
    alert("Tidak boleh ada yang kosong");
    return false;
}
}

var todayDate = new Date();
var month = todayDate.getMonth()+1;
var year = todayDate.getUTCFullYear();
var tdate = todayDate.getDate();
if(month<9) {
    month = "0" + month
}
if(tdate < 10){
    tdate = "0" +tdate
}
var maxDate = year + "-" + month + "-" + tdate;
document.getElementById("tanggallahir").setAttribute("max", maxDate);


// setSenderUI(nama, tanggallahir, usia, jeniskelamin, pesan);
// return false;
// }

// function validateForm(){
//     const nama = document.forms[message-form]["full-name"].value; 
// if (nama==""){
//     document.getElementById("error-name").innerHTML = "Tidak Boleh Null!"
//     return false
// }
// }

// function validasi() {
//     let nama = document.getElementById("nama").value;
//     let tanggallahir = document.getElementById("tanggallahir").value;
//     let usia = document.getElementById("usia").value;
//     let jeniskelamin = document.getElementById("jeniskelamin").value;
//     let pesan = document.getElementById("pesan").value;
//     if (nama != "" && tanggallahir!="" && usia!="" && jeniskelamin!="" && pesan !="" ) {
//         return true;
//     }
//     else{
//         alert('Anda harus mengisi data dengan lengkap !');
//     }
// }


// function validateForm() {
//     let nama = document.getElementById("nama").value;
//     let tanggallahir = document.getElementById("tanggallahir").value;
//     let usia = document.getElementById("usia").value;
//     let jeniskelamin = document.getElementById("jeniskelamin").value;
//     let pesan = document.getElementById("pesan").value;
//     let tombolsubmit = document.getElementsByTagName("tombolsubmit").value [0];
    
//     tombolsubmit.addEventListener('click', function(){
//         if(nama.value == "" && tanggallahir.value == "" && usia.value == "" && jeniskelamin.value == "" && pesan.value == ""){ 
//             alert('jangan kosong!');
//             return false;
//         }
//     })}

// function validateForm (){
//     // var x = document.forms["myForm"].value;
//     // if (x == ""){
//     //     alert("Form Tidak Boleh Kosong");
//     //     return false;
//     // }

//     var a = document.forms["myForm"]["nama"].value;
//     if (a == ""){
//         alert("Nama Tidak Boleh Kosong");
//         return false;
//     }
//     var b = document.forms["myForm"]["jeniskelamin"].value;
//     if (b == ""){
//         alert("Jenis Kelamin Tidak Boleh Kosong");
//         return false;
//     }

// }



