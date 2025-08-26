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
