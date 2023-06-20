// 모집글 작성하기 모달창 영역
let searchButton = document.querySelector(".search-button");
let modalWrap = document.querySelector(".modal-wrap");

searchButton.addEventListener("click", function () {
    modalWrap.style.display = "flex";
    document.body.style.overflow = "hidden"; //모달창 스크롤 막기
});

modalWrap.addEventListener("click", function (e) {
    if($(e.target).hasClass("modal-wrap")){
        modalWrap.style.display = "none";
        document.body.style.overflow = "unset"; //모달창 스크롤 복구
    }

});


// 탑텐 슬라이드 배너 영역
$(function(){
    let topten_length = $(".topten-cardbox").length;
    let topten_width = topten_length * 525;
    $(".topten-body").css("width",`${topten_width}px`);


    let currentIdx = 1;
    $(".topten-right-arrow").on(
        "click",
        function(){

            if (currentIdx < (topten_length/2) ){
                // $('topten-right-arrow').attr("fill", "#000");
                let tmp = currentIdx*1050;
                $(".topten-body").css("transform",`translate(-${tmp}px)`);
                currentIdx += 1;
            }
        }
    );
    $(".topten-left-arrow").on(
        "click",
        function(){
            if (currentIdx > 1 ) {
                currentIdx -= 1;
                let tmp = (currentIdx-1) * 1050;
                $(".topten-body").css("transform", `translate(${tmp}px)`);

            }
        }
    );
});

// 스터디 슬라이드 배너 영역
$(function(){
    let study_length = $(".study-cardbox").length;
    let study_width = study_length * 525;
    $(".study-body").css("width",`${study_width}px`);

    let currentIdx = 1;
    $(".study-right-arrow").on(
        "click",
        function(){

            if (currentIdx < (study_length/2) ){

                let tmp = currentIdx*1050;
                $(".study-body").css("transform",`translate(-${tmp}px)`);
                currentIdx += 1;

            }
        }
    );
    $(".study-left-arrow").on(
        "click",
        function(){
            if (currentIdx > 1 ) {
                currentIdx -= 1;
                let tmp = (currentIdx-1) * 1050;
                $(".study-body").css("transform", `translate(${tmp}px)`);

            }
        }
    );
});

// 네비 영역 마우스오버 시 텍스트 강조
$('.nav-span1').on('mouseover', function(){
    $('.nav-span1').css("color","rgb(37, 99, 235)")
    $('.nav-span1').css("font-weight","600")
});

$('.nav-span1').on('mouseout', function(){
    $('.nav-span1').css("color","rgb(100, 116, 139)")
    $('.nav-span1').css("font-weight","500")
});

$('.nav-span2').on('mouseover', function(){
    $('.nav-span2').css("color","rgb(37, 99, 235)")
    $('.nav-span2').css("font-weight","600")
});

$('.nav-span2').on('mouseout', function(){
    $('.nav-span2').css("color","rgb(100, 116, 139)")
    $('.nav-span2').css("font-weight","500")
});

$('.nav-span3').on('mouseover', function(){
    $('.nav-span3').css("color","rgb(37, 99, 235)")
    $('.nav-span3').css("font-weight","600")
});

$('.nav-span3').on('mouseout', function(){
    $('.nav-span3').css("color","rgb(100, 116, 139)")
    $('.nav-span3').css("font-weight","500")
});

