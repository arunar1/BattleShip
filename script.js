const allcol=document.querySelectorAll('.col1')
const btnEle=document.querySelector('button')
let count=0
let counter=1
for(col of allcol){
    col.addEventListener('click',(e)=>{
        if(counter<=8){
            let imgEle=document.createElement('img')
        imgEle.style.width='100%'
        imgEle.style.height='100%'
        imgEle.style.backgroundColor='rgb(120, 120, 221)'
        let imgSrc=e.target.getAttribute('value')
        counter=counter+1
        imgEle.src=imgSrc
        e.target.appendChild(imgEle)
        if(imgSrc=="https://cdn0.iconfinder.com/data/icons/board-games/48/Paul-30-512.png"){
            count=count+1
        }
        if(count==5){
            alert('You Won')
            flag=1
        }
        if(counter>8 && count<5){
            alert("You Lose")
        }
        }
        if(flag==1){
            alert("Game Over")
            counter=9
        }
       
    })
}
btnEle.addEventListener('click',()=>{
    btnEle.style.scale='1.5'
    btnEle.style.transform='ease-in .5s'
    window.location.reload()
})

