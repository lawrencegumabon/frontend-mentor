// FOR NAV BAR
const burger = document.querySelector("#burger");
const nav = document.querySelector("#nav");

function updateNavDisplay() {
  if (window.innerWidth >= 768) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
}

updateNavDisplay();

burger.addEventListener("click", () => {
  if (nav.style.display == "none") {
    burger.src = "/images/icon-close.svg";
    nav.style.display = "block";
  } else {
    burger.src = "/images/icon-menu.svg";
    nav.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  updateNavDisplay();
});

// FOR MOBILE VIEW / VIEWING IMAGE
const imagePaths = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

let currentIndex = 0;

const prev = document.querySelector("#previous");
const next = document.querySelector("#next");
const prev2 = document.querySelector("#previous2");
const next2 = document.querySelector("#next2");
const image = document.querySelector("#imageDisplay");
const imagePopup = document.querySelector("#imagePopup");

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imagePaths.length;
  image.src = imagePaths[currentIndex];
});

prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
  image.src = imagePaths[currentIndex];
});

const imageContainer = document.querySelector("#imageContainer");
const closeImg = document.querySelector("#closeImg");

image.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    imageContainer.style.display = "none";
  } else {
    imageContainer.style.display = "flex";
  }
});

next2.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imagePaths.length;
  imagePopup.src = imagePaths[currentIndex];
});

prev2.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
  imagePopup.src = imagePaths[currentIndex];
});

closeImg.addEventListener("click", () => {
  imageContainer.style.display = "none";
});

// FOR CART ORDERING
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const qty = document.querySelector("#qty");

minus.addEventListener("click", () => {
  if (qty.textContent > 0) {
    qty.textContent--;
  }
});

plus.addEventListener("click", () => {
  qty.textContent++;
});

const cartCount = document.querySelector("#cartCount");
const addCart = document.querySelector("#cartButton");

addCart.addEventListener("click", () => {
  let currentCartCount = parseInt(cartCount.textContent);
  let currentQty = parseInt(qty.textContent);

  currentCartCount += currentQty;

  cartCount.textContent = currentCartCount;

  qty.textContent = 0;
});

// TO CHANGE IMAGE WHEN THUMBNAIL IS CLICKED ON MAIN SCREEN

const image1 = document.querySelector("#image-1");
const image2 = document.querySelector("#image-2");
const image3 = document.querySelector("#image-3");
const image4 = document.querySelector("#image-4");
// Using the "image" variable same as at the top

image1.addEventListener("click", () => {
  image.src = imagePaths[0];
});

image2.addEventListener("click", () => {
  image.src = imagePaths[1];
});

image3.addEventListener("click", () => {
  image.src = imagePaths[2];
});

image4.addEventListener("click", () => {
  image.src = imagePaths[3];
});

// TO CHANGE IMAGE WHEN THUMBNAIL IS CLICKED ON POP UP

const thumb1 = document.querySelector("#thumb-1");
const thumb2 = document.querySelector("#thumb-2");
const thumb3 = document.querySelector("#thumb-3");
const thumb4 = document.querySelector("#thumb-4");
// Using the "image" variable same as at the top

thumb1.addEventListener("click", () => {
  imagePopup.src = imagePaths[0];
});

thumb2.addEventListener("click", () => {
  imagePopup.src = imagePaths[1];
});

thumb3.addEventListener("click", () => {
  imagePopup.src = imagePaths[2];
});

thumb4.addEventListener("click", () => {
  imagePopup.src = imagePaths[3];
});

// FOR CART

const cart = document.querySelector("#cartBttn");
const cartContainer = document.querySelector("#cartContainer");
const closeCart = document.querySelector("#closeCart");

closeCart.addEventListener("click", () => {
  cartContainer.style.display = "none";
});

cart.addEventListener("click", () => {
  cartContainer.style.display = "flex";
});

