document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validações básicas
    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    // Se desejar, você pode adicionar mais validações aqui

    // Exibe os dados do formulário no console (apenas para fins de demonstração)
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', password);

    // Limpa o formulário
    this.reset();

    alert('Cadastro realizado com sucesso!');
});
