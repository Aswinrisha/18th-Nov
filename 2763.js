async function getuser(){
    const a =await fetch('https://restcountries.com/v3.1/all')
    const b=await a.json()
    b.map((country)=>{
        console.log(country.name.common)
    })//to get the name of the countries
    b.map((country)=>{
        console.log(country.region)
    })//to get the region of the countries
    b.map((country)=>{
        console.log(country.subregion)
    })//to get the subregion of the countries
    b.map((country)=>{
        console.log(country.population)
    })//to get the population of the countries
    
}
getuser()

