var c1 = new Calculator;

var disp = document.getElementById('display');
var number1 = 0, number2 = 0, input , operator;
document.addEventListener('click', function(e){
  disp.innerHTML = input; 
  
  switch(e.target.id){
    
    //Numbers
    case '1':
      c1.num(1);
      if(c1.num2 != 0){
        disp.innerHTML = parseFloat(c1.num2);
      }else{
        disp.innerHTML = parseFloat(c1.num1);
      }
      break;

    case '2':      
      c1.num(2);
      if(c1.num2 != 0){
        disp.innerHTML = parseFloat(c1.num2);
      }else{
        disp.innerHTML = parseFloat(c1.num1);
      }
      break;

    case '3':      
      c1.num(3);
      if(c1.num2 != 0){
        disp.innerHTML = parseFloat(c1.num2);
      }else{
        disp.innerHTML = parseFloat(c1.num1);
      }
      break;

    case '4':      
      c1.num(4);
      if(c1.num2 != 0){
        disp.innerHTML = parseFloat(c1.num2);
      }else{
        disp.innerHTML = parseFloat(c1.num1);
      }
      break;

    case '5':      
      c1.num(5);
      if(c1.num2 != 0){
        disp.innerHTML = parseFloat(c1.num2);
      }else{
        disp.innerHTML = parseFloat(c1.num1);
      }
      break;

    case '6':      
      c1.num(6);
      if(c1.num2 != 0){
        disp.innerHTML = parseFloat(c1.num2);
      }else{
        disp.innerHTML = parseFloat(c1.num1);
      }
      break;

    case '7':      
      c1.num(7);
      if(c1.num2 != 0){
        disp.innerHTML = parseFloat(c1.num2);
      }else{
        disp.innerHTML = parseFloat(c1.num1);
      }
      break;

    case '8':      
      c1.num(8);
      if(c1.num2 != 0){
        disp.innerHTML = parseFloat(c1.num2);
      }else{
        disp.innerHTML = parseFloat(c1.num1);
      }
      break;

    case '9':      
      c1.num(9);
      if(c1.num2 != 0){
        disp.innerHTML = parseFloat(c1.num2);
      }else{
        disp.innerHTML = parseFloat(c1.num1);
      }
      break;

    case '0':      
      c1.num(0);
      if(c1.num2 != 0){
        disp.innerHTML = parseFloat(c1.num2);
      }else{
        disp.innerHTML = parseFloat(c1.num1);
      }
      break;

    case 'point':      
      c1.num('.');
      break;

    //Operation
    case 'add':
      c1.num("+");
      break;

    case 'sub':
      c1.num("-");
      break;

    case 'multi':
      c1.num("*");
      break;

    case 'div':
      c1.num("/");
      break;

    //Equal
    case 'equ':          
      c1.num("=");    
      disp.innerHTML = parseFloat(c1.result);
      break;

    case 'clr':    
      number1 = number2 = 0;       
      input = '';
      disp.innerHTML = '0';
      break;

    default:
      disp.innerHTML = 0;
      console.log("No such button");
  }

    // console.log("Number1 = " + number1 + ", Number2 = " + number2 
    // +  ", input = " + input + ", operator = " + operator);
  
});

