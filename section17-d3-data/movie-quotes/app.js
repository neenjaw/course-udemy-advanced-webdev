var quotes = [
    {
      quote: "I see dead people.",
      movie: "The Sixth Sense",
      year: 1999,
      rating: "PG-13"
    }, {
      quote: "May the force be with you.",
      movie: "Star Wars: Episode IV - A New Hope",
      year: 1977,
      rating: "PG"
    }, {
      quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
      movie: "Dirty Harry",
      year: 1971,
      rating: "R"
    }, {
      quote: "You had me at 'hello.'",
      movie: "Jerry Maguire",
      year: 1996,
      rating: "R"
    }, {
      quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
      movie: "Finding Nemo",
      year: 2003,
      rating: "G"
    }
  ];

var colors = {
    'G': '#3cff00', 
    'PG': '#f9ff00',
    'PG-13': '#ff9000',
    'R': '#ff0000'
};

// 
// First quotes to illustrate the enter() method
// 

d3.select('#quotes') // get the <ul>
    .style('list-style', 'none') // style it
  .selectAll('li') // get all the li elements
  .data(quotes) // pass in quotes
  .enter() // creates `enter` nodes to be appended to
  .append('li')
    .text(function(datum, idx) {
        return `"${datum.quote}" - ${datum.movie} (${datum.year})`;
    })
    .style('margin', '20px')
    .style('padding', '20px')
    .style('font-size', function(d) {
        return d.quote.length < 25 ? '2em' : '1em';
    })
    .style('background-color', d => colors[d.rating])
    .style('border-radius', '8px');

// 
// More quotes to illustrate the exit and key function callback argument
// 

var noRRatedQuotes = quotes.filter(movie => movie.rating !== 'R');

d3.select('#more-quotes') // get the <ul>
    .style('list-style', 'none') // style it
  .selectAll('li') // get all the li elements
  .data(quotes) // pass in quotes
  .enter() // creates `enter` nodes to be appended to
  .append('li')
    .text(function(datum, idx) {
        return `"${datum.quote}" - ${datum.movie} (${datum.year})`;
    })
    .style('margin', '20px')
    .style('padding', '20px')
    .style('font-size', function(d) {
        return d.quote.length < 25 ? '2em' : '1em';
    })
    .style('background-color', d => colors[d.rating])
    .style('border-radius', '8px');

// this takes the selection,
// applies a new data set to the selection
// matches nodes based off of the callback 'key function'
// then on exit() removes the unmatched nodes from the DOM

d3.select('#more-quotes') // get the <ul>
  .selectAll('li') // get all the li elements
  .data(noRRatedQuotes, function(d) {
    return d.quote;
  })
  .exit()
  .remove();