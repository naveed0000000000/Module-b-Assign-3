// Assignment 1


let a = 5;


let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";

console.log(exp1);

// ans = Nan

let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;

console.log(exp2);


// ans = falsetest

let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";


console.log(exp3);

// ans = NaNresult


 let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;

 
console.log(exp4);

// ans = 0

 let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;


console.log(exp5);

// ans = true

 let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;


console.log(exp6);


// ans = 11

let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";

 
console.log(exp7);

// ans = 9


let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";

console.log(exp6);


// ans = 11


let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;

console.log(exp9);


// ans = 3result

let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;

console.log(exp10);


// ans = start

let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;

console.log(exp11);


// ans = 32


let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";

console.log(exp12);


// ans = result

let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;

console.log(exp13);


// ans = falsetest

let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";

console.log(exp14);


// ans = end


let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;

console.log(exp15);


// ans = NaNresult



let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;


console.log(exp16);


// ans = null

let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;


console.log(exp17);


// ans = 4


let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;


console.log(exp18);


// ans = 0

let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;


console.log(exp19);


// ans = foo

let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;


console.log(exp20);


// ans = end5


let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";


console.log(exp21);


// ans = testfalse


let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";


console.log(exp22);


// ans = test


let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";


console.log(exp23);


// ans = result

let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;

console.log(exp24);


// ans = 2

let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;


console.log(exp25);


// ans = 5

let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";


console.log(exp26);


// ans = 17

let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;


console.log(exp27);


// ans = start11

let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";


console.log(exp28);


// ans = world

let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";


console.log(exp29);


// ans = NaNresult

let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;


console.log(exp30);


// ans = falsevaleend



let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;

console.log(exp31);


// ans = 3end

let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");

console.log(exp32);


// ans = 3

let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;

console.log(exp33);


// ans = end11

let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");

console.log(exp34);


// ans = hello48

let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;

console.log(exp35);


// ans = falseend


let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;

console.log(exp36);


// ans = 13

let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;

console.log(exp37);


// ans = 2test

let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";

console.log(exp38);


// ans = 2end

let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;

console.log(exp39);


// ans = 2


let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;

console.log(exp40);


// ans = NaN

let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";

console.log(exp41);


// ans = hello

let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;

console.log(exp42);


// ans = NaN


let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;

console.log(exp43);


// ans = start5

let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";

console.log(exp44);


// ans = value1


let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;

console.log(exp45);


// ans = 29

let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;

console.log(exp46);


// ans = test

let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";

console.log(exp47);


// ans = 8

let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;

console.log(exp48);


// ans = NaN

let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
console.log(exp49);


// ans = 24

let exp50 = 32 && true - ++a && " " || "true";

console.log(exp50);


// ans = ""   answer is empty string



let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;


console.log(exp51);


// ans = 42


let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");


console.log(exp52);


// ans = NaN


let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";



console.log(exp53);


// ans = startend

let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;



console.log(exp54);


// ans = NaN


let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";



console.log(exp55);


// ans = startNaN


let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;



console.log(exp56);


// ans = 12test

let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value";



console.log(exp57);


// ans = value

let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3;


console.log(exp58);


// ans = 2end3

let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;


console.log(exp59);


// ans = 2


let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";


console.log(exp60);


// ans = NaN




let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;


console.log(exp61);


// ans = 3-1result

let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;


console.log(exp62);


// ans = startNaN


let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";


console.log(exp63);


// ans =valueNaN

let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");


console.log(exp64);


// ans = startfalse

let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";


console.log(exp65);


// ans = valueNaN



