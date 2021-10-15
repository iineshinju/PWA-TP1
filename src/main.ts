import './utils';
import { LogTests } from './utils';

/***********************************************************************************************************************
 * Fonction qui renvoie le minimum de deux nombres
 */
function min(a: number, b: number): number {
    console.log("Ini entre", a, "et", b);
    return (a<b ? a : b);
}
LogTests("Fonction qui renvoie le minimum de deux nombres", min, [
    {args: [17, 27], expectedResult: 17},
    {args: [17, 15], expectedResult: 15},
]);









/***********************************************************************************************************************
 * Fonction qui trie des nombres par ordre croissant
 */
function triCroissant(...L: number[]): number[] {
    console.log(L);
    /*let tri: number[] = [];
    let copyL: number[] = L;
    for (let i=0; i < copyL.length; i++) {
        let mini = Math.min(...copyL);
		tri.push(mini);
        copyL[copyL.indexOf(mini)] = 1000;
	}
    return tri; */
    return L.sort((n1:number, n2:number)=>n1-n2);
}
LogTests("Fonction qui trie des nombres par ordre croissant", triCroissant, [
    {args: [59, 51, 63, 95, 64, -38, -21, -6, 16, 44], expectedResult: [-38, -21, -6, 16, 44, 51, 59, 63, 64, 95]},
    {args: [23, 29, -12, -23, 40, -4, -40, -60, -98, -52], expectedResult: [-98, -60, -52, -40, -23, -12, -4, 23, 29, 40]},
    {args: [], expectedResult: []}
]);

/***********************************************************************************************************************
 * Fonction qui trie des nombres par ordre décroissant
 */
function triDécroissant(...L: number[]): number[] {
    console.log(L);
    /*let tri: number[] = [];
    let copyL: number[] = L;
    for (let i=0; i < copyL.length; i++) {
        let mini = Math.max(...copyL);
		tri.push(mini);
        copyL[copyL.indexOf(mini)] = -1000;
	}
    return tri;*/
    return L.sort((n1:number, n2:number)=>n2-n1);
}
LogTests("Fonction qui trie des nombres par ordre décroissant", triDécroissant, [
    {args: [59, 51, 63, 95, 64, -38, -21, -6, 16, 44], expectedResult: [95, 64, 63, 59, 51, 44, 16, -6, -21, -38]},
    {args: [23, 29, -12, -23, 40, -4, -40, -60, -98, -52], expectedResult: [40, 29, 23, -4, -12, -23, -40, -52, -60, -98]},
    {args: [10], expectedResult: [10]},
    {args: [], expectedResult: []}
]);

/***********************************************************************************************************************
 * Fonction qui somme
 */
function Somme(...L: number[]): number {
    console.log(L);
    if (L.length <= 0)
        throw "Impossible de sommer un tableau vide"; 
    let somme = L.reduce( (accumulator, currentValue) => accumulator + currentValue);
    return somme;
}
LogTests("Fonction qui somme", Somme, [
    {args: [59, 51, 63, 95, 64, -38, -21, -6, 16, 44], expectedResult: 327},
    {args: [23, 29, -12, -23, 40, -4, -40, -60, -98, -52], expectedResult: -197},
    {args: [10], expectedResult: 10},
    {args: [], expectedResult: "Impossible de sommer un tableau vide", errorExpected: true}
]);


/***********************************************************************************************************************
 * Fonction qui fait la moyenne
 */
function Moyenne(...L: number[]): number {
    console.log(L);
    let lengthL = L.length;
    if (L.length <= 0)
        throw "Impossible de faire la moyenne d'un tableau vide"; 
    let somme = L.reduce( (accumulator, currentValue) => accumulator + currentValue);
    let moyenne = somme / lengthL;
    return moyenne;
}
LogTests("Fonction qui fait la moyenne", Moyenne, [
    {args: [59, 51, 63, 95, 64, -38, -21, -6, 16, 44], expectedResult: 32.7},
    {args: [23, 29, -12, -23, 40, -4, -40, -60, -98, -52], expectedResult: -19.7},
    {args: [10], expectedResult: 10},
    {args: [], expectedResult: "Impossible de faire la moyenne d'un tableau vide", errorExpected: true}
]);

/***********************************************************************************************************************
 * Fonction qui renvoie les nombres strictement supérieurs à un certain seuil
 * et triés par ordre croissant
 */
function NombresSupérieursA(min: number, notes: number[]): number[] {
    console.log(min, notes);
    /*let noteseuil : number[] = [];
    for (let i=0; i < notes.length; i++){
        if (notes[i] > min)
            noteseuil.push(notes[i]);
    }*/
    let noteseuil = notes.filter( v => v > min );
    return noteseuil.sort((n1:number, n2:number)=>n1-n2);
}
LogTests("Les nombres strictement supérieurs à un certain seuil", NombresSupérieursA, [
    {args: [10, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], expectedResult: [16, 44, 51, 59, 63, 64, 95]},
    {args: [20, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], expectedResult: [44, 51, 59, 63, 64, 95]},
    {args: [50, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], expectedResult: [51, 59, 63, 64, 95]},
    {args: [50, [23, 29, -12, -23, 40, -4, -40, -60, -98, -52]], expectedResult: []},
    {args: [10, []], expectedResult: []}
]);

/***********************************************************************************************************************
 * Fonction qui renvoie les nombres strictement compris entre une valeur minimale et une valeur maximale
 * et triés par ordre croissant
 */
