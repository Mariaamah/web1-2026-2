function Mostrar(){
    var x = Number(document.getElementById("iptX").value);
    //console.log(x);

    var msg = "";

    for( var k = 0; k < x; k++){
        msg = msg + (k+1) + "<br>";
    }
    document.getElementById("spnMsg").innerHTML = msg;
}