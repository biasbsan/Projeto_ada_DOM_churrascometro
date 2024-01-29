class Pessoa {
  constructor(quantidade) {
    this.quantidade = quantidade;
    this.carvao = 1;
    this.sal = 0.04;
    this.gelo = 0.5;
    this.refrigerante = 0.4;
    this.agua = 0.2;
  }

  getTotal() {
    return {
      carvao: this.carvao * this.quantidade,
      sal: this.sal * this.quantidade,
      gelo: this.gelo * this.quantidade,
      refrigerante: this.refrigerante * this.quantidade,
      agua: this.agua * this.quantidade
    };
  }
}

class Adulto extends Pessoa {
  constructor(quantidade, bebuns=0) {
    super(quantidade);
    this.bebuns = bebuns;
    this.paoDeAlho = 2;
    this.cerveja = 1.8;
  }

  getTotal() {
    return {
      ...super.getTotal(),
      paoDeAlho: this.paoDeAlho * this.quantidade,
      cerveja: this.cerveja * this.bebuns
    };
  }
}

class Homem extends Adulto {
  constructor(quantidade, bebuns=0) {
    super(quantidade, bebuns);
    this.carne = 0.4;
    this.cerveja = 3;
  }

  getTotal() {
    return {
      ...super.getTotal(),
      carne: this.carne * this.quantidade,
      cerveja: this.cerveja * this.quantidade,
    };
  }
}

class Mulher extends Adulto {
  constructor(quantidade, bebuns=0) {
    super(quantidade, bebuns);
    this.carne = 0.32;
    this.cerveja = 3;
  }

  getTotal() {
    return {
      ...super.getTotal(),
      carne: this.carne * this.quantidade,
      cerveja: this.cerveja * this.quantidade,
    };
  }
}

class Crianca extends Pessoa {
  constructor(quantidade) {
    super(quantidade);
    this.carne = 0.2;
    this.paoDeAlho = 1;
  }

  getTotal() {
    return {
      ...super.getTotal(),
      carne: this.carne * this.quantidade,
      paoDeAlho: this.paoDeAlho * this.quantidade,
    };
  }
}

class Churrasco {
  constructor(homem, mulher, crianca) {
    this.homem = homem;
    this.mulher = mulher;
    this.crianca = crianca;
  }
  
  getTotal() {
    let dictionaries = [this.homem.getTotal(), this.mulher.getTotal(), this.crianca.getTotal()];
    const result = {};

    dictionaries.forEach(dictionary => {
      for (const key in dictionary) {
        if (result.hasOwnProperty(key)) {
          result[key] += dictionary[key];
        } else {
          result[key] = dictionary[key];
        }
      }
    });

    return result;
  }
  
}

function calculateChurrasco(menCount, drinkingManCount, womenCount, drinkingWomanCount, childrenCount ){
  
  const homens = new Homem(menCount, drinkingManCount)
  const mulheres = new Mulher(womenCount, drinkingWomanCount)
  const criancas = new Crianca(childrenCount)
  
  const churrasco = new Churrasco(homens, mulheres, criancas)
  
//  console.log(homens.getTotal())
//  console.log(mulheres.getTotal())
//  console.log(criancas.getTotal())
  
  console.log(churrasco.getTotal())

  return churrasco.getTotal();

}
