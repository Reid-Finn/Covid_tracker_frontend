let map = document.getElementById("map");
let new_cases = document.getElementById("new_case");
let new_death = document.getElementById("new_death");
let total_death = document.getElementById("total_death");
let total_recovered = document.getElementById("total_recovered");
let total_cases = document.getElementById("total_cases");
let table = document.getElementById('state_stat')



let state_data = fetch("https://covid-19-usa-data-by-zt.p.rapidapi.com/GetUSStateWiseData", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c040d6ad58msh0dac702e285eb0bp1190d7jsnd7236d84ebe9",
		"x-rapidapi-host": "covid-19-usa-data-by-zt.p.rapidapi.com"
	}
})
.then(response => response.json().then(data =>{
    console.log(data)
   
//Getting all the state statistic using a loop
    
}))
.catch(err => {
    console.log(err);
});


// Listeners here


