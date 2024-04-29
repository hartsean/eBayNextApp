import eBayApi from 'ebay-api';
// or:
// const eBayApi = require('ebay-api')

const eBay = new eBayApi({
  appId: '-- also called Client ID --',
  certId: '-- also called Client Secret --',
  sandbox: false
});

const item = await eBay.buy.browse.getItem('v1|254188828753|0');
console.log(JSON.stringify(item, null, 2));