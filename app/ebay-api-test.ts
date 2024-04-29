import eBayApi from 'ebay-api';
import 'dotenv/config'
// or:
// const eBayApi = require('ebay-api')
let env = process.env["NODE_ENV"];

const eBay = new eBayApi({
  appId: process.env.EBAY_APP_ID,
  certId: process.env.EBAY_SECRET_KEY,
  sandbox: false
});

const item = await eBay.buy.browse.getItem('v1|254188828753|0');
console.log(JSON.stringify(item, null, 2));