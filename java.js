function buttonFunction(secim){
    let ad = prompt("Adinizi Yazin :")
let yas = Number(prompt("Yasiniz Yazin :"))

if(yas<=5){
    document.getElementById("button").innerHTML = (ad + " Sen Korpesen")
}
else if (1<yas &&  yas<=6) {

    document.getElementById("button").innerHTML = ( ad + " Sen Usaqsan")
}
else if(6<yas && yas<=11){

        document.getElementById("button").innerHTML = ( ad + " Sen Yeniyetmesen")
}
else if(11<yas && yas<=18){
    document.getElementById("button").innerHTML = ( ad + " Sen Yeniyetmesen")
}
else if(18<yas && yas<=30){
    document.getElementById("button").innerHTML = ( ad + " Sen Gencsen")
}
else if(30<yas && yas<=70){
    
    document.getElementById("button").innerHTML = ( ad + " Sen Orta yaslisan")
}
else if (66<yas && yas<=80){

    document.getElementById("button").innerHTML = ( ad + " Sen Pensiyasan")
}
else if (80<yas){

    document.getElementById("button").innerHTML = ( ad + " Sen olmusen Xeberin Yoxdu")
}
}