function NombresComprisEntre(min: number, max: number, notes: number[]): number[] {
    console.log(min, max, notes);
    let noteseuil = notes.filter( v => v >= min && v <= max );
    return noteseuil.sort((n1:number, n2:number)=>n1-n2);
    return [];
}
LogTests("Les nombres strictement compris entre une valeur minimale et maximale", NombresComprisEntre, [
    {args: [10, 20, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], expectedResult: [16]},
    {args: [0, 100, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], expectedResult: [16, 44, 51, 59, 63, 64, 95]},
    {args: [10, 20, [23, 29, -12, -23, 40, -4, -40, -60, -98, -52]], expectedResult: []},
    {args: [10, 20, []], expectedResult: []}
]);


/***********************************************************************************************************************
 * Coder la méthode zip
 * Prends en paramètre des tableaux, renvoie un tableau.
 * Chaque élément du tableau résultat à l'index i contient le tableaux les éléments d'indexes i des tableaux d'entrées.
 * exemple
 * L1 = [a, b, c]
 * L2 = [1, 2, 3]
 * L3 = [x, y, z]
 * zip(L1, L2, L3) = [
 *   [a, 1, x],
 *   [b, 2, y],
 *   [c, 3, z]
 * ]
 */
function Zip(...L: unknown[][]): unknown[][] {
    console.log("ZIP",L);
    /*
    let tabF: any = [];
    let tabI: any = [];
    if (L.length > 0){
        
        //v1 error
        let j = 0;
        for (let i=0; i < L.length; i++){
            for (let j=0; j < L[i].length; i++){
                console.log("L[i][j]", L[i][j]);
                tabI.push(L[i][j]);
                j++;
            }
            console.log("MA TABLE INTER 2",tabI);
            tabF.push(tabI);
            tabI = [];
            console.log("MA TABLE FINAL",tabF);
        }
        //v2 error
        for (let i=0; i < L.length;){
            let j=0;
            if (j < L[i].length){
                console.log("L[i][j]", L[i][j]);
                console.log("i :", i, " et j :", j);
                i++;
            }
            j++;
        }
    }*/
    let longest = L.reduce((a,b) => a.length > b.length ? a : b, []);
    let mapping = longest.map( (_,i) => L.map( arr => arr[i]));
    return mapping;
}

LogTests("Zip de tableaux", Zip, [
    {args: [  ], expectedResult: []},
    {args: [ [1, 2, 3], ['a', 'b', 'c'] ], expectedResult: [[1, 'a'], [2, 'b'], [3, 'c']]},
    {args: [ [1, 2, 3], ['a', 'b', 'c'], [true, false, false] ], expectedResult: [[1, 'a', true], [2, 'b', false], [3, 'c', false]]},
    {args: [ [1], ['a', 'b', 'c'], [true, false, false] ], expectedResult: [[1, 'a', true], [undefined, 'b', false], [undefined, 'c', false]]},
    {args: [ [1, 2, 3], ['a', 'b', 'c'], ['x', 'y', 'z'], [true, false, true]], expectedResult: [[1, 'a', 'x', true], [2, 'b', 'y', false], [3, 'c', 'z', true]]},
]);


/***********************************************************************************************************************
 * Produit scalaire entre deux vecteurs
 */
function ProduitScalaire(V1: number[], V2: number[]): number {
    console.log("ProduitScalaire", V1, V2);
    if (V1.length === 0 || V2.length === 0)
        throw "Les vecteurs doivent être non vides";
    if (V1.length != V2.length)
        throw 	"Les vecteurs doivent être de même taille"
    
    
    return 0;
}
LogTests("Produit scalaire entre deux vecteurs", ProduitScalaire, [
    {args: [[1, 1], [1, 1]], expectedResult: 2},
    {args: [[4, 1], [1, 3]], expectedResult: 7},
    {args: [[59, 51, 63, 95, 64, -38, -21, -6, 16, 44], [23, 29, -12, -23, 40, -4, -40, -60, -98, -52]],
        expectedResult: -49},
    {args: [[], [5]], expectedResult: "Les vecteurs doivent être non vides", errorExpected: true},
    {args: [[5], []], expectedResult: "Les vecteurs doivent être non vides", errorExpected: true},
    {args: [[2, 3], [4]], expectedResult: "Les vecteurs doivent être de même taille", errorExpected: true}
]);


/***********************************************************************************************************************
 * Addition de matrices
 */
function AjoutMatrices(M1: number[][], M2: number[][]): number[][] {
    console.log("AjoutMatrices", M1, M2);
    return []
}
LogTests("Addition de matrices", AjoutMatrices, [
    {args: [ [[1, 1], [1, 1]], [[1, 0], [0, 1]] ], expectedResult: [[2, 1], [1, 2]]},
    {args: [ [[1, 1], [1, 1]], [[1, 4], [0, 1]] ], expectedResult: [[2, 5], [1, 2]]},
    {args: [ [[1, 1], [1, 1], [1, 3]], [[1, -4], [0, 1], [65, -54]] ], expectedResult: [[2, -3], [1, 2], [66, -51]]},
    {args: [ [[1, 1], [1, 1]], [] ], expectedResult: "Les matrices doivent être non vides", errorExpected: true},
    {args: [ [[1, 1], [1, 1]], [5] ], expectedResult: "Les matrices doivent être de même taille", errorExpected: true},
    {args: [ [5], [[1, 1], [1, 1]] ], expectedResult: "Les matrices doivent être de même taille", errorExpected: true},
    {args: [ [[1, 1], [1, 1]], [[], []] ], expectedResult: "Les matrices doivent être non vides", errorExpected: true},
    {args: [ [[], []], [[1, 1], [1, 1]] ], expectedResult: "Les matrices doivent être non vides", errorExpected: true},
    {args: [[], [[5]]], expectedResult: "Les matrices doivent être non vides", errorExpected: true}
]);



/***********************************************************************************************************************
 * Codez une classe Matrice implémentant l'ajout et la multiplication de matrices.
 */


