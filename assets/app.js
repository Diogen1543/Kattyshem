/*плавная смена фото на главном*/
!function(t){const e=new WeakMap,n=(t,e,n)=>new Promise(o=>{const s=()=>{t.removeEventListener("transitionend",s),o()};t.style[e]=n,t.addEventListener("transitionend",s)}),o=t=>n(t,"opacity",0),s=t=>n(t,"opacity",.6),i=t=>(t=>new Promise(e=>setTimeout(e,t)))(1e3).then(()=>o(t)).then(()=>{const n=e.get(t);return t[n.prop]=n.contents.shift(),s(t)}).then(()=>e.get(t).contents.length?i(t):(t=>{e.get(t).timer=null})(t));t.smoothly=((t,n,r)=>{((t,n)=>{e.has(t)||(t.style.transition=n)})(t,"all 2s ease-in-out"),e.has(t)||e.set(t,{prop:n,contents:[],timer:null});const c=e.get(t);c.contents.push(r),c.timer||(c.timer=setTimeout(()=>{if(c.contents.length>1)return i(t);c.timer=null,(t=>o(t).then(()=>{const n=e.get(t);return t[n.prop]=n.contents.shift(),s(t)}))(t)},0))})}(window);

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}


/*$(function(){
    $('.slider.o').hover(
    function(){
        $('.slider.s').css('background', 'blue');
    },
    function(){
        $('.slider.t').css('background', 'blue');
    },
    )
});*/

/*ibg for img*/
function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();

/*intro__photo массив фото*/
let img = [
    {photo:'img/width/2.jpg'},
    {photo:'img/width/3.jpg'},
    {photo:'img/width/5.jpg'},
    {photo:'img/width/6.jpg'},
    {photo:'img/width/8.jpg'},
]

let photo = document.querySelector('.intro__photo');

for(let i=0; i<=4; i=i+1){
  smoothly(photo, 'src', img[i].photo);
}

/*Menu nav-toggle*/
    $("#header__nav-toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#header__nav").toggleClass("active");

    });
