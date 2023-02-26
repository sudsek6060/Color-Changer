const btn = document.querySelector('#button')
const box = document.querySelector('#canvas')

const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";
  
    for (let i = 0; i < 6; i++) {
      cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
  };
randomColor();
const changeColor = function(){
    box.style.backgroundColor = randomColor()
}
btn.addEventListener('click', changeColor)