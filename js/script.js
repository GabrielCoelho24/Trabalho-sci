const campoCPF = document.querySelector('input[name="cpf"]')

campoCPF.addEventListener('keyup', function(){
    var cpf = this.value
    
    cpf = cpf.replace(/[^\d]/g, "");
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    this.value = cpf
    
    console.log(cpf)
})