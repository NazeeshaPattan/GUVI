/*
Task for callback
Write a function which takes 2 parameters 
Operation
Function array 
 Based on the parameters do the operation
*/

function process(a,b) {
    //this function returns the desired operation of 2 parameters to the user
	var val1 = 200, val2= 800;
    return a[b-1](val1,val2);

}

function add(a,b)
{//this function returns addition of 2 parameters
	return a+b
}
function sub(a,b)
{//this function returns subtraction of 2 parameters
	return a-b
}

function mul(a,b)
{//this function returns multiplication of 2 parameters
	return a*b
}

var opers = [add,sub,mul];
var oper1 = process(opers,1);
var oper2 = process(opers,2);
var oper3 = process(opers,3);

try{
    console.log(oper1,oper2,oper3);
}catch(err){
    console.log("Error Occured")
 }
