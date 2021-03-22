//state class
class State {
    static all = []
	constructor(state) {
		this.id = state.id
		this.name = state.name;
		this.confirmed = state.confirmed;
		this.newconfirmed = state.newconfirmed;
		this.deaths = state.deaths;
		this.newdeaths = state.newdeaths;
		this.code = state.code;
		State.all.push(this)
	}

    static assignStates(states){
        debugger
        states.data.forEach(state =>{
        const stateButtonString = `<button id=${state.code} class= "state"> ${state.code} </button>`
        document.querySelector('.buttons').innerHTML += stateButtonString
        new State(state, state.attributes)
    });
        const array = Array.from(document.getElementsByClassName(`state`))
		array.forEach(button => button.addEventListener("click", (e)=>{getCovidData(button)}))
		array.forEach(button => button.addEventListener("click", (e)=>{indexComments(button)}))
    }
}
