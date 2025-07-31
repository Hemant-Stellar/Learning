var promise = new Promise((resolve, reject)=>{
    var name = "Adfar";
    if(name === "Adfar"){
        resolve(name);
    } else{
        reject('error');
    }
})
promise.then((res)=>{
    console.log(res);
},(err)=>{
    console.log(err);
})