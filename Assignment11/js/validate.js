$(function(){
    let firstNameError=true;
    let lastNameError=true;
    let cityError=true;
    $("#firstName").keyup(function(){
        validateFirstName();
    })

    function validateFirstName() {
        let firstName = $('#firstName').val();
        if(firstName.length == ""){
            $("#alert-f").css("display" , "block").html("This field is required");
            firstNameError=false;
        }
        else{
            $("#alert-f").css("display" , "none");
            firstNameError=true;
        }
    }

    $("#lastName").keyup(function(){
        validateLastName();
    })

    function validateLastName() {
        let lastName = $('#lastName').val();
        if(lastName.length == ""){
            $("#alert-l").css("display" , "block").html("This field is required");
            lastNameError=false;
        }
        else{
            $("#alert-l").css("display" , "none");
            lastNameError=true;
        }
    }

    $("#city").keyup(function(){
        validateCity();
    })

    function validateCity() {
        let city = $('#city').val();
        if(city.length == ""){
            $("#alert-c").css("display" , "block").html("This field is required");
            cityError=false;
        }
        else{
            $("#alert-c").css("display" , "none");
            cityError=true;
        }
    }

    $("#button").on("click",()=>{
        validateFirstName();
        validateLastName();
        validateCity();
        if(firstNameError===true && lastNameError===true && cityError===true){
            return true
        }
        else{
            return false
        }
    })
})