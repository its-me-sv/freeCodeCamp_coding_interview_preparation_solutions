const isFound = (arr, val) => arr.includes(val);

const dfs = (graph, root) => {
    let r = [];
    let stack = [];
    stack.push(graph[root]);
    r.push(root);
    while (stack.length > 0) {
        for (let i = 0; i < graph[root].length; ++i) {
            if (!isFound(r, i) && stack[stack.length - 1][i] == 1) {// node not visited
                stack.push(graph[i]);// push node's edges to stack
                r.push(i);// pushing node into visited
                i = 0;
            }
        }
        stack.pop();
    }
    return r;
}

const exDFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
];