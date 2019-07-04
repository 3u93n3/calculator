var newCalc = new Calculator;

var disp = document.getElementById('display');
var number1 = 0, number2 = 0, input = '', operator;
document.addEventListener('click', function(e){
  disp.innerHTML = input;

  newCalc.num(e.target.id);
  console.log(e.target.id);
  // switch(e.target.id){
    
  //   //Numbers
  //   case '1':
  //     disp.innerHTML = input += 1;
  //     break;

  //   case '2':      
  //     disp.innerHTML = input += 2;
  //     break;

  //   case '3':      
  //     disp.innerHTML = input += 3;
  //     break;

  //   case '4':      
  //     disp.innerHTML = input += 4;
  //     break;

  //   case '5':      
  //     disp.innerHTML = input += 5;
  //     break;

  //   case '6':      
  //     disp.innerHTML = input += 6;
  //     break;

  //   case '7':      
  //     disp.innerHTML = input += 7;
  //     break;

  //   case '8':      
  //     disp.innerHTML = input += 8;
  //     break;

  //   case '9':      
  //     disp.innerHTML = input += 9;
  //     break;

  //   case '0':      
  //     disp.innerHTML = input += 0;
  //     break;

  //   //case 'point':      
  //     //disp.innerHTML = input += '.';
  //     //break;

  //   //Operation
  //   case 'add':
  //     if(number1 == 0){
  //       number1 = Number(input);   
  //     }   
  //     input = "";
  //     operator = "+";
  //     break;

  //   case 'sub':
  //     if(number1 == 0){
  //       number1 = Number(input);  
  //     }   
  //     input = "";
  //     operator = "-";
  //     break;

  //   case 'multi':
  //     if(number1 == 0){
  //       number1 = Number(input);      
  //     }   
  //     input = "";
  //     operator = "*";
  //     break;

  //   case 'div':
  //     if(number1 == 0){
  //       number1 = Number(input);   
  //     }   
  //     input = "";
  //     operator = "/";
  //     break;

  //   //Equal
  //   case 'equ':          
  //     number2 = Number(input);  
  //     input = 0;
  //     switch(operator){
  //       case "+":          
  //         disp.innerHTML = number1 + number2;
  //         number1 = number2 = 0;
  //         break;
  //       case "-":
  //         disp.innerHTML = number1 - number2;
  //         number1 = number2 = 0;
  //         break;
  //       case "*":
  //         disp.innerHTML = number1 * number2;
  //         number1 = number2 = 0;
  //         break;
  //       case "/":
  //         disp.innerHTML = number1 / number2;
  //         number1 = number2 = 0;
  //         break;        
  //     }    
  //     break;

  //   case 'clr':    
  //     number1 = number2 = 0;       
  //     input = '';
  //     disp.innerHTML = '0';
  //     break;

  //   default:
  //     disp.innerHTML = 0;
  //     console.log("No such button");
  // }

  //   console.log("Number1 = " + number1 + ", Number2 = " + number2 
  //   +  ", input = " + input + ", operator = " + operator);
  
});

