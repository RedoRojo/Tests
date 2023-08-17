const Kbot = require("./kbot");

/*console.log("Saludar a Andrés en idioma default".toUpperCase());
let kbot = new Kbot();
console.log(kbot.saludar("Andrés") == "Buenos días Andrés");

kbot = new Kbot("EN");
console.log("Saludar a Andrés en ingles".toUpperCase());
console.log(kbot.saludar("Andrés") == "Good morning Andrés");

console.log("Saludar a Andrés en espanol por la tarde".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Andrés", 14)=="Buenas tardes Andrés");

console.log("Saludar a Juan en espanol por la noche".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Juan", 20)=="Buenas noches Juan");*/

describe("Saludor", () => {
    it("deberia Saludar a Andrés en idioma default", () => {
        let kbot = new Kbot();
        let resultado = kbot.saludar("Andrés", 6) 
        expect(resultado).toEqual("Buenos días Andrés");
    });

    it("Saludar a Juan en español por la mañana", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Juan", 9);
        expect(resultado).toEqual("Buenos días Juan");
    });

    it("Saludar a Alice en español por la tarde", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Alice", 15);
        expect(resultado).toEqual("Buenas tardes Alice");
    });

    it("Saludar a Carlos en español por la noche", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Carlos", 21);
        expect(resultado).toEqual("Buenas noches Carlos");
    });

    it("Saludar a John en ingles por la manana", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("John", 9);
        expect(resultado).toEqual("Good morning John");
    });

    it("Saludar a Emily en ingles por la tarde", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Emily", 15);
        expect(resultado).toEqual("Good afternoon Emily");
    });

    it("Saludar a David en ingles por la noche", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("David", 21);
        expect(resultado).toEqual("Good evening David");
    });


  });
  