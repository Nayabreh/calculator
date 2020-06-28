function get_num(no){
var result = document.getElementById("result")
    result.value +=no
    }

 
 function get_result(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
 }

 function okgoogle(){
    var result = document.getElementById("result");
    result.value = " ";
}