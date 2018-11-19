d3.select('form')
    .on('submit', handleSubmit);

function handleSubmit(event) {
    d3.event.preventDefault();

    const displayPhrase = d3.select('#phrase');
    const displayCount = d3.select('#count');
    const displayLetters = d3.select('#letters');

    //display the phrase
    const phraseInput = d3.select('input');
    const phrase = phraseInput.property('value');

    if (phrase === '') return;

    displayPhrase.text(`Phrase to be analyzed: ${phrase}`);

    const letterFrequencies = getFrequencies(phrase);

    const letterBoxes = displayLetters
                            .selectAll('div')
                            .data(letterFrequencies, function(d) { return d.letter; });

    // attach data to letterBoxes selection

    letterBoxes.exit().remove();

    letterBoxes
        .classed('new', false);

        // could style here, but currently styling in the merged selection
        // .style("height", function(d) { return (d.frequency * 20) + 'px'; });

    const enterLetterBoxes = letterBoxes.enter();
        
    displayCount.text(`(New letters: ${enterLetterBoxes.size()})`);

    enterLetterBoxes
        .append('div')
            .attr('class', 'letter new')
            .text(function(d) { return d.letter; })
        .merge(letterBoxes)
            .style("height", function(d) { return (d.frequency * 20) + 'px'; });

    phraseInput.property('value', "");
}

function getFrequencies(phrase) {
    /*
        var sorted = phrase.split("").sort();
        var data = [];
        for (var i = 0; i < sorted.length; i++) {
            var last = data[data.length - 1];
            if (last && last.character === sorted[i]) last.count++;
            else data.push({ character: sorted[i], count: 1 });
        }
    */

    const frequenciesObj = phrase
        .split("")
        .reduce((accumulator, currentValue) => {
            accumulator[currentValue] = accumulator[currentValue] || 0;
            accumulator[currentValue]++;
            return accumulator;
        }, {});

    let frequencies = Object.keys(frequenciesObj)
        .map(i => {
            return {
                letter: i,
                frequency: frequenciesObj[i]
            };
        });

    frequencies = frequencies.sort((a, b) => {
        if (a.letter < b.letter)
            return -1;
        if (a.letter === b.letter)
            return 0;
        return 1;
    });

    return frequencies;
}

d3.select("#reset")
    .on("click", function () {
        d3.selectAll(".letter").remove();
        d3.select('#phrase').text("");
        d3.select('#count').text("");
    });
