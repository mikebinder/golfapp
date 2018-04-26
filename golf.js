 // need a current clubs array that will change depending on what clubs you want to practice with.

    //need to have an array randomly generated shot types. These are: High Draw, Low Draw, High Cut, Low Cut, Straight

    //need to have an array of randomly generated don't miss areas. These are: Short Right, Long Right, Short Left, Long Left.

    //Eventually a way to track whether or not the shot was successful. 




    var clubs = ["3 Iron", "4 Iron", "5 Iron","6 Iron", "7 Iron", "8 Iron", "9 Iron", "Sand Wedge", "3 Wood", "Driver"]
    var shapes = ["High Draw", "Low Draw", "High Cut", "Low Cut", "Straight"]
    var dontMiss = ["Short Left", "Long Left", "Short Right", "Long Right"]

 
    

   

    $(document).ready(function(){

        $('.btn-floating').hide();
        var score = 0;

    
$( "#shot" ).click(function() {
    
    

    var club = clubs[Math.floor(Math.random()*clubs.length)]
    var shape = shapes[Math.floor(Math.random()*shapes.length)]
    var miss = dontMiss[Math.floor(Math.random()*dontMiss.length)]

    if (club === "Driver") {

    $('#club').text(club);
    $('#shape').text(shape);
    
   
    }
    else  {
        $('#club').text(club);
        $('#shape').text(shape);
        $('#dontMiss').text(miss)
        

    }

    $(".btn-floating").fadeIn(1000)
    
  
});

$( "#YES" ).click(function() {
    
    var club = clubs[Math.floor(Math.random()*clubs.length)]
    var shape = shapes[Math.floor(Math.random()*shapes.length)]
    var miss = dontMiss[Math.floor(Math.random()*dontMiss.length)]

    if (club === "Driver") {

    $('#club').text(club);
    $('#shape').text(shape);
    
   
    }
    else  {
        $('#club').text(club);
        $('#shape').text(shape);
        $('#dontMiss').text(miss)
        

    }

    score++;
    alert(score)
    


})

$( "#NO" ).click(function() {
    var club = clubs[Math.floor(Math.random()*clubs.length)]
    var shape = shapes[Math.floor(Math.random()*shapes.length)]
    var miss = dontMiss[Math.floor(Math.random()*dontMiss.length)]

    if (club === "Driver") {

    $('#club').text(club);
    $('#shape').text(shape);
    
   
    }
    else  {
        $('#club').text(club);
        $('#shape').text(shape);
        $('#dontMiss').text(miss)
        

    }

    


})



    })