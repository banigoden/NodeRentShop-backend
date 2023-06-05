'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: {
        productName: 'Seiling mamba 341',
        price: 23500,
      },
  };

};
