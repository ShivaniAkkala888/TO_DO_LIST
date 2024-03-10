const conatiner2=document.getElementById("conatiner2")
const inputele=document.getElementById("inputele")
const addbtn=document.getElementById("addbtn")
const addinput=document.getElementById("addinput")
function addfun()
{
   if( inputele.value=="")
   {
    alert("M ledu Ikkada Dolla")
   }
   else
   {
    const inputvalue=inputele.value;
    const newele=document.createElement('li');
    
    newele.innerHTML=`${inputvalue} <i id="deleteicon" class="fa fa-trash-o"></i>`;
    addinput.appendChild(newele)
    inputele.value="";
    newele.querySelector("i").addEventListener("click",remove)
    function remove()
    {
        addinput.removeChild(newele);
    }
   }

}











// addinput.addEventListener("click",(event)=>
// {
//     if(event.target.classList.contains("delet"))
//     {
//         const newele=event.target.parentElement;
//         addinput.removeChild(newele)
//     }
// });