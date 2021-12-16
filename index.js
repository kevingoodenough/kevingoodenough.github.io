import * as d3 from 'd3';

console.log('test');

const width = 975;
const height = 610;

const svg = d3.create('svg')
    .attr('height', height)
    .attr('width', width);

const statesBackground = svg.append('path');
const statesBoarders = svg.append('path');

document.body.appendChild(svg.node());

/*
<svg viewBox="0 0 975 610">
  <path fill="#ddd" d="${path(topojson.feature(us, us.objects.nation))}"></path>
  <path fill="none" stroke="#fff" stroke-linejoin="round" stroke-linecap="round" d="${path(topojson.mesh(us, us.objects.states, (a, b) => a !== b))}"></path>
  <g text-anchor="middle" font-family="sans-serif" font-size="10">${data.map(({name, description, longitude, latitude}) => svg`
    <g transform="translate(${projection([longitude, latitude]).join(",")})">
      <circle r="2"></circle>
      <text y="-6">${description}</text>
    </g>`)}
  </g>
</svg>`
*/