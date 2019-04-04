
var i= 0;
var tab_col = ['#1abc9c','#16a085','#2ecc71','#27ae60','#3498db','#2980b9', '#9b59b6','#8e44ad','#34495e','#f1c40f','#f39c12','#e67e22','#d35400','#e74c3c',
'#c0392b','#ecf0f1','#bdc3c7','#bdc3c7','#95a5a6','#7f8c8d'];

function nxt(){
    var elem = document.getElementById("square");
    if(i<18)
        i++;
    else
        if(i>=18)
            i= 0;
    elem.style.backgroundColor = tab_col[i];
//            console.log(i);
}


function bck(){
    var elem = document.getElementById("square");
    if(i>0)
        i--;
    else
        if(i<=0)
            i= 18;
    elem.style.backgroundColor = tab_col[i];
    console.log(i);
}

function handl_size(){
    var rg_s_x = document.getElementById("rg_s_x");
    var rg_s_y = document.getElementById("rg_s_y");

    document.getElementById("square").style.width = parseInt(rg_s_x.value)+'px';
    document.getElementById("square").style.height = parseInt(rg_s_y.value)+'px';

    document.getElementById("sq0").innerHTML = parseInt(rg_s_x.value)+'px';
    document.getElementById("sq1").innerHTML = parseInt(rg_s_y.value)+'px';
}

function handl_pos(){
    var rg_pos_x = document.getElementById("rg_pos_x");
    var rg_pos_y = document.getElementById("rg_pos_y");

    document.getElementById("square").style.left = parseInt(rg_pos_x.value)+'px';
    document.getElementById("square").style.top = parseInt(rg_pos_y.value)+'px';

    document.getElementById("sq2").innerHTML = parseInt(rg_pos_x.value)+'px';
    document.getElementById("sq3").innerHTML = parseInt(rg_pos_y.value)+'px';
}

function handl_bord(){
    var r0 = document.getElementById("r0");
    var col_bar = document.getElementById("col_bar");
    var col = col_bar.value;
}

function handl_name(){
    var field_name = document.getElementById("field_nm");
    document.getElementById("square").innerHTML = field_name.value;
    field_name.value = "";
}