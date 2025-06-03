document.addEventListener('DOMContentLoaded', function() {
    new TypeIt('#typeit', {
        speed: 90,
        startDelay: 300,
    })
        .type('안녕하세요! 반갑습니다 :)', {delay: 1000})
    //   .move(-6, {delay: 100})
    //   .delete(15, {delay: 500})
    //   .type("사실 안 반갑습니다. 집에 가고싶", {delay: 1000})
        .go();
});
// document.addEventListener('DOMContentLoaded', function() {
//     new TypeIt('#typeit2', {
//         speed: 90,
//         startDelay: 300,
//     })
//         .type('신입 백엔드 개발자', {delay: 1000})
//     //   .move(-6, {delay: 100})
//     //   .delete(15, {delay: 500})
//     //   .type("사실 안 반갑습니다. 집에 가고싶", {delay: 1000})
//         .go();
// });s