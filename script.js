class Pessoa {
  constructor(quantidade) {
    this.quantidade = quantidade;
    this.items = [
      { name: "carvao", quantity: 1 * this.quantidade, unit: "sacos" },
      { name: "sal", quantity: 0.04 * this.quantidade, unit: "kg" },
      { name: "gelo", quantity: 0.5 * this.quantidade, unit: "kg" },
      { name: "refrigerante", quantity: 0.4 * this.quantidade, unit: "L" },
      { name: "agua", quantity: 0.2 * this.quantidade, unit: "L" }
    ]
  }
}

class Adulto extends Pessoa {
  constructor(quantidade, bebuns = 0) {
    super(quantidade);
    this.bebuns = bebuns;
    this.items.push(
      { name: "pao de alho", quantity: 2 * this.quantidade, unit: "pães" }
    );
  }
}

class Homem extends Adulto {
  constructor(quantidade, bebuns = 0) {
    super(quantidade, bebuns);
    this.items.push(
      { name: "carne", quantity: 0.4 * this.quantidade, unit: "kg" },
      { name: "cerveja", quantity: 3 * this.bebuns, unit: "L" }
    );
  }
}

class Mulher extends Adulto {
  constructor(quantidade, bebuns = 0) {
    super(quantidade, bebuns);
    this.items.push(
      { name: "carne", quantity: 0.32 * this.quantidade, unit: "kg" },
      { name: "cerveja", quantity: 3 * this.bebuns, unit: "L" }
    );
  }
}

class Crianca extends Pessoa {
  constructor(quantidade) {
    super(quantidade);
    this.items.push(
      { name: "carne", quantity: 0.2 * this.quantidade, unit: "kg" },
      { name: "pao de alho", quantity: 1 * this.quantidade, unit: "pães" }
    );
  }
}

class Churrasco {
  constructor(homem, mulher, crianca) {
    this.homem = homem;
    this.mulher = mulher;
    this.crianca = crianca;
  }

  getTotal() {
    let mergedArray = [this.homem.items, this.mulher.items, this.crianca.items].flat();

    const result = mergedArray.reduce((acc, { name, quantity, unit }) => {
      acc[name] = acc[name] || { name, quantity: 0, unit };
      acc[name].quantity += quantity;
    return acc;
    }, {});
    
    return Object.values(result);
  }
}

function calculateChurrasco(menCount, drinkingManCount, womenCount, drinkingWomanCount, childrenCount) {
  const homens = new Homem(menCount, drinkingManCount);

  const mulheres = new Mulher(womenCount, drinkingWomanCount);

  const criancas = new Crianca(childrenCount);

  const churrasco = new Churrasco(homens, mulheres, criancas);

  return churrasco.getTotal();
}
