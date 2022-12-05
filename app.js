const submit1=document.getElementById("btnConvert");
const submit2=document.getElementById("btnClear");
let displayresult=document.getElementById("result");

function binary(e){
    e.preventDefault();
const num=document.getElementById("number").value;
if(num==="")
{
    alert("Please insert a number");
}
else if(num<0)
{
    alert("Enter a positive number");
}
else
{
    displayresult.style.visibility="visible";
}

let binary=Number(num).toString(2);
displayresult.innerHTML=binary;
}



function allClr(){
    const num=document.getElementById("number").value;
    const res=document.getElementById("result").value;

    if(num !="" || res!="")
    {
        document.getElementById("number").value="";
        document.getElementById("result").innerHTML="";
    }

}



submit1.addEventListener("click" ,binary);
submit2.addEventListener("click",allClr)