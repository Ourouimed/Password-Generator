const GenerateBtn = document.getElementById("Generate"),
    GenerateInp = document.getElementById("inputPass"),
    RangeInp = document.getElementById("range-inp"),
    RangeValue = document.getElementById("range-value"),
    CopyBtn = document.getElementById("Copy"),
    Msg = document.getElementById("msg")




// Get Range Value
RangeValue.innerHTML = RangeInp.value
RangeInp.addEventListener("input" , ()=>{
    RangeValue.innerHTML = RangeInp.value
})


const lowercase = document.getElementById("lowercase"),
    upercase = document.getElementById("upercase"),
    symbols = document.getElementById("symbols"),
    numbers = document.getElementById("numbers")



// Generate Password
const GeneratePass = ()=>{
    // Check selected settings
    let Pass= ""
    let PassExp = []
    if(lowercase.checked){PassExp.push("abcdefghijklmnopqrstuvwxuz")}
    if(upercase.checked){PassExp.push("ABCDEFGHIJKLMNOPQRSTUVWXUZ")}
    if(numbers.checked){PassExp.push("0123456789")}
    if(symbols.checked){ PassExp.push("@#$%&*^-_+?~")}
    for (let i =0 ; i<RangeInp.value;i++){
        let Random = Math.floor(Math.random() * PassExp.length)
        let RandomEL = Math.floor(Math.random() * PassExp[Random].length)
            Pass += PassExp[Random][RandomEL]
    }
        GenerateInp.value = Pass
}

// CopyTp clipBoard
const CopyToClipBoard = ()=>{
    if(GenerateInp.value != ""){
        GenerateInp.select()
        navigator.clipboard.writeText(GenerateInp.value)
        Msg.className = "success"
        Msg.innerHTML = `Password Copied successfully`
        setTimeout(()=>{
            Msg.innerHTML = ''
            Msg.classList.remove("success")
        },2000)
    }
    else {
        Msg.className = "failed"
        Msg.innerHTML = `Please generate Password First!!`
    }  
    
}


// Onclick Events
GenerateBtn.addEventListener("click" , GeneratePass)
CopyBtn.addEventListener("click" , CopyToClipBoard)
