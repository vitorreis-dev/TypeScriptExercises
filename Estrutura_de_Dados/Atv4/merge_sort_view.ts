import { Merge, Endereco } from "./merge_sort";

const lista_endereco: Endereco[] = [
  {
    bairro: "Parque dos Sinos",
    cep: "12308330",
  },
  {
    bairro: "Villa Garcia",
    cep: "12307340",
  },
  {
    bairro: "Villa Garcia",
    cep: "12330741",
  },
];

let merge_sort = new Merge<Endereco>();

console.log(...merge_sort.sort_view(lista_endereco));
