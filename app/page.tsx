/*

TODO:

Make a GET Request to Inventory API, to get all items.

https://api.ebay.com/sell/inventory/v1/inventory_item?limit=2&offset=0


*/

import eBayApi from 'ebay-api';
import 'dotenv/config'
// or:
// const eBayApi = require('ebay-api')

const eBay = new eBayApi({
  appId: process.env.EBAY_APP_ID,
  certId: process.env.EBAY_CERT_ID,
  sandbox: false
});

const item = await eBay.buy.browse.getItem('v1|166720018589|0');

console.log('typeof item', typeof item);
console.log('data bitch', JSON.stringify(item, null, 2));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="book-title">{item.title}</div>
        <div className="book-description">{item.shortDescription}</div>
        <div className="book-price-value">{item.price.value}</div>
        <div className="book-price-currency">{item.price.currency}</div>

      </div>
    </main>
  );
}
