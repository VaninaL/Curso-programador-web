import* as rls from "readline-sync";

const matrixNums: number[][] = new Array (3);
    matrixNums [0] = [0,0,0],
    matrixNums [1] = [0,0,0],
    matrixNums [2 ]= [0,0,0],

    console.log(matrixNums);
for (let i = 0; i < matrixNums.length; i++){
    for (let j = 0; j < matrixNums[i].length ;j ++){
        matrixNums[i][j] = rls.questionInt ("ingrese numero: ");        
    }
}
console.log(matrixNums);
for (let i = 0; i < matrixNums.length; i++){
    for (let j = 0; j < matrixNums[i].length ;j ++){       
        console.log(matrixNums[i][j]);       
    }
}
// crear una funcion que permita crear una matriz de n por m
function createMatrix (n:number,m:number):number[][]{
    const matrix :number[][] = new Array (n);
    for (let i :number = 0; i < matrix.length; i++){
        matrix[i] = new Array (m);
    }
    return matrix
}
const matrix1 = createMatrix (5,4);
console.log(matrix1);
