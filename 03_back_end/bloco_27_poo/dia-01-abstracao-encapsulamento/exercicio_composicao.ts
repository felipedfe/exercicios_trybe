// Logger

interface Logger {
  log (texto: string) :void
};

class ConsoleLogger implements Logger {
  log (text: string) {
    console.log(text)
  }
}

class ConsoleLogger2 implements Logger {
  log (text: string) {
    console.log(text, ', no console 2')
  }
}

// DataBase

interface DataBase2 {
  logger: Logger
  save (key: string, value: string): void;
};

class ExampleDatabase implements DataBase2 {
  constructor(public logger: Logger = new ConsoleLogger){}

  save (key: string, value: string) {
    this.logger.log(key);
    this.logger.log(value)
  }
}

// criando instâncias

const log1 = new ConsoleLogger;
const log2 = new ConsoleLogger2;

const db1 = new ExampleDatabase(log1);
const db2 = new ExampleDatabase(log2);
const db3 = new ExampleDatabase();

db1.save('0', 'batata')
db2.save('2', 'feijão')
db3.save('3', 'uvas')




