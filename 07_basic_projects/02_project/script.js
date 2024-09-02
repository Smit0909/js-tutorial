document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let height = parseFloat(document.querySelector("#height").value);
  let weight = parseFloat(document.querySelector("#weight").value);
  let result = document.querySelector("#results");


  if(isNaN(height) || isNaN(weight) )
  {
    result.innerHTML = "Please enter valid values";
  }
  else{
    let bmi = (weight / ((height*height)/10000)).toPrecision(4);
    if(bmi < 18.6){
        result.innerHTML = `Your BMI is ${bmi} and you are under-weight`;
    }
    else if(bmi > 18.9 && bmi < 24.9)
    {
        result.innerHTML = `Your BMI is ${bmi} and you have normal weight`;
    }
    else if(bmi > 24.9)
    {
        result.innerHTML = `Your BMI is ${bmi} and you are over-weight`;
    }
  }
});
