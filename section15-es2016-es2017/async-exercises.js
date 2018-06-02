// Async Functions Assignment

/*
1. Write a function called hasMostFollowers, which accepts a variable number of arguments. You should then make an AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) to get the name and number of followers of each argument. The function should return a string which displays the username who has the most followers. 

Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.

    hasMostFollowers('elie','tigarcia','colt').then(function(data){
        console.log(data)
    });
     
    "Colt has the most followers with 424" 
*/

function hasMostFollowers(...names) {
    const requests = names.map(name => $.getJSON(`https://api.github.com/users/${name}`));

    return Promise.all(requests).then(responses => {
        const max = responses.reduce((max, current) => {
            if (current.followers > max.followers) {
                return current;
            } else {
                return max;
            }
        }, responses[0]);

        return `${max.login} has the most followers with ${max.followers}`;
    });
}

// hasMostFollowers('elie','tigarcia','colt').then(function(data){
//     console.log(data)
// });

// function x(name) {
//     fetch(`https://api.github.com/users/${name}`, {mode: 'cors'})
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(obj) {
//             console.log({status:'Request successful', response: obj});
//         })
//         .catch(function(error) {
//             log('Request failed', error)
//         });
// }

// function y(...names) {
//     const requests = names.map(name => fetch(`https://api.github.com/users/${name}`, {mode: 'cors'}));

//     return Promise.all(requests)
//         .then(responses => Promise.all(responses.map(res => res.json())) )
//         .then(profiles => {
//             const max = profiles.reduce((max, current) => {
//                 if (current.followers > max.followers) {
//                     return current;
//                 } else {
//                     return max;
//                 }
//             }, profiles[0]);
    
//             return `${max.login} has the most followers with ${max.followers}`;
//         })
//         .catch(function(error) {
//             console.error('Request failed', error)
        
//         });
// }

// function z(...names) {
//     const requests = names.map(
//         name => fetch(`https://api.github.com/users/${name}`, {mode: 'cors'}).then(fetchResponse => fetchResponse.json())
//     );

//     return Promise.all(requests)
//         .then(profiles => {
//             //check if the requests were successful, if not fail gracefully.
//             profiles.forEach(function(profile) {
//                 if (profile.message.startsWith('Not Found')) {
//                     throw 'No profiles exist with the name(s) provided';
//                 }

//                 if (profile.message.startsWith('API rate limit exceeded')) {
//                     throw profile.message;
//                 }
//             });

//             const max = profiles.reduce((max, current) => {
//                 if (current.followers > max.followers) {
//                     return current;
//                 } else {
//                     return max;
//                 }
//             }, profiles[0]);
    
//             return `${max.login} has the most followers with ${max.followers}`;
//         })
//         .catch(function(error) {
//             console.error('Request failed', error)
//         });
// }

// z('elie','tigarcia','colt').then(function(data){
//     console.log(data)
// });

/*
2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. Your function should return a promise that when resolved will console.log the name of the character.

    starWarsString(1).then(function(data){
        console.log(data)
    })
     
    "Luke Skywalker"
*/

function starWarsString(num) {
    const endpoint = `https://swapi.co/api/people/${num}/`;

    return fetch(endpoint, {mode: 'cors'})
        .then(response => response.json())
        .then(person => person.name);
}

/*
Bonus 1 -  Using the data from the previous AJAX call above, make another AJAX request to get the first film that character is featured in and return a promise that when resolved will console.log the name of the character and the film they are featured in 

    starWarsString(1).then(function(data){
        console.log(data)
    })
     
    "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner"
*/

function starWarsStringFilmExtended(num) {
    const endpoint = `https://swapi.co/api/people/${num}/`;

    return fetch(endpoint, {mode: 'cors'})
        .then(response => response.json())
        .then(person => {
            const films = person.films;
            const requests = films.map(film => fetch(film, {mode: 'cors'}).then(response => response.json()));

            return Promise.all(requests)
                .then(filmResponses => {
                    //check each response for the earliest film, then return it for the resolving of the Promise
                    const earliestFilm = filmResponses.reduce((min, current) => {
                        if ( (new Date(... current.release_date.split('-'))) < (new Date(... min.release_date.split('-'))) ) {
                            return current;
                        } else {
                            return min;
                        }
                    }, filmResponses[0]);

                    return `${person.name} is featured in ${earliestFilm.title}, directed by ${earliestFilm.director}`;
                });
        });
}

/*
Bonus 2 -  Using the data from Bonus 1 - make another AJAX call to get the information about the first planet that the film contains. Your function should return a promise that when resolved will console.log the name of the character and the film they are featured in and the name of the planet. 

    starWarsString(1).then(function(data){
        console.log(data)
    })
     
    "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth"
*/

function starWarsStringPlanetExtended(num) {
    const endpoint = `https://swapi.co/api/people/${num}/`;

    return fetch(endpoint, {mode: 'cors'})
        .then(response => response.json())
        .then(person => {
            const films = person.films;
            const requests = films.map(film => fetch(film, {mode: 'cors'}).then(response => response.json()));

            return Promise.all(requests)
                .then(filmResponses => {
                    //check each response for the earliest film, then return it for the resolving of the Promise
                    const earliestFilm = filmResponses.reduce((min, current) => {
                        if ( (new Date(... current.release_date.split('-'))) < (new Date(... min.release_date.split('-'))) ) {
                            return current;
                        } else {
                            return min;
                        }
                    }, filmResponses[0]);

                    // return `${person.name} is featured in ${earliestFilm.title}, directed by ${earliestFilm.director}`;

                    const firstPlanet = earliestFilm.planets[0];

                    return fetch(firstPlanet, {mode: 'cors'})
                        .then(res => res.json())
                        .then(planet => {
                            return `${person.name} is featured in ${earliestFilm.title}, directed by ${earliestFilm.director} and it takes place on ${planet.name}`; 
                        });
                });
        });
}