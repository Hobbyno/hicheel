// $(document).ready(function(){
//     $("button").click(function()
//         {
//             $("p").hide();
//         });
//         $(".btn2").click(function(){
//             $("p").show();
//         })
// });



// var heading = $("h1");
// document.write(heading)


// $("p").on("myCustomEvent",function(event,myName){
//     $(this).text(myName + " Hello?");
//     $("span").stop().css("opacity",1).text("myName = " +myName).fadeIn(30).fadeOut(1000);
// });
// $("button").click(function(){
//     $("p").trigger("myCustomEvent",["Holboo"]);
// });


// $(document).ready(function(){
//     $(".burger-nav").on("click", function(){
//     console.log("click");
//         $("header nav ul").toggleClass("open");
      
//     });
// });


$(document).ready(()=>{
    $('.hint').hide();
    $('.wrong').hide();
    $('.correct').hide();
 
$(".hint-box").on('click',()=>{
    $(".hint").slideToggle(1000);
});
$(".wrong-answer-one").on('click',()=>{
    $('.wrong-answer-one').fadeOut('slow');
    $('.wrong').show();
});
$('.wrong-answer-two').on('click',()=>{
    $('.wrong-answer-two').fadeOut('slow');
    $('.wrong').show();
    
 });
 $('.wrong-answer-three').on('click',()=>{
    $('.wrong-answer-three').fadeOut('slow');
    $('.wrong').show();
 
});
$('.correct-answer').on('click',()=>{
    $('.wrong').hide();
    $('.wrong-answer-one').fadeOut('fast');
    $('.wrong-answer-two').fadeOut('fast');
    $('.wrong-answer-three').fadeOut('fast');
    $('.correct').show();
});
});
   


// $(document).ready(function(){
//     $(".hint").hide();
//     $(".wrong").hide();
//     $(".correct").hide();
// });

// $(".hint-box").on("click",()=>{
//     $(".hint").slideToggle(1000);
// });

// $(".wrong-answer-one").on("click", function(){
//     $(".wrong").show();

// });
// $(".wrong-answer-two").on("click", function(){
//     $(".wrong").show();

// });
// $(".wrong-answer-three").on("click", function(){
//     $(".wrong").show();

// });

// $(".correct-answer").on("click", function(){
//     $(".correct").show();
//     $(".wrong").hide();
//     $(".wrong-answer-one").hide();
//     $(".wrong-answer-two").hide();
//     $(".wrong-answer-three").hide();
// });
