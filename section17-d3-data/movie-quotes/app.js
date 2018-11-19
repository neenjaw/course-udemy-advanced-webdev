const quotes = [{
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
}];

const newQuotes = [{
  quote: "Houston, we have a problem.",
  movie: "Apollo 13",
  year: 1995,
  rating: "PG-13"
}, {
  quote: "Gentlemen, you can't fight in here! This is the war room!",
  movie: "Dr. Strangelove or: How I learned to Stop Worrying and Love the Bomb",
  year: 1964,
  rating: "PG"
}];


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
  .text(function (datum, idx) {
    return `"${datum.quote}" - ${datum.movie} (${datum.year})`;
  })
  .style('margin', '20px')
  .style('padding', '20px')
  .style('font-size', function (d) {
    return d.quote.length < 25 ? '2em' : '1em';
  })
  .style('background-color', d => colors[d.rating])
  .style('border-radius', '8px');

// 
// More quotes to illustrate the exit and key function callback argument
// 

const noRRatedQuotes = quotes.filter(movie => movie.rating !== 'R');

d3.select('#more-quotes') // get the <ul>
  .style('list-style', 'none') // style it
  .selectAll('li') // get all the li elements
  .data(quotes) // pass in quotes
  .enter() // creates `enter` nodes to be appended to
  .append('li')
  .text(function (datum, idx) {
    return `"${datum.quote}" - ${datum.movie} (${datum.year})`;
  })
  .style('margin', '20px')
  .style('padding', '20px')
  .style('font-size', function (d) {
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
  .data(noRRatedQuotes, function (d) {
    return d.quote;
  })
  .exit()
  .remove();

// 
// Third Example
// 

d3.select('#even-more-quotes') // get the <ul>
  .style('list-style', 'none') // style it
  .selectAll('li') // get all the li elements
  .data(quotes) // pass in quotes
  .enter() // creates `enter` nodes to be appended to
  .append('li')
    .text(function (datum, idx) {
      return `"${datum.quote}" - ${datum.movie} (${datum.year})`;
    })
    .style('margin', '20px')
    .style('padding', '20px')
    .style('font-size', function (d) {
      return d.quote.length < 25 ? '2em' : '1em';
    })
    .style('background-color', d => colors[d.rating])
    .style('border-radius', '8px');

const removeBtn = d3.select('.remove-r-rated');

removeBtn.on('click', function () {
  const quoteSelection = d3
    .select('#even-more-quotes')
    .selectAll('li');

  // Get the quotes in the list, concatonate the new quotes to it
  const quoteData = quoteSelection.data();
  // Filter out the r-rated quotes from the list
  const filteredQuoteData = quoteData.filter(movie => movie.rating !== 'R');

  quoteSelection
    .data(filteredQuoteData, function (d, _idx) {
      return d.quote;
    })
    .exit()
    .remove();
});

const add = d3.select('.add-more');

add.on('click', function() {
  let quoteItems = d3.select('#even-more-quotes')  // select the parent
    .selectAll('li'); // then select the children to apply the data to

  // Get the quotes in the list, concatonate the new quotes to it
  const quoteData = quoteItems.data();
  const allQuotes = quoteData.concat(newQuotes);
  
  //set the selection to the previous with the new data
  quoteItems = quoteItems.data(allQuotes);

  quoteItems
    .enter() // creates `enter` nodes to be appended to
    .append('li')
      .text(function (datum, idx) {
        return `"${datum.quote}" - ${datum.movie} (${datum.year})`;
      })
      .style('margin', '20px')
      .style('padding', '20px')
      .style('font-size', function (d) {
        return d.quote.length < 25 ? '2em' : '1em';
      })
      .style('background-color', d => colors[d.rating])
      .style('border-radius', '8px')
    .merge(quoteItems)
      .style('color', '#5599ff');

  add.remove();
});

function makeQuotes(nodes) {
  nodes.append('li')
    .text(function (datum, idx) {
      return `"${datum.quote}" - ${datum.movie} (${datum.year})`;
    })
    .style('margin', '20px')
    .style('padding', '20px')
    .style('font-size', function (d) {
      return d.quote.length < 25 ? '2em' : '1em';
    })
    .style('background-color', d => colors[d.rating])
    .style('border-radius', '8px')
}