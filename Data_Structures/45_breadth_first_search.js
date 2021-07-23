const bfs = (graph, root) => {
    let nodesLen = {};

    for (let i = 0; i < graph.length; i += 1)
        nodesLen[i] = Infinity;

    nodesLen[root] = 0;

    let queue = [root];

    let curr;

    while (queue.length > 0) {
        curr = queue.shift();
        let adjacentOfCurr = graph[curr];
        let neighborIdx = [];
        let idx = adjacentOfCurr.indexOf(1);
        while (idx !== -1) {
            neighborIdx.push(idx);
            idx = adjacentOfCurr.indexOf(1, idx + 1);
        }
        for (let neighbor of neighborIdx) {
            if (nodesLen[neighbor] === Infinity) {
                nodesLen[neighbor] = nodesLen[curr] + 1;
                queue.push(neighbor);
            }
        }
    }

    return nodesLen;
};

const exBFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
];