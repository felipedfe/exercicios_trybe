const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

function sendMarsTemperature (temperatura, tempoDaMensagem) {
  setTimeout(() => {
    console.log(`Mars temperature is: ${temperatura()} degree Celsius`);
  }, tempoDaMensagem);
}

sendMarsTemperature(getMarsTemperature, messageDelay); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
