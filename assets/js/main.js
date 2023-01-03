function Calculadora(){
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.capturaSelecao();
        this.capturaEnter();
    };
    
    this.capturaSelecao = () => {
        document.addEventListener('click', e =>{
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDiplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.total();

        });
    };
    
    this.capturaEnter = () =>{
        document.addEventListener('keyup', e => {
            if (e.key === "Enter" ) this.total();
               
        })
    }

    this.addNumDiplay = el => {
        this.display.value += el.innerText;
        this.display.focus();        
    } 
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0,-1);
    this.total = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta){
                alert('Conta inválida')
                this.display.value = ''
                return              
            }
            this.display.value = conta;
            
        } catch (e) {
            alert('Conta inválida')
            this.display.value = ''
            return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.inicia();