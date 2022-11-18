// delay
const operation = (numero1,numero2,op)=>{
    return setTimeout( ()=>{
        op(numero1,numero2)
    },2500)
}
const opTest = (a,b)=>{
    console.log (a*b)
}
//operation (3,2,(a,b)=>{
//    console.log (a+b)
//})

operation (3,2,opTest)