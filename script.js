function display(val){
    document.getElementById("display").value = document.getElementById("display").value + val;

}
function clearDisplay(){
   document.getElementById("display").value = "";
}
function result(){
   var result =  document.getElementById("display").value
   var output = eval (result)
   document.getElementById("display").value = output;
}