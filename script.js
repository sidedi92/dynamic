document.addEventListener("alpine:init", () => {
  Alpine.data("dataProducts", (limit = 8) => ({
    init() {
      this.fetchAllProducts();
    },

    products: [],
    error: {
      isError: false,
    },
    search: "",
    isNotAvailable: false,
    isLoading: false,
    async searchProducts(product) {
      this.isNotAvailable = false;
      this.isLoading = true;
      try {
        const data = await fetch(
          `https://dummyjson.com/products/search?q=${product}`,
        );

        const result = await data.json();

        if (result.products.length <= 0) {
          this.isNotAvailable = true;
        }

        this.products = result.products;
      } catch (error) {
        this.error.isError = true;

        console.log("Hello From Error");
        console.log(error.message);
      } finally {
        this.isLoading = false;
      }
    },

    async fetchAllProducts() {
      try {
        const data = await fetch(
          `https://dummyjson.com/products?limit=${limit}`,
        );

        const result = await data.json();

        this.products = result.products;
      } catch (error) {
        this.error.isError = true;

        console.log("Hello From Error");
        console.log(error.message);
      }
    },
  }));
});
