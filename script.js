// Heart icon

const heartCount = document.getElementById('heart-count');
const heartIcon = document.getElementsByClassName('heart-icon');

for (let i = 0; i < heartIcon.length; i++) {
    heartIcon[i].addEventListener('click', function(){
        let count = parseInt(heartCount.innerHTML);
        count+=1;
        heartCount.innerHTML = count;
    })
}


// Call button and history
let coins = 100;
const coinCount = document.getElementById('coin-count');
const callButtons = document.getElementsByClassName('call-btn');
const callHistory = document.getElementById('call-history-wrapper');

const cards= document.getElementsByClassName('shadow-sm');

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener("click", function(){
        const card = cards[i];
        const name = card.getElementsByTagName('p')[0].innerText;
        const phone = card.getElementsByTagName('h2')[0].innerText;

        if(coins < 20){
            alert("You don't have enough coins to make a call.");
            return;
        }
        coins -= 20;
        coinCount.innerText = coins;
        alert(`Calling ${name} at ${phone}`);

        const time = new Date().toLocaleTimeString();
        const historyItem = `
        <div class="single-call-history flex gap-4 justify-between items-center bg-[#fafafa] rounded-lg p-4 mb-2">
            <div>
                <h4 class="inter-semibold text-lg text-[#111111]">${name}</h4>
                <p class="hind-madurai-regular text-lg text-[#5c5c5c]">${phone}</p>
            </div>
            <p class="hind-madurai-regular text-lg text-[#111111]">${time}</p>
        </div>
        `;
        callHistory.innerHTML = historyItem + callHistory.innerHTML;
    })
}
// Clear history
document.getElementById('history-clear-btn').addEventListener('click', function(){
    callHistory.innerHTML = '';
})