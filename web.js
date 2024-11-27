function replaceAC(html) {
  document.body.innerHTML = html;
}
  
document.getElementById("f-c").addEventListener("click", ()=>{
  replaceAC(fCgame.innerHTML);
})
