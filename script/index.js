// Increase Heart START Here
let hearts=document.getElementsByClassName('card');
for(let heart of hearts){
    heart.addEventListener('click', function(){
        let totalHeatCount=document.getElementById('heart').innerText;

        let TotalheartCountNumber=Number(totalHeatCount);
        let newTotalheartCount=TotalheartCountNumber+1;
        document.getElementById('heart').innerText=newTotalheartCount
       
   
    })

}
// Increase Heart End Here
// Call Coin Area

let calls=document.getElementsByClassName('call');
for(let call of calls){
    call.addEventListener('click', function(){
        console.log('call clicked');
    })
    
}