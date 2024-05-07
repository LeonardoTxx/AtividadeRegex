document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulario por padrao

  // Validacao do nome
  var nome = document.getElementById('nome').value;
  var nomeRegex = /^[a-zA-Z ]{1,100}$/;
  if (!nomeRegex.test(nome)) {
      alert('Por favor, insira um nome valido (maximo 100 caracteres e sem numeros).');
      return;
  }

  // Validacao do email
  var email = document.getElementById('email').value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Por favor, insira um email valido.');
      return;
  }

  // Validacao do telefone
  var telefone = document.getElementById('telefone').value;
  var telefoneRegex = /^\(\d{2}\)\d{5}\d{4}$/;
  if (!telefoneRegex.test(telefone)) {
      alert('Por favor, insira um numero de telefone valido no formato (99) 99999-9999.');
      return;
  }

  // Se todas as validacoes passarem, o formulario pode ser enviado
  alert('Formulario enviado com sucesso!');
});
