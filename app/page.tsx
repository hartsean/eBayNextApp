'use client'
/*

TODO:

Make a GET Request to Inventory API, to get all items.

https://api.ebay.com/sell/inventory/v1/inventory_item?limit=2&offset=0


*/
import sample_item from "./item_sample.json"
import eBayApi from 'ebay-api';
import 'dotenv/config'
import { useEffect, useState } from 'react';
// or:
// const eBayApi = require('ebay-api')

//move to backend, serverless components..

// const eBay = new eBayApi({
//   appId: process.env.EBAY_APP_ID,
//   certId: process.env.EBAY_CERT_ID,
//   sandbox: false
// });


// console.log('typeof item', typeof item);
// console.log('data', JSON.stringify(item, null, 2));

export default function Home() {
  
  const [item, setItem] = useState<Record<string,any>>();
  
  useEffect(() => {
    setTimeout(()=>setItem(sample_item), 2000)
    // eBay.buy.browse.getItem('v1|166720018589|0').then(() => { console.log(item)
    //  });
  }, [])

  return !item? null: (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="book-title">{item.title}</div>
        <div className="book-description">{item.shortDescription}</div>
        <div className="book-price-value">{item.price.value}</div>
        <div className="book-price-currency">{item.price.currency}</div>
        <div className="book-image-full"><img src={item.image.imageUrl}></img></div>
        {/* <div className="book-image-thumb"><img src={item.image.imageUrl}></img></div> */}
      </div>
    </main>
  );
}
