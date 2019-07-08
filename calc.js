var numArr = function(){
    this.num = '0', this.arr = [];
}

numArr.prototype.add = function(sym){
    if('1234567890'.indexOf(sym) >= 0){
        this.num += sym;
    }
    
    if(sym == '.'){
        if(this.num.indexOf('.') >= 0){
            this.arr.push(parseFloat(this.num));
            this.num = '0';
        }else{            
            this.num += sym;
        }
    }    

    if('+-*/'.indexOf(sym) >= 0){
        this.arr.push(parseFloat(this.num));
        this.arr.push(sym);
        this.num = '0';
    } 

    if(sym == '='){
        this.arr.push(parseFloat(this.num));

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'calc.php');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById('p1').innerHTML = this.responseText;
            }
        };

        xhr.send("var=" + this.arr );

        this.num = '0', this.arr = [];
    } 

    if(sym == 'C'){
        this.num = '0', this.arr = [];
    }
}
