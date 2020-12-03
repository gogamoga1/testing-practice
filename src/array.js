export default function analyze(array) {
    
    return {
        average: array.reduce((acc, i) => acc + i, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }

  }
