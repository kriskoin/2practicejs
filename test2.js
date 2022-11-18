const  doAsyncWithPromises = (numero1,numero2)=>{
    const resultado = numero1 + numero2
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(resultado)
        },500)
    })
}
doAsyncWithPromises (3,2,(result)=>{
    console.log(result)
})
