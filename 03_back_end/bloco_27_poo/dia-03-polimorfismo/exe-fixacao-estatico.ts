abstract class Character {

  abstract talk(): void
  abstract specialMove(): void
}

class  MeleeCharacter extends Character {

  talk(): void {
    console.log('Toma soco!')
  }
  specialMove(): void {
    console.log('Executando Socão')
  }
}

class  LongRangeCharacter extends Character {

  talk(): void {
    console.log('Toma flecha!')
  }
  specialMove(): void {
    console.log('Executando Arco e Flecha')
  }
}

function introduceCharacters (char: Character) {
  char.talk();
  char.specialMove();
};

////////
const personagem1 = new MeleeCharacter();
const personagem2 = new LongRangeCharacter();

introduceCharacters(personagem1);
introduceCharacters(personagem2);
