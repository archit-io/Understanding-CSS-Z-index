document.getElementById('elementInput1').oninput = showValue1
document.getElementById('elementInput1').onblur = setIndex1

document.getElementById('elementInput2').oninput = showValue2
document.getElementById('elementInput2').onblur = setIndex2

document.getElementById('elementInput3').oninput = showValue3
document.getElementById('elementInput3').onblur = setIndex3

document.getElementById('elementInput4').oninput = showValue4
document.getElementById('elementInput4').onblur = setIndex4

document.getElementById('elementInput5').oninput = showValue5
document.getElementById('elementInput5').onblur = setIndex5

document.getElementById('elementInput6').oninput = showValue6
document.getElementById('elementInput6').onblur = setIndex6


function setIndex1(e) {     
    const val = e.target.value
    const arr = ['auto','inherit','initial','revert','revert-layer','unset']
    let _ = Number.isInteger(Number(val)) || arr.includes(val) ? val : 'Enter a valid z-index value'
    document.getElementById('element1ZIndex').innerText = `z-index: ${_}`
    const zIdx = _ === 'Enter a valid z-index value' ? 'auto' : _
    document.getElementById('element1').style.zIndex = zIdx        
}

function showValue1(e) {
    document.getElementById('element1ZIndex').innerText = `z-index: ${e.target.value}`      
}


function setIndex2(e) {     
    const val = e.target.value
    const arr = ['auto','inherit','initial','revert','revert-layer','unset']
    let _ = Number.isInteger(Number(val)) || arr.includes(val) ? val : 'Enter a valid z-index value'
    document.getElementById('element2ZIndex').innerText = `z-index: ${_}`
    const zIdx = _ === 'Enter a valid z-index value' ? 'auto' : _
    document.getElementById('element2').style.zIndex = zIdx        
}

function showValue2(e) {
    document.getElementById('element2ZIndex').innerText = `z-index: ${e.target.value}`      
}


function setIndex3(e) {     
    const val = e.target.value
    const arr = ['auto','inherit','initial','revert','revert-layer','unset']
    let _ = Number.isInteger(Number(val)) || arr.includes(val) ? val : 'Enter a valid z-index value'
    document.getElementById('element3ZIndex').innerText = `z-index: ${_}`
    const zIdx = _ === 'Enter a valid z-index value' ? 'auto' : _
    document.getElementById('element3').style.zIndex = zIdx        
}

function showValue3(e) {
    document.getElementById('element3ZIndex').innerText = `z-index: ${e.target.value}`      
}


function setIndex4(e) {     
    const val = e.target.value
    const arr = ['auto','inherit','initial','revert','revert-layer','unset']
    let _ = Number.isInteger(Number(val)) || arr.includes(val) ? val : 'Enter a valid z-index value'
    document.getElementById('element4ZIndex').innerText = `z-index: ${_}`
    const zIdx = _ === 'Enter a valid z-index value' ? 'auto' : _
    document.getElementById('element4').style.zIndex = zIdx        
}

function showValue4(e) {
    document.getElementById('element4ZIndex').innerText = `z-index: ${e.target.value}`      
}



function setIndex5(e) {     
    const val = e.target.value
    const arr = ['auto','inherit','initial','revert','revert-layer','unset']
    let _ = Number.isInteger(Number(val)) || arr.includes(val) ? val : 'Enter a valid z-index value'
    document.getElementById('element5ZIndex').innerText = `z-index: ${_}`
    const zIdx = _ === 'Enter a valid z-index value' ? 'auto' : _
    document.getElementById('element5').style.zIndex = zIdx        
}

function showValue5(e) {
    document.getElementById('element5ZIndex').innerText = `z-index: ${e.target.value}`      
}



function setIndex6(e) {     
    const val = e.target.value
    const arr = ['auto','inherit','initial','revert','revert-layer','unset']
    let _ = Number.isInteger(Number(val)) || arr.includes(val) ? val : 'Enter a valid z-index value'
    document.getElementById('element6ZIndex').innerText = `z-index: ${_}`
    const zIdx = _ === 'Enter a valid z-index value' ? 'auto' : _
    document.getElementById('element6').style.zIndex = zIdx        
}

function showValue6(e) {
    document.getElementById('element6ZIndex').innerText = `z-index: ${e.target.value}`      
}


document.getElementById('resetButton').onclick = resetAll 

function resetAll() {
    document.getElementById('element1ZIndex').innerText = `z-index: auto`
    document.getElementById('element1').style.zIndex = 'auto' 
    document.getElementById('elementInput1').value=''

    document.getElementById('element2ZIndex').innerText = `z-index: auto`
    document.getElementById('element2').style.zIndex = 'auto' 
    document.getElementById('elementInput2').value=''

    document.getElementById('element3ZIndex').innerText = `z-index: auto`
    document.getElementById('element3').style.zIndex = 'auto' 
    document.getElementById('elementInput3').value=''

    document.getElementById('element4ZIndex').innerText = `z-index: auto`
    document.getElementById('element4').style.zIndex = 'auto' 
    document.getElementById('elementInput4').value=''

    document.getElementById('element5ZIndex').innerText = `z-index: auto`
    document.getElementById('element5').style.zIndex = 'auto' 
    document.getElementById('elementInput5').value=''

    document.getElementById('element6ZIndex').innerText = `z-index: auto`
    document.getElementById('element6').style.zIndex = 'auto' 
    document.getElementById('elementInput6').value=''
}