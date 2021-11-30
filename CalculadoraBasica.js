class calculadoraBásica {
    constructor(){
        this.numG = 0;
        this.num1 = 0;
        this.opera='v';
        this.memoria=0;
        this.refrescar();
        document.addEventListener('keydown', this.kdarNumero);
        document.addEventListener('keydown', this.kdarComa);
        document.addEventListener('keydown', this.kdarC);
        document.addEventListener('keydown', this.koperar);
        document.addEventListener('keydown', this.kesigual);
        document.addEventListener('keydown', this.kmrc);
        document.addEventListener('keydown', this.kmrmas);
        document.addEventListener('keydown', this.kmrmenos);
    }

    kdarNumero(e){
        if(e.key == '0' || e.key == '1' ||e.key == '2' ||e.key == '3'
         ||e.key == '4' ||e.key == '5' ||e.key == '6' 
        ||e.key == '7' ||e.key == '8' ||e.key == '9'   ){
            this.darNumero(e.key);
        }        
    }
   
    //Función que coloca el número presionado
    darNumero(numero){
        if(this.num1==0 && this.num1 !== '0.'){
            this.num1 = numero;
        }else{
            this.num1 += numero;
        }
        this.refrescar();
    }

    //Función que coloca la coma al presionar dicho botón
    darComa(){
        if(this.num1 == 0) {
            this.num1 = '0.';
        } else if(this.num1.indexOf('.') == -1) {
            this.num1 += '.';
        }
        this.refrescar();
    }
    kdarComa(e){
        if(e.key == '.' ){
            this.darComa();
        }        
    }


    //Función que coloca la C al presionar dicho botón
    darC(){
        this.numG = 0;
        this.num1 = 0;
        this.refrescar();
    }
    kdarC(e){
        if(e.keyCode  == '67' ){
            this.darC();
        }        
    }

    //Esta función realiza las distintas operaciones aritméticas en función del botón pulsado
    operar(valor){
        if (this.opera!=='v'){
            this.esIgual();
        }
        else{
            this.opera=valor;
        }
        if (this.numG == 0){
            this.numG = document.querySelector("input[type='text']").value;
        }
        this.num1= 0;
        this.refrescar();
    }
    koperar(e){
        if(e.key  == '+'|| e.key  == '-'||e.key  == '*'||e.key  == '/'){
            this.operar(e.key);
        }        
    }
    //Función para pulsar igual
        /*
        suma = 1
        resta = 2
        multiplicacion = 3
        division = 4
    */

    esIgual(){
        if (this.opera!=='v'){
            let srt=''+new Number (this.numG)+''+this.opera+''+new Number (this.num1)
            this.num1=eval(srt);
            //this.num1=num1.value;
        }
        
        this.refrescar();
        this.opera='v';
        this.numG = this.num1;
        this.num1 = 0;
    }
    kesigual(e){
        if(e.keyCode  == '13'|| e.key  == '='){
            this.esIgual();
        }        
    }

    mrc(){
        document.querySelector("input[type='text']").value = this.memoria;
    }
    //acceso por l
    kmrc(e){
        if(e.keyCode  == '76'){
            this.mrc();
        }        
    }


    mcMas(){
        if (this.num1 == 0){
            this.num1 = document.querySelector("input[type='text']").value;
        }
        this.memoria+=this.num1;
        this.num1= this.memoria;
        this.refrescar();
    }
      //acceso por p
      kmrmas(e){
        if(e.keyCode  == '80'){
            this.mrc();
        }        
    }
    mcMenos(){
        if (this.num1 == 0){
            this.num1 = document.querySelector("input[type='text']").value;
        }
        this.memoria+=this.num1;
        this.num1= this.memoria;
        this.refrescar();
    }
  //acceso por q
  kmrmenos(e){
    if(e.keyCode  == '81'){
        this.mrc();
    }        
}
    refrescar(){
        document.querySelector("input[type='text']").value = this.num1;
    }
}
var cal = new calculadoraBásica();


       