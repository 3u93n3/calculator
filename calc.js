function calc(n1, n2, o){
    if(o == '+'){
        return n1 + n2;
    }else if(o == '-'){
        return n1 - n2;
    }else if(o == '*'){
        return n1 * n2;
    }else if(o == '/'){
        return n1 / n2;
    }
}

function Calculator(){
    this.num1 = '0', this.num2 = 0 , this.operator, this.result, this.arr = [];
}    

Calculator.prototype.num = function (x){   

    if(typeof x == 'number'){
        if(this.num2){
            this.num2 += '' + x;
            
        }else{
            this.num1 += '' + x;
        }        
    }else if(x == '.'){
        if(this.num1.indexOf( '.') > 0 ){
            this.num2 += '.';
        }else{
            this.num1 += '.';
        }
    }else {
        if(x == '='){            
            this.result = calc(parseFloat(this.num1), parseFloat(this.num2), this.operator);
            this.arr.push(parseFloat(this.num2));
            this.num1 = '0';
            this.num2 = 0;
            console.log(this.arr);
        }else{
            
                this.operator = x;
                if(!this.num2){
                    this.num2 = '0';
                }       
                this.arr.push(parseFloat(this.num1));
                this.arr.push(x);  
        }        
    }    

    console.log(this.num1 + " | " + this.num2 + " | " + this.operator + 
    " | " + this.result );
};



