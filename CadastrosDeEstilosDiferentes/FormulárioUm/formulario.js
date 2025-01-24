document.getElementById('formulario-pet').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const raca = document.getElementById('raca').value;
    const peso = document.getElementById('peso').value;
    const comportamento = document.querySelector('input[name="behavior"]:checked');
    const especieCanino = document.getElementById('cachorro').checked;
    const especieFelino = document.getElementById('gato').checked;

    if (!nome || !raca || !peso || !comportamento || (!especieCanino && !especieFelino)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    alert('Cadastro concluído com sucesso!');
    this.reset();
});

const checkboxes = document.querySelectorAll('#check input[type="checkbox"]');

        // Adiciona um evento de mudança a cada checkbox
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    // Desmarca todas as outras checkboxes
                    checkboxes.forEach(other => {
                        if (other !== checkbox) {
                            other.checked = false;
                        }
                    });
                }
            });
        });
