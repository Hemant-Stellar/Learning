var data = fetch('https://official-joke-api.appspot.com/random_joke')  
data.then((result)=>{
    return result.json();
}).then((response)=>{
    console.log(response);
    document.getElementById('setup').innerHTML = response.setup;
    document.getElementById('punchline').innerHTML = response.punchline;
})