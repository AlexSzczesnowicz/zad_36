function compare(var1, var2){
    let res_ult;
    if (var1==20 | var2==20 | var1+var2 == 20){
        res_ult = true;
    } else {
        res_ult = false;
    }
    return res_ult;
}
console.log(compare(10,10));
//compare(10,11);