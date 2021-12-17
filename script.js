//이미지슬라이더
let nowIndex = 1;


const imageSlider = document.querySelector('#imageSlider');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);


function moveA()
{
imageSlider. style.transform = 'translate(0px)'
nowIndex=1;
}

function moveB()
{
    imageSlider. style.transform = 'translate(-1500px)'
    nowIndex=2;
}
function moveC()
{
    imageSlider. style.transform = 'translate(-3000px)'
    nowIndex=3;
}



checkArrow();

function checkArrow(){
    if(nowIndex == 1)
    {
        leftArrow.style.opacity = 0.2;
        rightArrow.style.opacity = 1;
    }
    else if(nowIndex == 3){
        leftArrow.style.opacity = 1;
        rightArrow.style.opacity = 0.2;
    }
    else{
        leftArrow.style.opacity = 1;
        rightArrow.style.opacity = 1;
    }
}

function moveLeft()
{
    if(nowIndex == 1)
    {
        nowIndex == 1;
    }
    else{
        nowIndex --; 
    } 
    moveSlider(nowIndex);
    checkArrow();
}

function moveRight()
{
    if (nowIndex == 3)
    {
        nowIndex == 3;
    }
    else{
        nowIndex ++;
    }
    moveSlider(nowIndex);
    checkArrow();
}

function moveSlider(index){
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
        case 3:
            moveC();
        break;
    }
}

if(matchMedia("screen and (max-width: 767px)").matches){

    function moveA()
    {
    imageSlider. style.transform = 'translate(0px)'
    nowIndex=1;
    }
    
    function moveB()
    {
        imageSlider. style.transform = 'translate(-350px)'
        nowIndex=2;
    }
    function moveC()
    {
        imageSlider. style.transform = 'translate(-695px)'
        nowIndex=3;
    }
}

window.onresize = function(){ document.location.reload(); };




//제일 위로 올라가기
window.addEventListener('scroll', scrollFunction); // 스크롤이벤트 

let nowScrollPos;
let animationHandler;

let topArrow = document.querySelector('.arrow'); //화살표
topArrow.addEventListener('click', goTop); //화살표이벤트 


function goTop()
{
    animationHandler = requestAnimationFrame(goAnimation);
    
}

function goAnimation()
{
    nowScrollPos += (0-nowScrollPos) * 0.05;
    window.scroll(0, nowScrollPos);
    animationHandler = requestAnimationFrame(goAnimation);
    if(Math.abs(0-nowScrollPos)<1)
    {
        cancelAnimationFrame(animationHandler);
    }

}







//스크롤시 이미지 인터랙션
window.addEventListener('scroll', scrollFunction);
window.addEventListener('load', scrollFunction);


let scrollDivs = document.querySelectorAll('.scrollAni')

function scrollFunction()
{
    nowScrollPos = pageYOffset;
    for(let i = 0; i<scrollDivs.length; i++)
    {
        if(!scrollDivs[i].classList.contains('show'))
        {
            if(window.innerHeight > scrollDivs[i]. getBoundingClientRect().top )   
            {
                scrollDivs[i].classList.add('show');
            } 
        }
    }
    
    if(nowScrollPos >= 300)
    {
        topArrow.classList.add('on');
    }
    else{
        topArrow.classList.remove('on');
    }
}



//페이지 내에서 메뉴 이동
document.addEventListener('DOMContentLoaded', setVal);

var targetScrollPos;
var scrollPos = 0;
var scrollInterval;

function setVal()
{
    nowScrollPos = pageYOffset;
    var menu = document.querySelectorAll('#menus ul li');
    var menu2 = document.querySelectorAll('#f_menus ul li');
    var contents = document.querySelectorAll('.scrollT')

    for(var i = 0; i < menu.length; i++)
    {
        menu[i].addEventListener('click', menuClick);
        menu2[i].addEventListener('click', menuClick);

        function menuClick()
        {
            clearInterval(scrollInterval);
            var index = this.getAttribute('clickVal');
            targetScrollPos = contents[index].offsetTop;            
            moveTo();
        }
    }
}

function moveTo()
{
    nowScrollPos += (targetScrollPos - nowScrollPos) * 0.05;
    window.scroll(0, Math.round(nowScrollPos));

    scrollInterval = requestAnimationFrame(moveTo);

    if(Math.abs(targetScrollPos - nowScrollPos) < 1)
    {
        window.scroll(0, targetScrollPos);
        nowScrollPos = targetScrollPos;
        cancelAnimationFrame(scrollInterval);
    }
}





//햄버거 버튼
let toggleBtn = document.querySelector('.toggleBtn');
let menuList = document.querySelector('#menuList');

toggleBtn.addEventListener('click', clickFn);

function clickFn()
{
    menuList.classList.toggle('active');
}
