class Shop{
  constructor(shopName, location) {
    this.shopName = shopName;
    this.location = location;
  }
  #shopItems = [];
  // show all the shop items array value
  getProducts() {
    return this.#shopItems;
  }
// add to the shop item array
  addProduct(val) {
    this.#shopItems.push(val)
    return this;
  }
// delete from the shop items value array
  removeLastProduct() {
    this.#shopItems.pop();
    return this;
  }

};
let user1 = new Shop(`shoprite`, `egbeda`);

console.log(user1.addProduct(`rice`)
						.addProduct(`beans`)
						.removeLastProduct()
						.getProducts());


