import React, { Component } from 'react';
import request from 'superagent';
import {Link} from 'react-router-dom';


export default class Home extends Component {
 
    state={
        searchQuery:'',
        pokemon:[],
    }
    handleSearch = async (e) => {
        e.preventDefault();
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`)
        this.setState({pokemon:data.body.results})
        console.log(data);
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSearch}>
                    <input onChange={(e)=> this.setState({
                        searchQuery: e.target.value
                    })}/>
                </form>
                <div>
                {
                        this.state.pokemon.map(pokemon => 
                            <div>
                                <p><img src={ pokemon.url_image } alt="" /></p>
                                <p>name: { pokemon.pokemon}</p>
                                <p>hp: { pokemon.hp }</p>
                                <p>ability: { pokemon.ability_1 }</p>
                            </div>
                        )
                }
                </div>    
            </div>
        )
    }
}
