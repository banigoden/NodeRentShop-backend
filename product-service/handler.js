'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: {
        productName: 'Seiling yacht',
        price: 23500,
      },
  };

};
