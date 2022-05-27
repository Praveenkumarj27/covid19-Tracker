var div=document.createElement("div");    
div.innerHTML=`<input type="text" id="txt">
<button type="button" onclick="foo()">Search</button>
<div id="active"></div>
<div id="recovered"></div>
<div id="deaths"></div>`;
div.style.textAlign="center";
document.body.append(div);


async function foo(){
    let cc=document.getElementById('txt').value
    let res=await fetch(`https://api.covid19api.com/total/country/${cc}`);
    let res1=await res.json();
    console.log(res1);

    let index=res1.length-1;
    var result=res1[index].Active;
    console.log(result);
  

    let index1=res1.length-1;
    var result1=res1[index].Recovered;
    console.log(result1);

    let index2=res1.length-1;
    var result2=res1[index].Deaths;
    console.log(result2);

    document.getElementById('active').innerText=`Total Active Cases:${result}`
    document.getElementById('recovered').innerText=`Total Recoverd Cases:${result1}`
    document.getElementById('deaths').innerText=`Total Death Cases:${result2}`
}