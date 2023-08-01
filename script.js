const allcol=document.querySelectorAll('.col1')
const btnEle=document.querySelector('button')
let count=0
let counter=1
let flag;
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
            flag=1
            alert('You Won')
            
        }
        if(counter>8 && count<5){
            alert("You Lose")
        }
        }
        if(flag==1){
            counter=9
            alert("Game Over")
            
        }
       
    })
}
btnEle.addEventListener('click',()=>{
    btnEle.style.transform='scale(1.5)'
    btnEle.style.transition='ease-out 2s'
    setTimeout(() => {
        btnEle.style.transform='scale(1)'
    }, 1000);
    
    // window.location.reload()
    for(col of allcol){
        // console.log(col)
        all=col.children
        // console.log(all)
        for(child of all){
            // console.log('hello',child)
            child.remove()
            count=0
            counter=1
        }
    }
})

