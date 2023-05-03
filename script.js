// function calculatetip(...args: [event: any]) {
    //     preventDefault(form);
    //     let bill = document.getElementById('bill').value;
    //     let servicequal = document.getElementById('servicequal').value;
    //     let numofpeople = document.getElementById('people').value;
    
    //     if (bill == '' || servicequal == 0) {
    //         alert("Por favor, preencha os valores corretamente.");
    //         return;
    //     }
    
    //     if (numofpeople == '' || numofpeople <= 1) {
    //         numofpeople = 1;
    //         document.getElementById('each').style.display = 'none';
    //     } else {
    //         document.getElementById('each').style.display = 'block';
    //     }
    
    //     let total = (bill * servicequal) / numofpeople;
    //     total = total.toFixed(2);
    //     document.getElementById('tip').innerHTML = total;
    //     document.getElementById('totaltip').style.display = 'block';
    //     document.getElementById('tip').innerHTML = total;
    //     document.getElementById('tipsform').addEventListener('submit', calculatetip);
    // }
      
    const form = document.querySelector('form')
    form.addEventListener('submit', (e)=>{e.preventDefault()})
    
    const btn = document.querySelector('button')
    
    // evento que dispara quando o botão é clicado
    btn.addEventListener('click', function(){
        let valorConta =  document.querySelector('#bill').value
        let qualidadeServico = document.querySelector('#servicequal').value
        let qtdPessoas = document.querySelector('#people').value
    
        if(valorConta > 0 && qualidadeServico != 0 && qtdPessoas > 0){
            calculaGorjeta(valorConta, qualidadeServico, qtdPessoas)
        }
        else{
            console.log('Não preenchido corretamente.')
            alert("Por favor, preencha os valores corretamente.");
        }
    
    })
    
    
    // funcão chamada caso todos os dados sejam validos
    function calculaGorjeta(valorConta, qualidadeServico, qtdPessoas){
    
        let Gorjeta = (valorConta * qualidadeServico) / qtdPessoas
        Gorjeta = Gorjeta.toFixed(2)
    
        document.getElementById('tip').innerHTML = Gorjeta;
    }
    

