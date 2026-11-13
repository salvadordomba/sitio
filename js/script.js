const thumbnails = document.querySelectorAll(".thumbnails img")
const fullimageContainer = document.querySelector(".full-image-Container")
const fullimage = document.getElementById('full-image');
const closeBtn = document.querySelector('.close-btn');
thumbnails.forEach(thumbnail =>{
    thumbnail.addEventListener('click', ()=> {
    fullimage.src=thumbnail.src;
    fullimageContainer.style.display=`flex`;

});
});
closeBtn.addEventListener('click',()=>{
    fullimageContainer.style.display='none';

});
