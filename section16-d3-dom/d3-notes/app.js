d3.select("#new-note")
    .on('submit', function () {
        d3.event.preventDefault();
        var input = d3.select('input');
        const inputValue = input.property('value').trim();

        if (inputValue === '') return;

        d3.select('.progress').remove();

        d3.select("#notes")
            .append('p')
            .classed('note', true)
            .text(inputValue);

        input.property('value', '');
    });

d3.select('input')
    .on('keyup', function () {
        const input = d3.select(d3.event.target);
        const inputValue = input.property('value').trim();

        const inProgress = d3.select('.progress');

        if (inputValue === '') {
            inProgress.remove();
            return;
        }

        if (inProgress.empty()) {
            d3.select('#notes')
                .append('p')
                .classed('note', true)
                .classed('progress', true)
                .text(inputValue);
        } else {
            inProgress.text(inputValue);
        }
    });

d3.select('.remove-all')
    .on('click', function () {
        d3.selectAll('.note').remove();
    });

d3.select('.lucky')
    .on('click', function() {
        d3.selectAll('.note')
            .style('font-size', function() {
                return Math.random() * 100 + 'px';
            });
    });