const DINO = document.querySelector(`.dino`);
const BACKGROUND = document.querySelector('.background');
let position =0;
let pontos =0;

let isJump=false;
console.log(BACKGROUND);
//Função que pega o evento de teclado 
function handKeyUp(event){
    if (event.keyCode === 32){
       if(!isJump){
        jumpDino();
       }    
    }
}

function jumpDino(){
    isJump=true;
    let upInterval = setInterval(()=>{ 
    if(position >= 150){
        clearInterval(upInterval);
        let downInterval = setInterval(()=>{
            if(position<=0){
            clearInterval(downInterval);
            isJump=false;
            }else{
            position -= 15;
            DINO.style.bottom = position + 'PX';
            }
        },20); 
    }else {
        position += 15 ;
        DINO.style.bottom = position + 'PX';
    }},25);
}

function criaCactos(){
    
    const CACTOS = document.createElement('div');
    let positionCactus = 1000;
    let randomTime = Math.random() * 6000;
   
    CACTOS.classList.add('cactos');
    CACTOS.style.left = 1000 + 'px';
    BACKGROUND.appendChild(CACTOS);
    let leftInterval = setInterval (()=>{
        if(positionCactus < -60){
            clearInterval(leftInterval);
            pontos += 10;
            BACKGROUND.removeChild(CACTOS);
        }else if(positionCactus > 0 && positionCactus < 60 && position <60 ){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="gameOver"> GAME OVER <BR> <BR> Ponutuação =>  '+ pontos + ' </h1>';
            document.body.style.backgroundColor ='black';

        }
        else{
            positionCactus -=10;
            CACTOS.style.left = positionCactus + 'px';
        }
    },25);
    setTimeout(criaCactos, randomTime);

}
criaCactos();
document.addEventListener(`keyup`, handKeyUp);
