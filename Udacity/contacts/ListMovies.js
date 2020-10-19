import React, { Component } from 'react';

class ListMovies extends Component {
    render() {
        return (
            <ul className='movies'>
                {Object.values(this.props.movies).map((movie) => (
                    <li key={movie.id} className='movie-names'>
                        <h3>{movie.name}</h3>
                    </li>
                ))}
            </ul>
        )
    }
}

export default ListMovies