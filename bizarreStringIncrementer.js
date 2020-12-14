let incrementTheValue = (value) =>{
    let is_number = Number.isInteger(parseInt(value.substr(-1)));
    if(!is_number){
        console.log(value+1) 
    }else{
        let intNo = value.replace(/\D/g, ''); 
        value = value.replace(/[0-9]/g, '');
        intNo = parseInt(intNo)+parseInt(1);
        console.log(value+intNo)
    }
}

incrementTheValue('barun');
incrementTheValue('barun24');
