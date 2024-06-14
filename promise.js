//Promise
/*console.log("script start");
const bucket=['coffee','chips','vegetables','salts','rice'];
const friedRicePromise=new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&&bucket.includes("salts")&&bucket.includes("rice"))
        resolve({value:"friedrice"});
    else
        reject("could not do it");
})
//Produce

//consume(how to consume)
friedRicePromise.then(
    //jab promise resolve hoga
    (myfriedRice)=>{
        console.log("lets eat",myfriedRice);
    }
    ).catch(
        (error)=>{
            console.log(error);
        }
    )

    setTimeout(()=>{
        console.log("hello from settimeout")
    },0);
for(let i=1;i<=100;i++)
    console.log(Math.random(),i);
console.log("script end");
    */

//Function returning promise
/*function ricePromise(){
    const bucket=['coffee','chips','vegetables','salts','rice'];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables")&&bucket.includes("salts")&&bucket.includes("rice"))
            resolve({value:"friedrice"});
        else
            reject("could not do it");
    })
}

ricePromise().then(
    //jab promise resolve hoga
    (myfriedRice)=>{
        console.log("lets eat",myfriedRice);
    }
    ).catch(
        (error)=>{
            console.log(error);
        }
    )
*/

//Promise && SetTimeout
//I want to resolve /reject prommise after 2 seconds
/*function myPromise(){
    return new Promise((resolve,reject)=>{
        const value =true;
        setTimeout(()=>{
            if(value)
                resolve();
            else
                reject();
        },2000)
    })
}
myPromise()
    .then(()=>{console.log("resolved")})
    .catch(()=>{console.log("rejected")})
*/

//Promise resolve and Promise chaining
//const myPromise=Promise.resolve(5);
/*Promise.resolve(5).then(value=>{
    console.log(value);
})
*/

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}
myPromise()
    .then((value)=>{
        console.log(value);
        value+="bar";
        return value;      //it return promise not only value
    })
    .then((value)=>{
        console.log(value);
        value+="baaz";
        return value;
    })
    .then(value=>{
        console.log(value);
    })