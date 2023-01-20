const dotenv = require('dotenv');
dotenv.config();

const Airtable = require('airtable-node');

const airtable = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
})
  .base(process.env.REACT_AIRTABLE_BASE)
  .table(process.env.REACT_AIRTABLE_TABLE);

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 300 });

    const products = response.records.map((product) => {
      const { id, fields } = product;
      const {
        name,
        featured,
        colors,
        category,
        company,
        description,
        shipping,
        price,
        images,
      } = fields;
      const { url } = images[0];
      return {
        id,
        name,
        featured,
        colors,
        category,
        company,
        description,
        shipping,
        price,
        image: url,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: 'Er is iets foutgegaan',
    };
  }
};
