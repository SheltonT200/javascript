var clicks=0,cpc=1,rebirths=0,gems=0,enabled=false,clickcounter=document.getElementById('lol'),br = document.createElement('br'),bre = document.createElement('br');
var clickbutton = document.createElement('button')
var rebirthbutton = document.createElement('button')
var cpcbutton = document.createElement('button')
function inf(){
info = 'clicks:'+clicks+'\n gems:'+gems+'\n cpc:'+totalcpc+'\n cost:'+costArray
}
var cost,totalcpc,cost2,costArray,totalcpc=(cpc+(cpc*(rebirths/2))),cost2 = 25*(3**(rebirths)),cost = 5+((2**(cpc-1))-1),costArray=[cost2,cost],info='clicks:'+clicks+'\n gems:'+gems+'\n cpc:'+totalcpc+'\n cost:'+costArray
setInterval("cost2 = 25*(3**(rebirths));cost = 5+((2**(cpc-1))-1);costArray=[cost2,cost];totalcpc=(cpc+(cpc*(rebirths/2)));clickcounter.innerText=info",25)
setInterval('inf()',30)
clickbutton.onclick=function click() {
totalcpc=(cpc+(cpc*(rebirths/2)))
clicks+=totalcpc
//clickcounter.innerText='clicks:'+clicks+'\n gems:'+gems+'\n cpc:'+totalcpc+'\n cost:'+costArray
}
clickbutton.innerText='clickme'
var menubutton = document.createElement('button')
menubutton.id='menu'
menubutton.innerText='pull up menu buttons'
menubutton.onclick=function popupmenu(){
if (enabled==false){
rebirthbutton.id='buyrebirth'
rebirthbutton.onclick=function buyrebirth(){
if (clicks>=cost2){
clicks=0
cpc=1
rebirths++
gems+=10
}
}
rebirthbutton.innerText='buy rebirth'
cpcbutton.id='buycpc'
cpcbutton.onclick=function buycpc(){
if (clicks>=cost){
clicks-=cost
cpc+=1
}
}
cpcbutton.innerText='buy cpc'
document.body.append(rebirthbutton)
document.body.append(cpcbutton)
enabled=true
}else{
document.body.removeChild(rebirthbutton);
document.body.removeChild(cpcbutton);
enabled=false
}
}
document.body.appendChild(menubutton)
document.body.appendChild(br)
document.body.appendChild(clickbutton)
document.body.appendChild(bre)
