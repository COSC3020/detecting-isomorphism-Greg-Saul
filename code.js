// must use adjacency lists. they seemed like a better solution to me

function iso(graph1, graph2) {
    // checks that they have the same number of nodes
    if(graph1.length != graph2.length){return false;}

    // checks if they have the same number of edges
    if(checkEdge(graph1, graph2) == false){return false;}

    // gets an array of the degree of each node
    let g1Degree = setDegree(graph1);
    let g2Degree = setDegree(graph2);

    // compares the different possibilites of degree ordering
    if(checkDegree(g1Degree, g2Degree)){return true}

    return false;
}

function checkEdge(g1, g2){
    let g1Edges = 0
    let g2Edges = 0
    for(let i = 0; i < g1.length; i++){
        g1Edges += g1[i].length
    }
    for(let i = 0; i < g2.length; i++){
        g2Edges += g2[i].length
    }
    if(g1Edges == g2Edges){
        return true
    }
    return false
}

function setDegree(g){
    let degree = []
    for(let i = 0; i < g.length; i++){
        degree.push(g[i].length)
    }
    return degree
}

function checkDegree(deg1, deg2){
    // shifts through the array to check if the order is the same between lists ex. [1,2,3,4] -> [2,3,4,1]
    for(let i = 0; i < deg1.length; i++){    
    let count = 0;
        for(let j = 0; j < deg1.length; j++){
            if(deg1[j] == deg2[j]) {count++}
        }
        if(count == deg1.length){return true;}
        deg2.push(deg2[0])
        deg2.shift()
    }
    return false;
}
