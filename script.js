// Seleciona os ícones
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

// Adiciona evento de clique ao ícone da lua
moonIcon.addEventListener('click', function() {
    moonIcon.style.display = 'none'; // Esconde o ícone da lua
    sunIcon.style.display = 'inline-block'; // Mostra o ícone do sol
});

// Adiciona evento de clique ao ícone do sol
sunIcon.addEventListener('click', function() {
    sunIcon.style.display = 'none'; // Esconde o ícone do sol
    moonIcon.style.display = 'inline-block'; // Mostra o ícone da lua
});