const cartItems = document.querySelector("#cartItems");
const cartItemsData = {};

addCart.addEventListener("click", () => {
  function createDiv() {
    const productName = "Fall Limited Edition Sneakers";
    const newQty = parseInt(cartCount.textContent);

    if (cartItemsData.hasOwnProperty(productName)) {
      const existingQty = parseInt(cartCount.textContent);
      const updatedQty = existingQty + newQty;
      cartItemsData[productName] = updatedQty;
    } else {
      // If it doesn't exist, add a new entry to the cartItemsData object
      cartItemsData[productName] = parseInt(cartCount.textContent);
    }

    cartItems.innerHTML = "";

    for (const product in cartItemsData) {
      const newTR = document.createElement("tr");
      newTR.className = "flex flex-col md:flex-row items-center justify-center";

      // FOR IMAGE
      const imageTD = document.createElement("td");
      const productImg = document.createElement("img");
      productImg.src = "/images/image-product-1.jpg";
      productImg.alt = "Product Image";
      productImg.className = "hidden md:flex w-24 rounded-md mr-4";
      imageTD.appendChild(productImg);

      // FOR PRODUCT NAME
      const productTD = document.createElement("td");
      productTD.textContent = product;
      productTD.className = "text-sm md:text-lg";

      // FOR QUANTITY
      const qtyTD = document.createElement("td");
      qtyTD.className = "px-4";
      const minusSpan = document.createElement("button");
      minusSpan.textContent = "-";
      minusSpan.className = "text-White bg-Orange rounded-full px-2 py-1";
      const qtySpan = document.createElement("span");
      qtySpan.textContent = newQty;
      qtySpan.className = "px-2";
      const plusSpan = document.createElement("button");
      plusSpan.textContent = "+";
      plusSpan.className = "text-White bg-Orange rounded-full px-2 py-1";
      qtyTD.appendChild(minusSpan);
      qtyTD.appendChild(qtySpan);
      qtyTD.appendChild(plusSpan);

      minusSpan.addEventListener("click", () => {
        if (cartItemsData[product] > 0) {
          cartItemsData[product]--;
          qtySpan.textContent = cartItemsData[product];
          cartCount.textContent = cartItemsData[product];
          updateTotalPrice();
        }
      });

      plusSpan.addEventListener("click", () => {
        cartItemsData[product]++;
        qtySpan.textContent = cartItemsData[product];
        cartCount.textContent = cartItemsData[product];
        updateTotalPrice();
      });

      function updateTotalPrice() {
        const totalPrice = cartItemsData[product] * 125.0;
        totalTD.textContent = "$" + totalPrice;
      }

      // FOR TOTAL PRICE
      const totalTD = document.createElement("td");
      const totalPrice = newQty * 125.0;
      totalTD.textContent = "$" + totalPrice;

      // FOR REMOVING PRODUCT
      const removeTD = document.createElement("td");
      const removeTDBttn = document.createElement("button");
      removeTDBttn.textContent = "Remove";
      removeTDBttn.className =
        "text-sm md:text-lg bg-Orange p-2 text-White font-bold rounded-md hover:text-Orange hover:bg-White hover:ring-Orange hover:ring-2 hover:ring-inset hover:duration-3 ml-2";
      removeTD.appendChild(removeTDBttn);

      removeTDBttn.addEventListener("click", () => {
        cartItemsData[product] = 0;
        qtySpan.textContent = cartItemsData[product];
        cartCount.textContent = cartItemsData[product];
        totalTD.textContent = cartItemsData[product];
      });

      newTR.appendChild(imageTD);
      newTR.appendChild(productTD);
      newTR.appendChild(qtyTD);
      newTR.appendChild(totalTD);
      newTR.appendChild(removeTD);

      // ADDIND THE TR TO THE TBODY
      cartItems.appendChild(newTR);
    }
  }

  // CALLING THE FUNCTION
  createDiv();
});
