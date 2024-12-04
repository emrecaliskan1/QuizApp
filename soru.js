function Soru(soruMetni,cevapSecenekleri,dogruCevap){ //constructor tanımlıyoruz

    this.soruMetni = soruMetni;
    this.cevapSecenekleri=cevapSecenekleri;
    this.dogruCevap = dogruCevap;
   
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap;
};

let sorular = [
    new Soru("1-King-Slayer olarak bilinen karakter kimdir?",  { a: "Eddard Stark", b: "Robert Baraethon", c: "Jamie Lannister" } , "c"),
    new Soru("2-Cercei Lannister'în en büyük oğlu kimdir ", { a: "Joffrey", b: "Tommen", c: "Bran" } , "a"),
    new Soru("3-Theon Greyjoy'un kız kardeşinin adı nedir?", { a: "Sansa", b: "Yara", c: "Margaery" } , "b"),
    new Soru("4-Bran'e yolculuğunda yardımcı olan karakter hangisidir?", { a: "John Snow", b: "Hodor", c: "Hound" } , "b")
];