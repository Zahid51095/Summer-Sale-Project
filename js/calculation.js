let total = 0;

const purchaseButton = document.getElementById("purchase");
purchaseButton.disabled = true;

const applyButton = document.getElementById("apply");
applyButton.disabled = true;

function handleClickBtn(target) {
    // const couponInput = document.getElementById("apply");
    // const couponCode = couponInput.value;
    const selectedItemContainer = document.getElementById("selected-items");
    const count = selectedItemContainer.childElementCount;
    const itemName = target.parentNode.childNodes[3].innerText;
    const p = document.createElement("p");
    p.innerText =`${count + 1}. ${itemName}`;
    selectedItemContainer.appendChild(p);

    const price = target.parentNode.childNodes[5].innerText.split(" ")[0];
    total = parseInt (total) + parseInt (price);
    document.getElementById("total").innerText = total;
    
   if(total>0) {
    purchaseButton.disabled = false;
   }

    let discount = 0;
    let newTotal = 0
    if(total >= 200 ) {
        applyButton.disabled = false;
        discount = (total * 20)/100;
        newTotal = total - discount;

    }
    else {
        discount = 0;
        newTotal = total;
        
    }
    
    document.getElementById("discount").innerText = discount;
    document.getElementById("dis-total").innerText = newTotal;
  
}





