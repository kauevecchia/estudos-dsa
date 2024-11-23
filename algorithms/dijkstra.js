function dijkstra(graph, start) {
    const minHeap = [[0, start]]
    const distances = {}

    for (let node in graph) {
        distances[node] = Infinity
    }
    distances[start] = 0

    while (minHeap.length > 0) {
        minHeap.sort((a, b) => a[0] - b[0])
        const [currentDistance, currentNode] = minHeap.shift()

        if (currentDistance > distances[currentNode]) {
            continue
        }

        for (let neighbor in graph[currentNode]) {
            const weight = graph[currentNode][neighbor]
            const distance = currentDistance + weight

            if (distance < distances[neighbor]) {
                distances[neighbor] = distance
                minHeap.push([distance, neighbor])
            }
        }
    }

    return distances
}


const graph = {
    'A': { 'B': 1, 'C': 4 },
    'B': { 'A': 1, 'C': 2, 'D': 4 },
    'C': { 'A': 4, 'B': 2, 'D': 1 },
    'D': { 'B': 4, 'C': 1 }
}

const shortestPaths = dijkstra(graph, 'A')
console.log(shortestPaths)
