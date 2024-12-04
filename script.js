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

const ui = new UI();

const quiz = new Quiz(sorular);





ui.btn_start.addEventListener('click',function(){
    
        ui.quiz_box.classList.add("active");   
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex+1,quiz.sorular.length);
       ui.btn_next.classList.remove("show");
  
});


ui.btn_next.addEventListener('click',function(){
    if(quiz.sorular.length != quiz.soruIndex + 1){
        quiz.soruIndex ++;
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex+1,quiz.sorular.length);
        ui.btn_next.classList.remove("show");
  
    }
   else{
    console.log("Quiz bitti.");
   }
});



function optionSelected(option){
    let answer = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(answer)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
    }
    else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.incorrectIcon);
    }

    for(let i=0 ; i < ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }

    ui.btn_next.classList.add("show");
}









// console.log(sorular[0].soruMetni);

// console.log(soru1.cevabiKontrolEt("c")); //true gelir


