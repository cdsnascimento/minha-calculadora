function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        //btnClear: document.querySelector('.btn-clear'),
    
        inicia() {
            this.cliqueBotoes();
            this.pressionaTecla();
            this.soltaTecla();
            this.displayFocus();
        },

        displayFocus() {
            this.display.focus();
        },

        soltaTecla() {
            this.display.addEventListener('keyup', (e) => {
            if ((e.keyCode >= 96 && e.keyCode <= 111) || 
                (e.keyCode >= 48 && e.keyCode <= 57)  ||
                (e.keyCode === 8)   ||
                (e.keyCode === 13)  ||
                (e.keyCode === 27)  ||
                (e.keyCode === 111) ||
                (e.keyCode === 193) ||
                (e.keyCode === 190)
            ) {
                    this.retiraClasse(e);
                }
            });
        },

        pressionaTecla() {
            this.display.addEventListener('keydown', (e) => {
                if ((e.keyCode >= 96 && e.keyCode <= 111) || 
                    (e.keyCode >= 48 && e.keyCode <= 57)  ||
                    (e.keyCode === 8)   ||
                    (e.keyCode === 13)  ||
                    (e.keyCode === 27)  ||
                    (e.keyCode === 111) ||
                    (e.keyCode === 193) ||
                    (e.keyCode === 190)
                ) 
                {
                    this.adicionaClasse(e);
                }
            });
        },

        adicionaClasse(e){
            let id = e.key;
            if (e.keyCode === 110) {
                id = '.';
            }
            let tecla = document.getElementById(`${id}`);
            tecla.classList.add('btn-click');
        },

        retiraClasse(e){
            let id = e.key;

            if (e.keyCode === 110) {
                id = '.';
                this.apagaUm();
                this.display.value += '.';
            }

            if (e.keyCode === 27) {
                this.clearDisplay();
            }

            if (e.keyCode === 13) {
                this.realizaConta();
            }

            let tecla = document.getElementById(`${id}`);
            tecla.classList.remove('btn-click');
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                
                if (!conta) {
                    alert('Ação inválida');
                    clearDisplay();
                    return true;
                }

                this.display.value = String(conta);
            } catch (e) {
                    alert('Ação inválida');
                    this.clearDisplay();
                    return;

            }
        },
    
        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;
    
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            })
        },

        clearDisplay() {
            this.display.value = '';
        },
    
        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();