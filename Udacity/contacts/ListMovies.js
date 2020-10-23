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

class UsersbyMovie extends Component{
    render() {
        let usersByMovie = {};
        this.props.profiles.forEach(profile => {
            let movieID = profile.favoriteMovieID;
            if (usersByMovie[movieID]) {
                usersByMovie[movieID].push(profile.userID);
            } else {
                usersByMovie[movieID] = [profile.userID];
            }
        })

        

        return (
            <ul>{Object.values(usersByMovie).map((id) =>
                <li key={id}>
                    
                </li>
            )}
            </ul>
        )
    }
}

