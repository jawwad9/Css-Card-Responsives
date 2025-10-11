const container = document.querySelector('.container');
const cartCount = document.querySelector('#cart-count');

// ✅ Page Load → Restore Cart Count
const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
cartCount.textContent = savedCart.length;

// ✅ Fetch Products from API
axios('https://fakestoreapi.com/products')
  .then((res) => {
    console.log(res.data);
    
    res.data.forEach((item) => {
      container.innerHTML += `
        <div class="card">
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <h4>💲${item.price}</h4>
          <button onclick="addToCart('${item.image}', '${item.title}', ${item.price})">
            Add to Cart
          </button>
        </div>
      `;
    });
  })
  .catch((err) => console.log('Error:', err));

// ✅ Add to Cart Function
function addToCart(image, title, price) {
  console.log("🛒 Added to cart:", title, "| Price:", price, "| Image:", image);

  const product = { image, title, price };

  // 🔹 Get old cart data
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // 🔹 Add new item
  cart.push(product);

  // 🔹 Save back
  localStorage.setItem('cart', JSON.stringify(cart));

  // 🔹 Update cart count
  cartCount.textContent = cart.length;

  // 🔹 Alert user
  alert(`✅ ${title} added to cart!`);
}

