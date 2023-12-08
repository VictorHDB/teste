const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');


setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minutes= date.getMinutes();
    let seconds = date.getSeconds();

    hour.innerHTML = `${formatTime(hour)}`;
    min.innerHTML = `${formatTime(minutes)}`;
    sec.innerHTML = `${formatTime(seconds)}`;


}, 1000);

function formatTime(time){
    return time < 10 ? "0" + time:time;
}



const bodycolor = document.querySelector('body');

const trilho = document.getElementById('trilho');

trilho.addEventListener('click', ()=> {
    trilho.classList.toggle('dark')
    bodycolor.classList.toggle('dark')
})
