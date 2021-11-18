function validate(event){

    const firstName=document.getElementById("firstName").value;
    if(firstName==""){
        const errFirstName=document.getElementById("errFirstName");
        errFirstName.innerText="Please enter the First Name";
        event.preventDefault();
        return false;
    }

    const lastName=document.getElementById("lastName").value;
    if(lastName==""){
        const errLastName=document.getElementById("errLastName");
        errLastName.innerText="Please enter the Last Name";
        event.preventDefault();
        return false;
    }

    const city=document.getElementById("city").value;
    if(city==""){
        const errCity=document.getElementById("errCity");
        errCity.innerText="Please enter the City Name";
        event.preventDefault();
        return false;
    }
    return true;
}