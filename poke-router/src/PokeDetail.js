import React, { Component } from 'react'
import request from 'superagent';

export default class PokeDetail extends Component {
    state= { pokemon: {} }
    async componentDidMount() {
        console.log(this.props.match.params._id);
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params._id}`)
        console.log(data.body.results);
        if (data.body.results) {
            this.setState({ pokemon: data.body.results[0] })
        }
    }
    render() {
        const { pokemon } = this.state;

        return (
        <div className="pokemon">
            <div className="image-border">
                <p><img className="images" src={ pokemon.url_image } alt="" /></p>
                <div className="detail-poke">
                <p>name: { pokemon.pokemon}</p>
                <p>hp: { pokemon.hp }</p>
                <p>ability: { pokemon.ability_1 }</p>
                </div>
            </div>
        </div>
        )
    }
}
