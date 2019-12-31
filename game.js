var scores, roundScore, activeplayer, dice,ganeplayer,prevdice=0,prevScore=0;;

function init(){

gameplayer=true;
scores=[0,0];
activeplayer=0;
roundScore=0;




document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent= '0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent= '0';
document.querySelector('#name-1').textContent='player-1';
document.querySelector('#name-0').textContent='player-0';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('active');


}

init();

function nextplayer(){
     activeplayer === 0 ? activeplayer = 1 : activeplayer = 0 ;
    roundScore=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

   document.querySelector('.dice').style.display='none';


}

document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gameplayer){

    dice= Math.floor(Math.random()*6)+1;


    var diceDom= document.querySelector('.dice');
    diceDom.style.display='block';
     diceDom.src ='dice-'+ dice+'.png'; 

     if (dice > 1){
       

         roundScore += dice;
         
         document.querySelector('#current-'+ activeplayer).textContent = roundScore;
     }
     else {
      nextplayer();

     }
   }
   

});

      document.querySelector('.btn-hold').addEventListener('click', function(){
       if(gameplayer){
           
        scores[activeplayer]+=roundScore;

        document.querySelector('#score-'+activeplayer).textContent = scores[activeplayer];
 
        if(scores[activeplayer]>=20){
            document.querySelector('#name-'+ activeplayer ).textContent='winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
           
            gameplayer = false;
 
        } else {
            nextplayer();
    
           }
       
    }
   
});

        
        document.querySelector('.btn-new').addEventListener('click',init);
