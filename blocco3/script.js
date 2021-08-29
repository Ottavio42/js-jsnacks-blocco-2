var nomi = ["giacomo", "michele", "anna"];
var cognomi = ["rossi", "manzi", "cenni"];
var invitati = []
for (var i = 1; i <= 3 ; i++){
    var nomiR = Math.floor(Math.random() * nomi.length);
    var cognomiR = Math.floor(Math.random() * cognomi.length);
    var nomeIn = nomi[nomiR] + "" + cognomi[cognomiR];
    invitati.push(nomeIn)
}
console.log(invitati)