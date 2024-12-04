//OOP - Nesne tabanlı programlama
//Object

// let soru = {
//     soruMetni : 'Hangisi javascript paket yönetim uygulamasıdır?',
//     cevapSecenekleri : {
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm"
//     },
//     dogruCevap : "c",
    
//     cevabiKontrolEt:function(cevap){
//         return cevap === this.dogruCevap
//     }
// }

//Sınıf, constructor => nesne * 30

function Soru(soruMetni,cevapSecenekleri,dogruCevap){ //constructor tanımlıyoruz

    this.soruMetni = soruMetni;
    this.cevapSecenekleri=cevapSecenekleri;
    this.dogruCevap = dogruCevap;
   
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap;
};

let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", 
    { a: "Node.js", b: "Typescript", c: "Npm" } , "c");

let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır?", 
    { a: "Node.js", b: "Nuget", c: "Npm" } , "b");


let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?",  { a: "Node.js", b: "Typescript", c: "Npm" } , "c"),
    new Soru("2-Hangisi .net paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm" } , "b"),
    new Soru("3-Hangisi .net paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm" } , "b"),
    new Soru("4-Hangisi .net paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm" } , "b")
];

function Quiz(sorular){
    this.sorular = sorular;
    this.soruIndex = 0;

}

Quiz.prototype.soruGetir = function(){
    return this.sorular[this.soruIndex];
}

 const quiz = new Quiz(sorular);

console.log(quiz.soruGetir());

document.querySelector(".btn-start").addEventListener('click',function(){
    if(quiz.sorular.length != quiz.soruIndex){
        document.querySelector(".quiz_box").classList.add("active");   
        console.log(quiz.soruGetir());
        quiz.soruIndex ++;
    }
   else{
    console.log("Quiz bitti.");
   }
})










// console.log(sorular[0].soruMetni);

// console.log(soru1.cevabiKontrolEt("c")); //true gelir


