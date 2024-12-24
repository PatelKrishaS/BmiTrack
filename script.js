const form = document.querySelector('form');
//this usecase will give you empty
// results.innerHTML= `Please enter a valid height: ${height}`;


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height =parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results= document.querySelector('#results');

    if(height === ' ' || height< 0 || isNaN(height) )
      results.innerHTML= `Please enter a valid height: ${height}`;

    else if(weight === ' ' || weight< 0 || isNaN(weight) )
      results.innerHTML= `Please enter a valid weight: ${weight}`;

    else{
        const bmi = (weight/ ((height*height)/ 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`

        if(bmi <= 18.6){
          weight_guide.innerHTML= "Under Weight"
        }
        else if(  18.6 <= bmi  && bmi <= 24.9 ){
            weight_guide.innerHTML= "Normal Range"
        }
        else{
            weight_guide.innerHTML= "Overweight"
        }
      }
} );

