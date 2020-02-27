import { db } from '../firebaseHelpers';

const postReceipt = (houseName, url, data) => {
  var date = new Date();
  var now = date.getTime();
  const receipt = {url: url, items : data, timeStamp: now}
  db.child('houses').child(houseName).child('receipts').child(now)
  .set(receipt)
}

export {
  postReceipt,
}