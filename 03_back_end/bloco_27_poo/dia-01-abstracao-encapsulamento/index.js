var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Student = /** @class */ (function () {
    function Student(mat, nom, notasP, notasT) {
        this._matricula = mat;
        this._nome = nom;
        this._notasProva = notasP;
        this._notasTrabalho = notasT;
    }
    Student.prototype.somaNotas = function () {
        var todasAsNotas = __spreadArray(__spreadArray([], this._notasProva, true), this._notasTrabalho, true);
        var soma = todasAsNotas.reduce(function (acc, nota) { return acc + nota; });
        return soma;
    };
    Student.prototype.mediaNotas = function () {
        var todasAsNotas = __spreadArray(__spreadArray([], this._notasProva, true), this._notasTrabalho, true);
        var somaNotas = this.somaNotas();
        return somaNotas / todasAsNotas.length;
    };
    return Student;
}());
;
var estudante1 = new Student(3467, 'Peu', [10, 2], [3, 3]);
console.log(estudante1.mediaNotas());
