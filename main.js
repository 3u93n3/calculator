var x = new numArr;
var disp = document.getElementById('p1');


document.addEventListener('click', function(e){
    
    if(e.target.nodeName == 'BUTTON'){
        x.add(e.target.innerText);  
        disp.innerText = parseFloat(x.num);
    }    
});





