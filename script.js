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
    ui.quiz_box.classList.remove("active");  
    ui.score_box.classList.add("active");
    ui.skoruGoster(quiz.sorular.length,quiz.dogruCevapSayisi);
   }
});



function optionSelected(option){
    let answer = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(answer)){
       
        option.classList.add("correct");
        quiz.dogruCevapSayisi ++;
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



ui.btn_quit.addEventListener('click',function(){
    window.location.reload();
});


ui.btn_replay.addEventListener('click',function(){
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;

    ui.btn_start.click();
    ui.score_box.classList.remove("active");
})








// console.log(sorular[0].soruMetni);

// console.log(soru1.cevabiKontrolEt("c")); //true gelir


