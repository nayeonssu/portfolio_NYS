/* ------------------------------------------------------------------------------- 전체 스와이퍼 */
const wrap = new Swiper('#wrap',{
    direction : 'vertical',
    mousewheel : true,
    speed:1000,
})/* 스와이퍼가 될 대상의 전체묶음 */

/* ------------------------------------------------------------------------------- 화면 이동할때 a태그 위치 이동되면서 디자인 보임 */
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
/* ------------------------------------------------------------------------------- contact */
const contactLink = document.querySelector('#header-wrap > a'); // nav 밖 a

contactLink.addEventListener('click', (e) => {
    e.preventDefault(); // a 이동 막기

    // 스와이퍼 가장 마지막 슬라이드로 이동
    wrap.slideTo(document.querySelectorAll('.swiper-slide').length - 1, 1000);/* 마지막 인덱스는 5이기 때문에 6-1 = 5 / 1초동안 이동 */

    nav.forEach(n => n.classList.remove('active'));/* nav버튼 .active제거 */
});

/* ------------------------------------------------------------------------------- 웹 리디자인 */
const project1 = new Swiper('#redesign',{
    autoplay:{delay:4000},/* 속도 */
    loop:true,/* 무한반복 */
})