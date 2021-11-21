// let do1Header= $("<h1></h2>").text("Design")
// let do1Description =$("<p></p>").text("Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing.Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.");
// let do2Header= $("<h1></h2>").text("Development")
// let do2Description =$("<p></p>").text("All engineers are fluent in the latest enterprise, mobile and web development technologies.They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.");
// let do3Header = $("<p></p>").text("product Management")
// let do3Description =$("<p></p>").text("Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live. This iterative process allows for changes as business requirements evolve.");
$(".toggleDesign h4").css('font-size','100px')
$(document).ready(function(){
  $("#imagedesign").click(function(){
    $(".toggleDesign").show();
    $(".do1").replaceWith($(".toggleDesign"));
  });

  $(".toggleDesign").click(function(){
    $(".toggleDesign").replaceWith($(".do1"));
});

$( ".row img").hover(function() {
  $( this ).append($("<h3>Project Name</h3>"));
},function(){
  $(this).find("h3").last().remove();
});
});