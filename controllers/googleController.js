const axios = require("axios");

module.exports = {
  googleApiCall: function (request, response) {
    // console.log("Hit");
    const { query: params } = request;
    // console.log(request.params);
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params,
      })
      .then((results) =>
        results.data.items.filter(
          (result) =>
            result.volumeInfo.title &&
            result.volumeInfo.authors &&
            result.volumeInfo.imageLinks.thumbnail &&
            // result.searchInfo.textSnippet &&
            result.volumeInfo.infoLink
        )
      )
      .then((filteredBooks) => response.json(filteredBooks));
  },
};