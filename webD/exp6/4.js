var head=0;
var tail=0;
var total=0;

function tossCoin(){
   
   let answer= Math.floor((Math.random() * 2) + 1);
   if (answer==1) {
    document.getElementById("head-img").innerHTML=" <img src='https://www.kindpng.com/picc/m/131-1318377_quarter-coin-penny-clip-art-tails-on-a.png' width='100px'></img>"

    document.getElementById("tail-img").innerHTML=""
    head++;
    total++;
    document.getElementById("hf").innerHTML=head;
    document.getElementById("hp").innerHTML=head/total*100;
   }
   else
   {
    document.getElementById("tail-img").innerHTML=" <img src='https://i.stack.imgur.com/vuIvO.jpg' width='100px'></img>";

    document.getElementById("head-img").innerHTML="";
    tail++;
    total++;
    document.getElementById("tf").innerHTML=tail;
    document.getElementById("tp").innerHTML=tail/total*100;
   }
}