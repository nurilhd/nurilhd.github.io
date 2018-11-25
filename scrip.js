function inputan(){
	var a =document.forms['biodata']['Nama Organisasi'].value;
	var b =document.forms['biodata']['Ketua Organisasi'].value;
	var c =document.forms['biodata']['Jurusan/Prodi'].value;
	var d =document.forms['biodata']['Angkatan'].value;
	var e =document.forms['biodata']['Deskripsi Organisasi'].value;
	var f =document.forms['biodata']['Visi'].value;
	var g =document.forms['biodata']['Misi'].value;

	var tabel = document.getElementById("tabelinput");
var row =tabel.insertRow(1);
var cell1 =row.insertCell(0);
var cell2 =row.insertCell(1);
var cell3 =row.insertCell(2);
var cell4 =row.insertCell(3);
var cell5 =row.insertCell(4);
var cell6 =row.insertCell(5);
var cell7 =row.insertCell(6);

cell1.innerHTML = a;
cell2.innerHTML = b;
cell3.innerHTML = c;
cell4.innerHTML = d;
cell5.innerHTML = e;
cell6.innerHTML = f;
cell7.innerHTML = g;

}

