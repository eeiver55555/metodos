var coches = new Array();

coches[0] = "volvo";
coches[1] = "mercedes";
coches[2] = "seat";

//length
coches.length;
//concat
coches[0].concat(coches[1]);
//join
coches.join("---");
//sort
coches.sort();
//splice
coches.splice(2, 0, "ferrari");
coches.splice(2, 1, "lamborgini");
