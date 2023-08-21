let total = 0;

const purchaseButton = document.getElementById("purchase");
purchaseButton.disabled = true;

const applyButton = document.getElementById("apply");
applyButton.disabled = true;

function handleClickBtn(target) {
  if (target.getAttribute("data-action") === "add-to-cart") {
    const selectedItemContainer = document.getElementById("selected-items");
    const count = selectedItemContainer.childElementCount;
    const itemName = target.parentNode.childNodes[3].innerText;
    const p = document.createElement("p");
    p.innerText = `${count + 1}. ${itemName}`;
    selectedItemContainer.appendChild(p);

    const price = target.parentNode.childNodes[5].innerText.split(" ")[0];
    total = parseInt(total) + parseInt(price);
    document.getElementById("total").innerText = total.toFixed(2);

    if (total > 0) {
      purchaseButton.disabled = false;
    }

    if (total >= 200) {
      applyButton.disabled = false;
    } else {
    }
  }
}

document.getElementById("apply").addEventListener("click", function () {
  const applyInputField = document.getElementById("coupon-input");
  const inputValueString = applyInputField.value;
  applyInputField.value = "";

  const mainTotalElement = document.getElementById("total");
  const mainTotalElementString = mainTotalElement.innerText;
  const mainTotal = parseFloat(mainTotalElementString);

  let discount = 0;
  let newTotal = 0;

  if (inputValueString === "SELL200") {
    discount = (mainTotal * 20) / 100;
    newTotal = mainTotal - discount;
  } else {
    discount = 0;
    newTotal = mainTotal;
  }

  document.getElementById("discount").innerText = discount.toFixed(2);
  document.getElementById("dis-total").innerText = newTotal.toFixed(2);
});

function resetAndGoHome() {
  const selectedItemsContainer = document.getElementById("selected-items");
  selectedItemsContainer.innerHTML = "";

  const totalElement = document.getElementById("total");
  const discountElement = document.getElementById("discount");
  const discountedTotal = document.getElementById("dis-total");

  totalElement.innerText = "00";
  discountElement.innerText = "00";
  discountedTotal.innerText = "00";

  location.reload();
}
