// Increase Heart START Here
let hearts=document.getElementsByClassName('fa-heart');
for(let heart of hearts){
    heart.addEventListener('click', function(){
        let totalHeatCount=document.getElementById('heart').innerText;

        let TotalheartCountNumber=Number(totalHeatCount);
        let newTotalheartCount=TotalheartCountNumber+1;
        document.getElementById('heart').innerText=newTotalheartCount
       
   
    })

}
// Increase Heart End Here
// Call Coin Start Area

let calls=document.getElementsByClassName('call');
for(let call of calls){
    call.addEventListener('click', function(){
        
        let defaultCoin=document.getElementById('coin').innerText;
        let defaultCoinNumber=Number(defaultCoin);
        if(defaultCoinNumber >= 20){
            alert('you are calling');
                let newCoin=defaultCoinNumber - 20;
        document.getElementById('coin').innerText=newCoin;
            // Target card info for add into history list
            let name=call.parentNode.parentNode.children[1].innerText;
            let serviceNumber=call.parentNode.parentNode.children[3].innerText;
            let time=new Date().toLocaleTimeString();
            
            
            
            // Target card info for add into history list
        let historyArea=document.getElementById('history-list-area');
        let newAddedhistory=document.createElement('div');
        newAddedhistory.innerHTML=`
            <div class="area flex justify-between items-center bg-[#FAFAFA] my-4 p-2 rounded-xl" id="history-list-area">
                    <div class="area-left">
                        <p class="font-bold text-sm" >${name}</p>
                        <p class="text-[#5C5C5C]">${serviceNumber}</p>
                    </div>
                    <div class="area-right">
                        <p class="text-sm">${time}</p>
                    </div>
                 </div>
        `
        historyArea.appendChild(newAddedhistory);
            
        }




        else{
                alert('You Have No Enough Coin For Making A Call');
                return
            }
    
    })
    
}
