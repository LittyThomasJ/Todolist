

//var i, va;
var a = []
var b = []
//console.log(list)
function add() {
    //console.log("added")
    var val = document.getElementById("todo").value
    //console.log(val)

    a.push(val)

    // console.log(a)


    document.getElementById("todo").value = " "
    view()
}


function view() {
//var i
    for (var i of a) {
        //console.log(i)
        var li = document.createElement("li")
        li.innerHTML=i
        var btn=document.createElement("button")
        btn.innerHTML="Remove"
        btn.setAttribute("onclick","remove('"+i+"')")
        li.appendChild(btn)
        var move=document.createElement("button")
        move.setAttribute("onclick","movetask('"+i+"')")
        move.innerHTML="Move"
        li.appendChild(move)
//var j=i
        //li.innerHTML= "<span class='cont'>" + i + "</span>&nbsp&nbsp &nbsp&nbsp<button >" + "Move" + "</button>" + "&nbsp" + "<button onclick='remove(" + i + ")'>" + "Remove" + "</button><br>"
    //li.innerHTML = i + "&nbsp" + "<button onclick='remove(" + i + ")'>" + "-" + "</button>"
    
}
    //document.create
    document.getElementById("disp").appendChild(li)
}
function movetask(u)
{
b.push(u)
console.log(b)
a.splice(a.indexOf(u),1)
console.log("after move",a)
reload1()
reload2()
}
function remove(va) {
    //console.log(typeof(va),a.indexOf(va.toString()))
   // var z= va.splice(va)
    // console.log("after removal",a)
    var index=a.indexOf(va)
    console.log(index)
    a.splice(index,1)
    console.log("after removal",a)
    reload1()
 }
 function remove2(va) {
    //console.log(typeof(va),a.indexOf(va.toString()))
   // var z= va.splice(va)
    // console.log("after removal",a)
    var index=b.indexOf(va)
    console.log(index)
    b.splice(index,1)
    console.log("after removal",b)
    reload2()
 }
 function reload1()
 {
     var list =document.getElementById("disp")
     while(list.hasChildNodes())
     {
         list.removeChild(list.firstChild)
     }
   

for (var j of a) {
 
        var li = document.createElement("li")
        li.innerHTML=j
      
        var btn=document.createElement("button")
        btn.innerHTML="Remove"
        btn.setAttribute("onclick","remove('"+j+"')")
        li.appendChild(btn)
        var move=document.createElement("button")
        move.setAttribute("onclick","movetask('"+j+"')")
        move.innerHTML="Move"
        li.appendChild(move)
        document.getElementById("disp").appendChild(li)
}
        
 }
 function reload2()
 {
     var list =document.getElementById("disp2")
     while(list.hasChildNodes())
     {
         list.removeChild(list.firstChild)
     }
   

for (var j of b) {
 
        var li = document.createElement("li")
        li.innerHTML=j
      
        var btn=document.createElement("button")
        btn.innerHTML="Remove"
        btn.setAttribute("onclick","remove2('"+j+"')")
        li.appendChild(btn)
        /*var move=document.createElement("button")
        move.setAttribute("onclick","movetask('"+j+"')")
        move.innerHTML="Move"
        li.appendChild(move)*/
        document.getElementById("disp2").appendChild(li)
}
        
 }