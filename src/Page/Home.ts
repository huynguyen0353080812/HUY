import Pokemons from "../component/Pokemons"

const HomePage = {
   async render(){
        return /*html*/`
            ${await Pokemons.render()}
        `
    }
}
export default HomePage