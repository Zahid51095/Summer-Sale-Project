let total = 0;




function handleClickBtn(target) {
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.parentNode.childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

    const price = target.parentNode.childNodes[5].innerText.split(" ")[0];
    total = parseInt (total) + parseInt (price);
    document.getElementById("total").innerText = total;


    let discount = 0;
    let newTotal = 0
    if(total >= 200) {
        discount = (total * 20)/100;
        newTotal = total - discount;

    }
    else {
        
    }
    
    document.getElementById("discount").innerText = discount;
    document.getElementById("dis-total").innerText = newTotal;
}