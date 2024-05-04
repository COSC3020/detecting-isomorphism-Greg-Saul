const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');


// Graph 1
const graph1 = [
    [1,3],
    [0,2,2],
    [1,1,3],
    [0,2]
  ];
  
//Graph 2 isomorphic to 1
const graph2 = [
    [1,3,3],
    [0,2],
    [1,3],
    [0,0,2]
  ];

//Graph 3 not isomorphic to 1 - different degree order
const graph3 = [
    [1,2,3],
    [0,2],
    [0,1,3],
    [0,2]
    ];

// Graph 4 not isomorphic to 1 - less nodes
const graph4 = [
    [1,2],
    [0,2],
    [0,1]
    ];

// Graph 5 not isomorphic to 1 - less edges
const graph5 = [
    [1],
    [2],
    [3],
    [0]
    ];

assert(JSON.stringify(iso(graph1, graph2)) == JSON.stringify(true));
assert(JSON.stringify(iso(graph1, graph3)) == JSON.stringify(false)); // nodes
assert(JSON.stringify(iso(graph1, graph4)) == JSON.stringify(false)); // edges
assert(JSON.stringify(iso(graph1, graph5)) == JSON.stringify(false)); // degree ordering


    
