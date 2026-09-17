function hitungNilai(){

let nama =
document.getElementById("nama").value;


let tugas =
Number(document.getElementById("tugas").value);


let uts =
Number(document.getElementById("uts").value);


let uas =
Number(document.getElementById("uas").value);



if(
nama === "" ||
isNaN(tugas) ||
isNaN(uts) ||
isNaN(uas)
){

alert("Mohon isi semua data!");

return;

}



if(
tugas > 100 ||
uts > 100 ||
uas > 100 ||
tugas < 0 ||
uts < 0 ||
uas < 0
){

alert("Nilai harus antara 0 - 100!");

return;

}



let rata =
(tugas + uts + uas) / 3;



let grade;



if(rata >= 85){

grade="A";

}

else if(rata >= 75){

grade="B";

}

else if(rata >= 65){

grade="C";

}

else if(rata >= 50){

grade="D";

}

else{

grade="E";

}




let status;


if(rata >= 60){

status="Lulus";

}

else{

status="Tidak Lulus";

}





document.getElementById("hasil")
.classList.remove("hidden");



document.getElementById("output")
.innerHTML = `

Nama :
<b>${nama}</b>

<br><br>

Nilai Akhir :
<b>${rata.toFixed(2)}</b>

<br><br>

Grade :
<b>${grade}</b>

<br><br>

Status :
<b>${status}</b>

`;



}