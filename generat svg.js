// generateSvg.js

function generateSvg(data) {
  return `
 <svg xmlns="http://www.w3.org/2000/svg" >
    <circle fill="${data.shapeColor}" cx="250" cy="250" r="245">
    </circle>
    <text x="200" y="200" font-size="5em" text-anchor="middle" fill="${data.textColor}" stroke-width="2px" dy=".3em">${data.text}</text>
</svg>
`;
}

module.exports = generateSvg;

