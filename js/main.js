$(".overlay").hide();

$(".menu-btn").click(function(e){
    $(".menu-btn i").toggleClass("fa-bars fa-times");
    $("nav").toggle();
    e.preventDefault();
    
});

/*$(".menu-locations").click(function(e){
    $(".overlay").toggle();
    e.preventDefault();
    
});

$(".locations a").click(function(e){
    $(".overlay").toggle();
    e.preventDefault(); 
});*/

$(".menu-locations, .locations a").click(function(e){
    $(".overlay").toggle();
    e.preventDefault(); 
});

$("main a").click(function(e){
    e.preventDefault();
})