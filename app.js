// function to show and hide nav-links when menu clicked
function myFunction() {
  const x = document.getElementById("nav-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Function to update block element's inner text with its current width
function updateWidthText() {
  const blockElement = document.getElementById("footer");
  const width = blockElement.offsetWidth; // Get current width of the block element
  blockElement.textContent = `Current Width: ${width}px`; // Update inner text with width value
}
// Initial call to update width text
updateWidthText();
// Event listener for window resize
window.addEventListener("resize", updateWidthText);

// array of objects all product
var allProducts = [
  {
    producttile: "Josera Marinesse 2KG",
    productprice: "Rs. 4,000",
    productprevprice: "Rs. 4,200",
    productdescription:
      "JOSERA Marinesse with plenty of delicious salmon is optimal food for cats with a taste for fish. The food is also ideal for cats suffering from feed intolerances. The exceptional ingredients include only protein derived from well tolerated salmon, rice, and potatoes. This makes it the ideal food for cats with sensitive digestive systems. Contains salmon, rice, and potatoes; cats easily tolerate and digest these ingredients. Contains plenty of salmon for demanding feline gourmets. Much needed fatty acids from salmon keep your cat’s coat and skin healthy, Hypoallergenic and easy to digest Complete feed for adult cats. ",
    productimage:
      "https://chikoo.imgix.net/merchants-production/a18513aa-6fd0-4ea6-8eef-dd3a9db0e49a/products/1619027823284/1619027823286.png?ixlib=js-3.8.0&dpi=96&s=6f7a1475a196a9c1abc9754db516fcf5",
    producttags: "cat-food",
  },
  {
    producttile: "Whiskas with chicken in jelly Tin 390G",
    productprice: "Rs. 520",
    productprevprice: "",
    productdescription: "Whiskas with chicken in jelly Tin 390G",
    productimage:
      "https://chikoo.imgix.net/merchants-production/a18513aa-6fd0-4ea6-8eef-dd3a9db0e49a/products/1619038089433/1619038089434.png?ixlib=js-3.8.0&dpi=96&s=00227e163c42b73b0a04367d3df611b0",
    producttags: "kitten-food",
  },
  {
    producttile: "PET MOMMY Premium Cat Litter / Lemon Scented 16.kg",
    productprice: "Rs. 1,100",
    productprevprice: "",
    productdescription: "PETSMOMMY Premium Cat Litter / Lemon Scented",
    productimage:
      "https://chikoo.imgix.net/merchant-prod-private/a18513aa-6fd0-4ea6-8eef-dd3a9db0e49a/product/1643568133355/1643568133358.jpg?ixlib=js-3.8.0&dpi=96&s=dcb3b00ae442c8877df9b3aeb1dcfa74",
    producttags: "cat-litter",
  },
  {
    producttile: "Whiskas Tin Salmon In Jelly 390gm",
    productprice: "Rs. 550",
    productprevprice: "",
    productdescription: "Whiskas Tin Salmon In Jelly 390gm",
    productimage:
      "https://chikoo.imgix.net/merchant-prod-private/a18513aa-6fd0-4ea6-8eef-dd3a9db0e49a/product/1641574585716/1641574585717.jpg?ixlib=js-3.8.0&dpi=96&s=e8d9281ec0aabcd11aec71f6ecc37e67",
    producttags: "kitten-food",
  },
  {
    producttile: "Waggles Puppy Wet Food Can 400Grm",
    productprice: "Rs. 350",
    productprevprice: "",
    productdescription: "Waggles Puppy Wet Food Can 400Grm",
    productimage:
      "https://chikoo.imgix.net/merchant-production/a18513aa-6fd0-4ea6-8eef-dd3a9db0e49a/product/1639665973290/1639665973292.jpeg?ixlib=js-3.8.0&dpi=96&s=a267ffe27d3e6f2957dc433709037650",
    producttags: "puppy-food",
  },
];
