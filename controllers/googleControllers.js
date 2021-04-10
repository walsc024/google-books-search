const axios = require("axios");

module.exports = {
  googleApiCall: function (request, response) {
    const { querey: params } = request;
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=hunger", { params })
      .then((results) =>
        results.data.items.filter(
          result.volumeInfo.title &&
            result.volumeInfo.authors &&
            result.volumeInfo.imageLinks.thimbnail &&
            result.volumeInfo.description &&
            result.volumeInfo.saleInfo.buylink
        )
      )
      .then((filteredBooks) => response.json(filteredBooks));
  },
};
