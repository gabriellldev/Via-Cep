function consultarEndereco(){
    
    try {
        
        let cep = document.querySelector('#cep').value;

        if(cep.length !== 8) {
            throw new Error ("Cep Inválido!")
        }

        let url = `https://viacep.com.br/ws/${cep}/json/`; 

        fetch(url).then(function(response){
            response.json().then(function(data){
                console.log(data.erro);
                
                if(data.erro){
                    alert("Cep não encontrado!")
                    limparCampos();
                    
                    return false;
                }
                
                document.querySelector('#endereco').value = data.logradouro;
                document.querySelector('#complemento').value = data.complemento;
                document.querySelector('#bairro').value = data.bairro;
                document.querySelector('#estado').value = data.uf;
                document.querySelector('#cidade').value = data.localidade;
            })
        });
    
    } catch (error) {
        alert(error);
    }

}

// document.getElementById('cep').addEventListener('input', function() {
//     consultarEndereco();
// });

function limparCampos(){
    document.querySelector('#cep').value = '';
    document.querySelector('#endereco').value = '';
    document.querySelector('#complemento').value = '';
    document.querySelector('#bairro').value = '';
    document.querySelector('#estado').value = '';
    document.querySelector('#cidade').value = '';
    document.querySelector('#numero').value = '';
}

function validarCampos(){
    if (document.querySelector('#cep').value == '') {
        alert("Campo CEP vazio");
    
        return false;
    }

    if (document.querySelector('#endereco').value.trim() == '') {
        alert("Campo Rua/Av. vazio");

        return false;
    }

    if (document.querySelector('#estado').value.trim() == '') {
        alert("Campo Estado vazio");

        return false;
    }

    if (document.querySelector('#cidade').value.trim() == '') {
        alert("Campo Cidade vazio");

        return false;
    }

    if (document.querySelector('#bairro').value == '') {
        alert("Campo Bairro vazio");

        return false;
    }

    if (document.querySelector('#numero').value == '') {
        alert("Campo Número vazio");

        return false;
    }

    alert("Dados gravados com sucesso");

}

document.querySelector('#cep_form').addEventListener('submit', function(e){
    e.preventDefault();
    consultarEndereco();
});