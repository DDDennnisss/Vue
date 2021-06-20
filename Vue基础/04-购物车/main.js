const app = new Vue({
  el: "#app", //绑定到DOM上
  data: {
    books: [
      {
        id: 1,
        name: '《算法1》',
        date: '2006-1',
        price: 50.00,
        count: 1,
      },
      {
        id: 2,
        name: '《算法2》',
        date: '2006-2',
        price: 100.00,
        count: 1,
      },
      {
        id: 3,
        name: '《算法3》',
        date: '2006-3',
        price: 150.00,
        count: 1,
      },
      {
        id: 4,
        name: '《算法4》',
        date: '2006-4',
        price: 200.00,
        count: 1,
      }
    ]
  },
  methods: {
    decrement(index) {
      this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++;
    },
    removeHandler(index) {
      this.books.splice(index, 1)
    }
  },

  computed: {
    totalPrice() {
      let totalPrice = 0;

      // 1. for..
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice = this.books[i].count * this.books[i].price + totalPrice;
      // }
      // return totalPrice;

      // 2. for...in
      // for (let i in this.books) {
      //   totalPrice += this.books[i].count * this.books[i].price;
      // }
      // return totalPrice;

      // 3. for...of
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count;
      // }
      // return totalPrice;

      //reduce()
      totalPrice = this.books.reduce((preValue, book) => {
        return preValue + book.price * book.count
      }, 0)
      return totalPrice;
    }
  },

  filters: {
    showPrice(price) {
      return '$' + price.toFixed(2)
    }
  }
});