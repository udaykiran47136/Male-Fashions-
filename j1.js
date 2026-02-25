$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(".menu-items a").click(function () {
  $("#checkbox").prop("checked", false);
});

// Utility to get cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cartItems") || "[]");
}

// Utility to save cart to localStorage
function saveCart(cart) {
  localStorage.setItem("cartItems", JSON.stringify(cart));
}

// Add to cart handler
document.querySelectorAll(".add-cart-btn").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    // Find product info
    const product = btn.closest(".best-p1");
    if (!product) return;
    const img = product.querySelector("img")?.src || "";
    const name = product.querySelector(".name-of-p p")?.innerText || "";
    const price =
      product.querySelector(".price")?.childNodes[0]?.textContent.trim() || "";
    // Add to cart
    const cart = getCart();
    cart.push({ img, name, price });
    saveCart(cart);
    // Redirect to cart page
    window.location.href = "cart.html";
  });
});