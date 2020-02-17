import React, { Component } from 'react';
import request from 'superagent';
import Paging from './Paging'
import './App.css';

export default class Home extends Component {
 
    state={
        searchQuery:'',
        pokemon:[],
        totalCount:0,
    }
    handleSearch = async (e) => {
        e.preventDefault();
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`)
        this.setState({
            pokemon:data.body.results,
            totalCount:data.body.count,
        })
        console.log(data);
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <form className="form" onSubmit={this.handleSearch}>
                    <input onChange={(e)=> this.setState({
                        searchQuery: e.target.value
                    })}/>
                </form>
                <div className="pokemon">
                {
                        this.state.pokemon.map(pokemon => 
                            <div className="image-border">
                                <p><img className="images" src={ pokemon.url_image } alt="" /></p>
                                <div className="detail-poke">
                                <p>name: { pokemon.pokemon}</p>
                                <p>hp: { pokemon.hp }</p>
                                <p>ability: { pokemon.ability_1 }</p>
                                </div>
                            </div>
                        )
                }
                </div>  
                <Paging totalCount ={this.state.totalCount}/>
            </div>
        )
    }
}
