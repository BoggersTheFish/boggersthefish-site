// --- Nodes and Edges ---
var nodes = new vis.DataSet([
  { id:1, label:"TS Framework", description:"The kernel of all TS ideas, strongest node." },
  { id:2, label:"GOAT-TS", description:"Experimental software built on TS principles." },
  { id:3, label:"GOAT-TS Lite", description:"Lightweight version of GOAT-TS." },
  { id:4, label:"GOAT-TS Superlite", description:"Ultra-minimal GOAT-TS." },
  { id:5, label:"Applications", description:"Practical uses of TS ideas." },
  { id:6, label:"Global Economics", description:"How TS logic can influence economic systems." },
  { id:7, label:"Cost Reduction", description:"Using TS to optimize resource usage." }
]);

var edges = new vis.DataSet([
  { from:1, to:2 },
  { from:2, to:3 },
  { from:2, to:4 },
  { from:1, to:5 },
  { from:5, to:6 },
  { from:5, to:7 }
]);

// --- Create Network ---
var container = document.getElementById("graph");
var data = { nodes: nodes, edges: edges };
var options = {
  nodes: { shape:"dot", size:20, color:{background:"#4da6ff"} },
  edges: { color:"#ffffff" },
  physics: { enabled:true }
};
var network = new vis.Network(container, data, options);

// --- Node click display ---
network.on("click", function(params) {
  if(params.nodes.length > 0){
    let node = nodes.get(params.nodes[0]);
    document.getElementById("node-title").innerText = node.label;
    document.getElementById("node-desc").innerText = node.description || "No description";
  }
});

// --- Add new ideas ---
document.getElementById("addIdeaBtn").addEventListener("click", function(){
  let idea = document.getElementById("ideaInput").value.trim();
  if(!idea) return;
  let newId = nodes.length + 1;
  nodes.add({id:newId, label:idea, description:"New user-generated idea"});
  edges.add({from:1, to:newId}); // Connect to TS Framework by default
  document.getElementById("ideaInput").value = "";
});