let listTagA = document.getElementsByTagName("A")
let hoverSound = document.getElementById("beat-hover")
let clickrSound = document.getElementById("click-hover")


for(let i = 0; i < listTagA.length ; i++){
    let ATag = listTagA[i]
    ATag.addEventListener('mouseover',function(){
        try{
            hoverSound.play()
        }catch{
            
        }
        
    }, false)
}
