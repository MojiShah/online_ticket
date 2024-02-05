let countrySelectBox = document.querySelector(".countrySelect");
let citySelectBox = document.querySelector(".citySelect");

let countriesData = {
    Iran : ['Tehran','Tabriz','Esfahan','Mashhad','Ahwaz'],
    Turkey : ["Istanbul",'Ankara','Ezmir','Antaliya'],
    USA : ['Los Angeles','San Diego','NewYork','Washington']
}

countrySelectBox.addEventListener('change',function(){
    console.log('changed');
    if(countrySelectBox.value=='Please Select'){
        citySelectBox.innerHTML="";
        citySelectBox.innerHTML += "<option>Select city</option>";
    }else{
        let mainCountryName=countrySelectBox.value;
        let mainCountryCities=countriesData[mainCountryName];
        console.log(mainCountryCities);
        citySelectBox.innerHTML="";
        mainCountryCities.forEach(function(x){
            citySelectBox.innerHTML+="<option>"+x+"</option>";
        });
    }
})



// users.forEach(function (name) {
//   console.log(name);
// });



