// TODO: Extract to a function to make it updateable
// TODO: Add in controls to select data points
// TODO: Add in a hsl legend
// TODO: Add in onclick to display country

var width = 500;
var height = 500;
var padding = 30;

var xDataset = regionDataKeys[2];
var yDataset = regionDataKeys[3];
var zDataset = regionDataKeys[4];

filteredData = regionData.filter(dataPoint => {
    return  (dataPoint[xDataset.key] !== null) && 
            (dataPoint[yDataset.key] !== null) && 
            (dataPoint[zDataset.key] !== null);
});

var yScale = d3.scaleLinear()
                .domain(d3.extent(filteredData, d => d[yDataset.key]))
                .range([height - padding, padding]);

var xScale = d3.scaleLinear()
                .domain(d3.extent(filteredData, d => d[xDataset.key]))
                .range([padding,width - padding]);
        
var yAxis = d3.axisLeft(yScale)
                .tickSize(-width + 2 * padding)
                .tickSizeOuter(0);

var xAxis = d3.axisBottom(xScale)
                .tickSize(-height + 2 * padding)
                .tickSizeOuter(0);

var colorScale = d3.scaleLinear()
                .domain(d3.extent(filteredData, d => d[zDataset.key]))
                .range([0,359]);

var radiusScale = d3.scaleLinear()
                .domain(d3.extent(filteredData, d => d[zDataset.key]))
                .range([2,15]);

d3.select('svg')
    .append('g')
      .attr('transform', `translate(0,${height - padding})`)
      .call(xAxis);

d3.select('svg')
    .append('g')
      .attr('transform', `translate(${padding},0)`)
      .call(yAxis);
      
d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  .append('g')
  .selectAll('circle')
    .data(filteredData, d => d.region)
    .enter()
    .append('circle')
      .attr('cx', d => xScale(d[xDataset.key]))
      .attr('cy', d => yScale(d[yDataset.key]))
      .attr('r', d => radiusScale(d[zDataset.key]))
      .attr('fill', d => `hsl(${colorScale(d[zDataset.key])}, 100%, 50%)`);

d3.select('svg')
    .append('text')
    .attr('x', width / 2)
    .attr('y', height - padding)
    .attr('dy', '1.5em')
    .style('text-anchor', 'middle')
    .text(xDataset.display);

d3.select('svg')
    .append('text')
    .attr('x', width / 2)
    .attr('y', padding)
    .style('text-anchor', 'middle')
    .style('font-size', '1.5em')
    .text(`${yDataset.display} by ${xDataset.display}`);

d3.select('svg')
    .append('text')
    .attr('transform','rotate(-90)')
    .attr('x', -height / 2)
    .attr('y', padding)
    .attr('dy', '-1.2em')
    .style('text-anchor', 'middle')
    .text(yDataset.display);

