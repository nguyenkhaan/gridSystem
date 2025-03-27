const itemContainer = document.querySelector('.gutter.row'); 
const N = 100; 
const elementScript = `<div class="col l24 m3 s12"><div class="item">Item*5</div> </div>`
function renderElement() 
{
    let script = ""; 
    for (let i = 0; i < 100; ++i) script += elementScript; 
    itemContainer.innerHTML = script; 
}
renderElement(); 