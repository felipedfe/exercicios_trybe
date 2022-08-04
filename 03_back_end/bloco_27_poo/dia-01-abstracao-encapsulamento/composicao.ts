// Board

interface Board {
  save(): void;
}

class GenericBoard implements Board {
  constructor(public houses: number[], protected database: DataBase){}

  save () {
    console.log('salvando...');
    this.database.saveData();
  }
};

class ChessBoard extends GenericBoard {}

// Database

interface DataBase {
  saveData(): void
}

class MySqlDataBase implements DataBase {

  saveData() {
    console.log('Salvando no banco!')
  }
}

// criando instância

const db = new MySqlDataBase();
const tabuleiroDeXadrez = new ChessBoard([2, 4, 6, 8], db);

tabuleiroDeXadrez.save();