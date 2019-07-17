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


async function calculator(a, b, c) {
    try {
        const addResult = await add(a, b);
        const multiplyResult = await multiply(addResult, c);
        console.log("async Multiply Result", multiplyResult);
    } catch (e) {
        console.log("async catch error",e);
    }
}

calculator(5, 3, 3);
