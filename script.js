const allcol=document.querySelectorAll('.col1')
const btnEle=document.querySelector('button')
let count=0
for(col of allcol){
    col.addEventListener('click',(e)=>{
        let imgEle=document.createElement('img')
        imgEle.style.width='100%'
        imgEle.style.height='100%'
        imgEle.style.backgroundColor='rgb(120, 120, 221)'
        let imgSrc=e.target.getAttribute('value')
        
        imgEle.src=imgSrc
        e.target.appendChild(imgEle)
        if(imgSrc=="https://cdn0.iconfinder.com/data/icons/board-games/48/Paul-30-512.png"){
            count=count+1
        }
        if(count==5){
            alert('Won')
        }
       
    })
}
btnEle.addEventListener('click',()=>{
    btnEle.style.scale='1.5'
    btnEle.style.transform='ease-in .5s'
    window.location.reload()
})

