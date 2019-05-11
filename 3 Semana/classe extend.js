class Animal {
    constructor(_nome, _cor) {
        this.nome = _nome,
            this.cor = _cor,
  
class Cachorro extends Animal {
    constructor(_nome, _cor, _raca) {
        super(_nome, _cor);
        this.raca = _raca

    }
            }
        }
    }
    
    let jujuba = new Cachorro('jujuba', 'verde','Golden')