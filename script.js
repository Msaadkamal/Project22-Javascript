btnEl=document.querySelector('.btn');
vedioEl=document.querySelector('.vedioer');
closeiconEl=document.querySelector('.closeicon');

btnEl=addEventListener('click',()=>{

vedioEl.classList.remove("active");
});

closeiconEl=addEventListener('click',()=>{
    vedioEl.classList.add("active");
});