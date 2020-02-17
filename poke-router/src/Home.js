import React, { Component } from 'react';
import request from 'superagent';
// import Paging from './Paging'
import './App.css';
import { Link } from 'react-router-dom'

export default class Home extends Component {
 
    state={
        searchQuery: this.props.match.params.pokemon,
        pokemon:[],
        totalCount:0,
    }
    async componentDidMount() {
        if(this.props.match.params.pokemon){
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`)
            this.setState({
                pokemon:data.body.results,
            })
        }
        };
    handleSearch = async (e) => {
        e.preventDefault();
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`)
        this.setState({
            pokemon:data.body.results,
            totalCount:data.body.count,
        })
        console.log(data);
        this.props.history.push(this.state.searchQuery);

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
                            <Link to={`pokemon/${pokemon.pokemon}`}>
                                <div className="image-border">
                                    <p><img className="images" src={ pokemon.url_image } alt="" /></p>
                                    <div className="detail-poke">
                                    <p>name: { pokemon.pokemon}</p>
                                    <p>hp: { pokemon.hp }</p>
                                    <p>ability: { pokemon.ability_1 }</p>
                                    </div>
                                </div>
                            </Link>
                        )
                }
                </div>  
                {/* <Paging totalCount ={this.state.totalCount}/> */}
            </div>
        )
    }
}
