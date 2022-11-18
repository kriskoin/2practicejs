// delay
const operation = (numero1,numero2,op)=>{
    return setTimeout( ()=>{
        op(numero1,numero2)
    },2500)
}

operation (1,2,(a,b)=>{
    console.log (a+b)
})
