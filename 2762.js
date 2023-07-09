fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>{
    data.map((c)=>console.log(c.flags))}
)
//code to get the flags from the weblink




