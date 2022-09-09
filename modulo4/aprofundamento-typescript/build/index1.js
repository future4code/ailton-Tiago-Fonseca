const minhaString = "Mario";
const meuNumero = 13;
var CoresArcoIres;
(function (CoresArcoIres) {
    CoresArcoIres["AZUL"] = "Azul";
    CoresArcoIres["ROSA"] = "Rosa";
    CoresArcoIres["AMARELO"] = "Amarelo";
    CoresArcoIres["VERDE"] = "Verde";
})(CoresArcoIres || (CoresArcoIres = {}));
const novaPessoa = {
    nome: "Miguel",
    idade: 13,
    corFavorita: CoresArcoIres.AZUL
};
const pessoa1 = {
    nome: "Pedro",
    idade: 13,
    corFavorita: CoresArcoIres.VERDE
};
const pessoa2 = {
    nome: "Maria",
    idade: 15,
    corFavorita: CoresArcoIres.AMARELO
};
const pessoa3 = {
    nome: "Marta",
    idade: 15,
    corFavorita: CoresArcoIres.ROSA
};
console.table(pessoa1);
console.table(pessoa2);
console.table(pessoa3);
//# sourceMappingURL=index1.js.map