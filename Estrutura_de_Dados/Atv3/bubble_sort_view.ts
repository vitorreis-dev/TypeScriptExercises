
import {Sort} from './bubble_sort'

let sort = new Sort<String>();

let my_array:string[] = ["Vitor", "Carlos", "Marcos", "Maria", "Ana", "Diego"];
let my_array_1:string[] = ["Vitor", "Carlos", "Marcos", "Maria", "Ana", "Diego"];
let my_array_2:string[] = ["Vitor", "Carlos", "Marcos", "Maria", "Ana", "Diego"];

console.log("Naive bubble sort: ");
sort.bubble_naive_view(my_array);
console.log("\n\n");
console.log("Bubble sort:");
sort.bubble_view(my_array_1);
console.log("\n\n");
console.log("Bubble sort optimized: ");
sort.bubble_opt_view(my_array_2);
