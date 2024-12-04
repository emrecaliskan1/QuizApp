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
    
        document.querySelector(".quiz_box").classList.add("active");   
        soruGoster(quiz.soruGetir());
        document.querySelector(".next_btn").classList.remove("show");
  
})


document.querySelector(".next_btn").addEventListener('click',function(){
    if(quiz.sorular.length != quiz.soruIndex + 1){
        quiz.soruIndex ++;
        soruGoster(quiz.soruGetir());
        document.querySelector(".next_btn").classList.remove("show");
  
    }
   else{
    console.log("Quiz bitti.");
   }
});


const option_list = document.querySelector(".option_list");

const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';


function soruGoster(soru){
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for(let cevap in soru.cevapSecenekleri){
        options += 
        `
            <div class="option">
                <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]} </span>
            </div>
             `;
    }

    // const option_list = document.querySelector(".option_list"); globale aldık
    document.querySelector(".question_text").innerHTML = question;
    option_list.innerHTML = options;
    
    const option = option_list.querySelectorAll(".option");

    for(let x of option){
        x.setAttribute("onclick","optionSelected(this)");
    }

    
}


function optionSelected(option){
    let answer = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(answer)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",correctIcon);
    }
    else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",incorrectIcon);
    }

    for(let i=0 ; i < option_list.children.length; i++){
        option_list.children[i].classList.add("disabled");
    }

    document.querySelector(".next_btn").classList.add("show");
}









// console.log(sorular[0].soruMetni);

// console.log(soru1.cevabiKontrolEt("c")); //true gelir


