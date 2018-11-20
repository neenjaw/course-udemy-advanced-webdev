d3.select('form')
    .on('submit', handleSubmit);

function handleSubmit(event) {
    const barMargin = 4;
    const barWidth = 20;
    const letterMargin = 2;

    d3.event.preventDefault();

    const displayPhrase = d3.select('#phrase');
    const displayCount = d3.select('#count');
    const svg = d3.select('#letters');

    //display the phrase
    const phraseInput = d3.select('input');
    const phrase = phraseInput.property('value');

    if (phrase === '') return;

    displayPhrase.text(`Phrase to be analyzed: ${phrase}`);

    const letterFrequencies = getFrequencies(phrase);

    const maxFrequency = letterFrequencies.reduce((max, current) => {
        if (current.frequency > max) return current.frequency;

        return max;
    }, 1);

    svg.style('width', (letterFrequencies.length * (barWidth + barMargin) - barMargin) + 'px');
    svg.style('height', (maxFrequency * barWidth));

    const letterGroups = svg
                            .selectAll('g')
                            .data(letterFrequencies, d => d.letter);

    letterGroups
        .classed('new', false).exit().remove();


    const enterLetterGroup = letterGroups
                                .enter()  
                                .append('g')
                                    .classed('letter', true)
                                    .classed('new', true);

    enterLetterGroup.append('rect');
    enterLetterGroup.append('text');

    enterLetterGroup.merge(letterGroups)
        .select('rect')
            .attr('fill', 'gold')
            .attr('width', barWidth)
            .attr('height', (d) => (d.frequency * barWidth))
            .attr('x', (d, i) => (i * (barMargin + barWidth)))
            .attr('y', (d) => ((maxFrequency - d.frequency) * barWidth));
    enterLetterGroup.merge(letterGroups)
        .select('text')
            .attr('text-anchor', 'middle')
            .attr('x', (d, i) => (i * (barMargin + barWidth) + (barWidth / 2)))
            .attr('y', (maxFrequency * barWidth - letterMargin))
            .text(function(d) { return d.letter; });

    displayCount.text(`(New letters: ${enterLetterGroup.size()})`);

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
