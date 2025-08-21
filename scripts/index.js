/* ===================================================================================================== 전체 스와이퍼 */
const wrap = new Swiper('#wrap',{
    direction : 'vertical',
    mousewheel : true,
    speed:1000,
})/* 스와이퍼가 될 대상의 전체묶음 */

/* ===================================================================================================== 화면 이동할때 a태그 위치 이동되면서 디자인 보임 */
const nav = document.querySelectorAll('nav a'); //클릭되는 a태그 전체

nav.forEach((n, i) => n.classList.remove('active'));
nav[0].classList.add('active'); // INTRO 기본 활성화

//수직 스와이프 이동 함수
//수직 스와이프변수명.slideTop(이동인덱스값, 지속시간)
nav.forEach((obj,idx)=>{
    console.log(obj,idx)
    obj.addEventListener('click',(e)=>{
        e.preventDefault();//a 눌렀을때 화면 맨 위로 올라가는 현상 막기

        wrap.slideTo(idx, 1000);/* a 클릭했을때 1초동안 그 위치로 이동한다. */

        nav.forEach(n => n.classList.remove('active')); // 다른 버튼 제거
        obj.classList.add('active'); // 클릭한 버튼 적용
    })
})

wrap.on('slideChange', function () {
    const currentIndex = wrap.activeIndex; // 현재 슬라이드 인덱스

    // 해당 슬라이드에 맞는 nav 버튼만 active
    nav.forEach((n, idx) => {
        n.classList.toggle('active', idx === currentIndex);
    });
});

/* ===================================================================================================== 웹 리디자인 */
const project1 = new Swiper('#redesign',{
    autoplay:{delay:4000},/* 속도 */
    loop:true,/* 무한반복 */
    navigation:{
        prevEl:'#redesign .swiper-button-prev',
        nextEl:'#redesign .swiper-button-next',
    },
})

/* ===================================================================================================== 배너 디자인 */
// ------------------------------------------------------------------------------- 배너디자인 프로젝트
const designBanner = new Swiper('.design1-banner',{
    slidesPerView:2.2,
    autoplay:{delay:1,},
    spaceBetween:20,
    speed:4000,
    loop:true,
})
// ------------------------------------------------------------------------------- sns디자인 프로젝트
const designSns = new Swiper('.design2-sns',{
    slidesPerView:3.5,
    autoplay:{delay:0,},
    spaceBetween:20,
    speed:5000,
    loop:true,
})
// ------------------------------------------------------------------------------- 상세디자인 프로젝트
const designSube = new Swiper('.design3-subpage', {
    slidesPerView:1,
    autoplay:{delay:2000,},
    effect: 'fade',
    loop:true,
    pagination:{
        el:'.design3-subpage .swiper-pagination',
        type:'bullets',
    },
})

//------------------------------------------------------------------------------- 배너 클릭 시 팝업 실행(클릭한 이미지가 팝업 이미지로 교체)
const lengthProject = document.querySelectorAll('.design2-sns .swiper-slide')/* 세로배너 4개의 스와이퍼가 모두 잡힘 */
const popup = document.querySelector('.popup_bg')/* 팝업실행할때 */
console.log(lengthProject,popup)

for(let banner of lengthProject){
    banner.addEventListener('click',()=>{
        popup.style.display = 'block'/* popup의 style의 display를 보이게 하겠다 */ /* css에서 안보이게 설정해놨엤다. */
        popup.children[0].children[0].src = banner.children[0].src/* css -> popup_bg .popup img 자식을 잡고 싶은거라면 childern을 써야한다. */
        wrap.mousewheel.disable();//disable()은 막기 enable()은 풀기
    })
}
//------------------------------------------------------------------------------- 팝업창 닫을때
popup.addEventListener('click',()=>{
    popup.style.display = 'none'
    wrap.mousewheel.enable()//스크롤 기능 풀기
})/* 팝업을 실행했을 때 아무곳이나 누르면 닫힌다. */

/* ===================================================================================================== 게임 디자인 */
const gamedesign = new Swiper('#game-d',{
    autoplay:{delay:4000},/* 속도 */
    loop:true,/* 무한반복 */
    navigation:{
        prevEl:'#game-d .swiper-button-prev',
        nextEl:'#game-d .swiper-button-next',
    },
})

/* ===================================================================================================== 컨택 */
const contactLink = document.querySelector('#header-wrap > a'); // nav 밖 a

contactLink.addEventListener('click', (e) => {
    e.preventDefault(); // a 이동 막기

    // 스와이퍼 가장 마지막 슬라이드로 이동
    wrap.slideTo(document.querySelectorAll('.swiper-slide').length - 1, 1000);/* 마지막 인덱스는 5이기 때문에 6-1 = 5 / 1초동안 이동 */

    nav.forEach(n => n.classList.remove('active'));/* nav버튼 .active제거 */
});
