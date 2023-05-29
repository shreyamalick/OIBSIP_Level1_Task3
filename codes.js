function convert(){
    let val = document.getElementById("num");
    let result = document.getElementById("result");
    let input = document.getElementById("temp");
    let output = document.getElementById("temp1");
   
    val.addEventListener("keyup", convert);
    input.addEventListener("change", convert);
    output.addEventListener("change", convert);

    let inputvalue=input.value;
    let outputvalue=output.value;
    
    if(inputvalue === "Celcius" && outputvalue === "Fahrenheit"){
        result.value = Number((val.value)*(9/5))+32;
    }else if(inputvalue === "Celcius" && outputvalue === "Kelvin"){
        result.value = Number(val.value)+273.15;
    }else if(inputvalue === "Celcius" && outputvalue === "Celcius" ){
        result.value = val.value;
    }

    if(inputvalue === "Fahrenheit" && outputvalue === "Celcius"){
        result.value = Number((val.value-32)*5)/9;
    }else if(inputvalue === "Fahrenheit" && outputvalue === "Kelvin"){
        result.value = Number((val.value-32)*5/9)+273.15;
    }else if(inputvalue === "Fahrenheit" && outputvalue === "Fahrenheit" ){
        result.value = val.value;
    }

    if(inputvalue === "Kelvin" && outputvalue === "Celcius"){
        result.value = Number(val.value)-273.15;
    }else if(inputvalue === "Kelvin" && outputvalue === "Fahrenheit"){
        result.value = Number((val.value-273.15)*9/5)+32;
    }else if(inputvalue === "Kelvin" && outputvalue === "Kelvin" ){
        result.value = val.value;
    }

}

function reset(){
    result.value = "";
}