const campoCPF = document.querySelector('input[name="cpf"]')

campoCPF.addEventListener('keyup', function(){
    var cpf = this.value
    
    cpf = cpf.replace(/[^\d]/g, "");
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    this.value = cpf
    
    console.log(cpf)
})

function validarFormulario(event) {
    event.preventDefault();

    var nome = document.forms["inscricao"]["nome"].value;
    var matricula = document.forms["inscricao"]["matrícula"].value;
    var cpf = document.forms["inscricao"]["cpf"].value;
    var email = document.forms["inscricao"]["email"].value;
    var turma = document.forms["inscricao"]["turma"].value;

   
    if (nome === "" || matricula === "" || cpf === "" || email === "" || turma === "") {
        alert("Todos os campos obrigatórios devem ser preenchidos.");
        return false;
    }
}

salvarInformacoesLocalmente();{
}

function salvarInformacoesLocalmente() {
    var nome = document.forms["inscricao"]["nome"].value;
    var matricula = document.forms["inscricao"]["matrícula"].value;
    var cpf = document.forms["inscricao"]["cpf"].value;
    var email = document.forms["inscricao"]["email"].value;
    var turma = document.forms["inscricao"]["turma"].value;

   
    var inscricao = {
        nome: nome,
        matricula: matricula,
        cpf: cpf,
        email: email,
        turma: turma
    };

    
    var inscricaoJSON = JSON.stringify(inscricao);

    
    localStorage.setItem("inscricao", inscricaoJSON);

    alert('Inscrição efetuada com sucesso')
}


if (localStorage.getItem("total_inscritos") === null) {
  
    localStorage.setItem("total_inscritos", 0);
}


var totalInscritos = parseInt(localStorage.getItem("total_inscritos"));
totalInscritos = isNaN(totalInscritos) ? 0 : totalInscritos;
totalInscritos++;
localStorage.setItem("total_inscritos", totalInscritos);


var numeroTotalInscritos = localStorage.getItem("total_inscritos");

console.log("Número total de inscritos: " + numeroTotalInscritos);

function botão(){
    if(nome === "" || matricula === "" || cpf === "" || email === "" || turma === ""){
        
    }
}