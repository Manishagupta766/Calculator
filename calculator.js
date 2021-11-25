let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
for(items of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.innerText;
        console.log('Button text is',buttonText);
        

    })
}