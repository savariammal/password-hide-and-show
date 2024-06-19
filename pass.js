const pastxt=document.getElementById("psd");
const btntxt=document.getElementById("btn");
const showvalues=()=>{
    if(btntxt.value=="Show")
    {
         btntxt.value="Hide";
         pastxt.type="text";
    }
    else{
         btntxt.value="Show";
         pastxt.type="password";
    }
};
btn.addEventListener("click",showvalues);