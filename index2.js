(async () => {
    const data = await d3.json('./udemy/3.13.0/data/revenues.json')

    const svg = d3.select('body')
        .append('svg');

    const circle = svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle');
})();