(async () => {
    const height = 300;
    const width = 300;
    const margin = {
        top: 20,
        right: 20,
        bottom: 100,
        left: 100
    };
    const graphHeight = height - margin.top - margin.bottom;
    const graphWidth = width - margin.right - margin.left;

    const data = await d3.json('./data/revenues.json');
    window._data = data;

    const _minDomain = d3.min(data, d => +d.profit);//getMinY(data);
    const _maxDomain = d3.max(data, d => +d.profit);//;getMaxY(data);
    const scaleY = d3.scaleLinear()
        .domain([0, _maxDomain])
        .range([0, height]);

    const scaleX = d3.scaleBand()
        .domain(data.map(x => x.month))
        .range([0, height])
        .paddingInner(0.2)
        .paddingOuter(0.3)

    const svg = d3
        .select('body')
        .append('svg')
        .attr('height', height)
        .attr('width', width);


    const graph = svg.append('g')
        .attr('height', graphHeight)
        .attr('width', graphWidth)
        .attr('transform', `translate(${margin.left}, ${margin.top})`)


    const yAxisGroup = graph.append('g');
    const xAxisGroup = graph.append('g')
        .attr('transform', `translate(0, ${graphHeight})`);
    const rects = graph
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect');
    rects
        .attr('width', d => scaleX.bandwidth())
        .attr('height', (d) => scaleY(d.profit))
        .attr('fill', 'red')
        .attr('x', (d, i) => scaleX(d.month))

    const axisBottom = d3.axisBottom(scaleX );
    const axisLeft = d3.axisLeft(scaleY);

    xAxisGroup.call(axisBottom);
    yAxisGroup.call(axisLeft)
})();