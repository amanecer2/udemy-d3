/*
import  {d3} from "../node_modules/d3/index.js"
*/
/*const data = [
    {name: 'me', value = 1},
    {name: 'me', value = 2},
    {name: 'me', value = 20},
    {name: 'me', value = 30},
];*/
const data = [10, 30 , 40, 100, 300, 500];
const width = '100%';
const height = '100%';

const minMan = [0, Math.max(...data)];
const scaleData = d3.scaleLinear()
    .domain(minMan)
    .range([0, 500])
const colorRange = d3.scaleLinear()
    .domain(minMan)
    .range(['green', 'red'])


const canvas = d3.select('body')
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .append('g')


const bars = canvas.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('width', data => scaleData(data) )
    .attr('height', 50)
    .attr('y', (d, i) => i * 100)
    .attr('fill', d => colorRange(d))

/*const circle = canvas.append('circle')
    .attr('cx', 30)
    .attr('cy', 30)
    .attr('r', 30)
    .attr('fill', 'red');

const rec = canvas.append('rect')
    .attr('height', 50)
    .attr('width', 20);

const line = canvas.append('line')
    .attr('x1', 100)
    .attr('x2', 100)
    .attr('y2', 3000)
    .attr('y1', 200)
    .attr('stroke','green')*/

