// let do1Header= $("<h1></h2>").text("Design")
// let do1Description =$("<p></p>").text("Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing.Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.");
// let do2Header= $("<h1></h2>").text("Development")
// let do2Description =$("<p></p>").text("All engineers are fluent in the latest enterprise, mobile and web development technologies.They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.");
// let do3Header = $("<p></p>").text("product Management")
// let do3Description =$("<p></p>").text("Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live. This iterative process allows for changes as business requirements evolve.");
// let name = ("#name").val();
let email = ("#email");
let message = ("#message");
let myForm = ("#contact-form");
console.log(name);

// $("#contact-form").submit(
//   function(){
//     name = name.val();
//     email = email.val();
//     message = message.val();

//     if(!name || !email || !message){
//       alert("fill all the values");
//       return false;
//     }
//     else{
//       alert('Thankyou for contacting us!');
//       return true;
//     }
//   }
// )

$(document).ready(function(){
  $("h4,p").addClass("text-center");
  // toggle 1
  $("#imagedesign").click(function(){
    $(".toggleDesign").show();
    $(".do1").hide();
    // $(".do1").replaceWith($(".toggleDesign"));
  });

  $(".toggleDesign").click(function(){
   $(this).hide();
    $(".do1").show();
});

// toggle 2
$("#imagedev").click(function(){
  $(".toggleDev").show();
  $(".do2").hide();
  // $(".do1").replaceWith($(".toggleDesign"));
});

$(".toggleDev").click(function(){
 $(this).hide();
  $(".do2").show();
});

// toggle 3
$("#imageproduct").click(function(){
  $(".toggleProduct").show();
  $(".do3").hide();
  // $(".do1").replaceWith($(".toggleDesign"));
});

$(".toggleProduct").click(function(){
 $(this).hide();
  $(".do3").show();
});





$( ".row img").hover(function() {
  $( this ).append($("<h3>Project Name</h3>"));
},function(){
  $(this).find("h3").last().remove();
});
});