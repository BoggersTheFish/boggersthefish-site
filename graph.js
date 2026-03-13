// TS Node Graph Visualization using vis.js

// Get the container div
const container = document.getElementById('ts-network');

// Define nodes for TS
const nodes = new vis.DataSet([
  { id: 1, label: 'Kernel', color: '#ff3366', font: { size: 24, color: '#fff' } },
  { id: 2, label: 'Driver Layer', color: '#ff6699' },
  { id: 3, label: 'System Calls', color: '#ff6699' },
  { id: 4, label: 'Libraries', color: '#ff99cc' },
  { id: 5, label: 'Applications', color: '#ff99cc' }
]);

// Define edges
const edges = new vis.DataSet([
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 1, to: 4 },
  { from: 4, to: 5 },
  { from: 3, to: 5 }
]);

// Network data
const data = { nodes: nodes, edges: edges };

// Network options
const options = {
  nodes: {
    shape: 'dot',
    size: 16,
    font: { face: 'Share Tech Mono', color: '#fff' }
  },
  edges: {
    width: 2,
    color: '#ff3366',
    smooth: true
  },
  layout: {
    improvedLayout: true
  },
  physics: {
    enabled: true,
    stabilization: false
  },
  interaction: {
    hover: true,
    tooltipDelay: 200
  }
};

// Create the network
const network = new vis.Network(container, data, options);

// Optional: Display node info on click
network.on("click", function (params) {
  if (params.nodes.length > 0) {
    const node = nodes.get(params.nodes[0]);
    document.getElementById('node-title').innerText = node.label;
    document.getElementById('node-desc').innerText = `Node "${node.label}" in the TS network.`;
  }
});