console.log('I am javascript')

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const ingredientButtons = document.querySelectorAll(".btn-2");
  const pizzaContainer = document.querySelector(".pizza-gif-container");
  const sauceSliders = document.querySelectorAll(".sauce-slider");
  const confirmBtn = document.getElementById("confirmbtn");

  // 🍅 When any vegetable button is clicked
  ingredientButtons.forEach(button => {
    button.addEventListener("click", () => {
      const ingredientDiv = button.closest(".ingredient");
      const img = ingredientDiv.querySelector("img");

      // Create a small floating image
      const floatingImg = document.createElement("img");
      floatingImg.src = img.src;
      floatingImg.classList.add("floating-ingredient");

      // Add it on top of pizza container
      pizzaContainer.appendChild(floatingImg);

      // Remove it after 1.5 seconds
      setTimeout(() => {
        floatingImg.classList.add("fade-out");
        setTimeout(() => floatingImg.remove(), 500);
      }, 1500);
    });
  });

  // 🌶️ Sauce slider behavior
  sauceSliders.forEach(slider => {
    slider.addEventListener("input", (e) => {
      const burst = slider.previousElementSibling; // the div.burst before the input
      if (slider.value == 1) {
        burst.style.backgroundColor = "orange";
        burst.textContent = "Normal";
      } else if (slider.value == 2) {
        burst.style.backgroundColor = "red";
        burst.textContent = "Spicy!";
      } else {
        burst.style.backgroundColor = "transparent";
        burst.textContent = "";
      }
    });
  });


  // 🍕 Confirm Order button
  confirmBtn.addEventListener("click", () => {
    showPopup("Your order is confirmed!", 2000, () => {
      showPopup("Your order is placed successfully 🍕", 0);
    });
  });

  // Popup creator function
  function showPopup(message, delay = 0, callback = null) {
    // Create blur background
    const blurOverlay = document.createElement("div");
    blurOverlay.classList.add("blur-overlay");

    // Create popup
    const popup = document.createElement("div");
    popup.classList.add("popup-box");
    popup.innerText = message;

    document.body.appendChild(blurOverlay);
    document.body.appendChild(popup);

    // Remove popup after 2 seconds
    setTimeout(() => {
      popup.classList.add("fade-out");
      blurOverlay.classList.add("fade-out");
      setTimeout(() => {
        popup.remove();
        blurOverlay.remove();
        if (callback) callback();
      }, 500);
    }, 2000 + delay);
  }
});

