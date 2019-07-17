/**
 * Created by rohit on 07/17/2019.
 */
//Add function
function add(a, b) {
    return new Promise((resolve, reject) => {
        if (a > b) {
            return resolve(a + b);
        } else {
            return reject("Error Reject Add");
        }
    });

}
//Muktiply function
function multiply(c, d) {
    return new Promise((resolve, reject) => {
        if (c > d) {
            return resolve(c * d);
        } else {
            return reject("Error Multiply Reject");
        }
    });
}
//Calculater function
/* function cal(5,3,8){
 add((a,b).then(data)=>{
 console.log("Calculater Data", data);
 }).catch((err)=>{
 console.log("Calculater Error", error);
 });
 } */

function calculator(a, b, c) {
    add(a, b)
        .then((data) => {
            console.log("Add result data", data);	//8
            return multiply(data, c);
        })
        .then((datamultiple) => {
            console.log("datamultiply result data", datamultiple);	//64
        })
        .catch((err) => {
            console.log(err);
        })
}


calculator(5, 8, 7);
