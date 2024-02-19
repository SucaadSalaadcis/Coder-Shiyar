//  const j = document.querySelector("input");
//  i.oninput =()=>{
//   document.body.style.backgroundColor=j.value;
// }



// let color = prompt("Enter color name")
// document.body.style.backgroundColor=color;



// three ways to select button
/* document.getElementById("btn").onclick = function tryy(){  
  document.getElementById("demo").innerHTML="LOVE JS"

}

function tryy(){  
    document.getElementById("demo").innerHTML="LOVE JS"
  
  }

var btnn = document.getElementById("btn")
btnn.onclick = function tryy(){  
    document.getElementById("demo").innerHTML="LOVE JS"
  
  }
 */

// function change(){  
//     var j = document.querySelector("input").value;
//     document.body.style.backgroundColor=j; // Alx
//     // document.getElementById("demo").innerHTML=j;
  
//   }
/*  
let color = ['purple','pink','green']
for(var l=0; l<=2; l++){

  // var k = color[l]
  // console.log(k)
}
  let v = document.querySelector('body');
  v.onchange= () =>{   
    v.style.backgroundColor=color[l]
  }// Alx
 */




/* function change(){  
   var d = document.querySelector("select");
    document.querySelector("body").style.backgroundColor=d.value; 
//   document.body.style.backgroundColor="red"; // Alx
   
// marka badalo select inoo background color badalo alx
  } */

  // button marka click siyo marwalbo in color isku badalo


//   var x = ['text' , 'password', 'submit'];

// for (let i = 0 ; i <= 2 ; i++){
//     document.write(`<input type=${x[i]} />` ,"<br>")
// }


// onmousemove onmouseenter onmouseover
// let x = a=1 , b=1, c=1
// let  a=1 , b=1, n=1 ;
// function Move(){
//  document.getElementById("demo1").innerHTML = a++;
// }
// function Enter(){
//   document.getElementById("demo2").innerHTML = b++;
// }
// function Over(){
//   document.getElementById("demo3").innerHTML = n++;
// }

//.............................
//in HTML file i have these elements <div id="con"><h1>love Js</h1></div>

// with alert()
// with page directly var tt = document.getElementById("con"); tt.outerHTML="<p>like js</p>"

//outerHTML <div id="con"><h1>love Js</h1></div> 
/* outerHTML <p>like js<p> Element io qiimihi dhan aa heystay kan kubadal paragraph la igu so dawaca
 hda xita paragraph kadhafo qoralka bes laisodawaca in body la igu so dawaca*/

/*  innerHTML <h1>love Js</h1> waxay haysa elementiga dhxda kujiro divta sideed utale wxbo lgamabadalayo
 innerHTML <div id="con"><p>like js<p></div> / <div id="con">like js</div> 
 hda without paragraph divta qoral ka bes kusodhaxdawace
 */

/* outerText love Js 
<p>like js<p/> paragraph ka a dhaxgaliyey qoral ahan laygu sodawaca element umahysto
<body>"like js"</body> with text only body la igu
*/


/* innerText love Js
innerText <div id="con">like js</div> hada karabo p divta la gu so dhaxdawaca
innerText <div id="con"><p>like js</p></div> qoral cml usobaxa p ka  lkin div ta u ku dhaxjira
 */

// alert(tt.innerText);
/* console.time()
let names = "pp"
// console.groupCollapsed() // console lada kadambeyan dhn asaa haayo group gareyna lkin kan marka so furtid le arke wxi lgroup greyay
console.group() // console lada kadambeyan dhn asaa haayo group gareyna lkin kan wufuranyahy wa arki karta wxi lgroup greyay wana xirikarta
console.assert(names) //marku qalad dhco bes lasodawaca like names without declaration
console.error(names) //qimaha udhibney error ahaan usobandhiga
console.info(names) //same us console.log
console.groupEnd() // means groupka intu kudhamaday ku wa dambe groupka kumajiran
console.count(names) // markasto lawaco xisabinee
//console.timeEnd() // imisa ayey qadatay in lasodawaco qoralkan wax sec kayar kuso bandigaa
// console.timeStamp()
console.warn(names)  */

var posts = [
  ["1.png"],
  ["2.png"],
  ["3.png"],

]
// console.log(posts)

var con = document.getElementById("con")
posts.forEach(post =>{

   console.log(post)
   con.innerHTML += `<img src="${post[0]}" width="450px" style="float: left"/>`
})

// let x = 'Hello world'
// document.write(x.indexOf("H")) 
