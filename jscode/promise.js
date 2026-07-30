const cart = ['shoes', 'pants', 'kurta'];

createOrder(cart)
  .then(function(orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function(orderID) {
    return proceedToPayment(orderID)  //here we are returning promise itself so we have to attch .then to it
  })
  .then(function({ message, amt }) {
    console.log(message, 'of amount:', amt);
    return showOrderSummary(message, amt);
  })
  .then(function({ message, amt }) {
    console.log('Your wallet has beed debited by:', amt);
  })
  .catch(function(err) {
    console.log(err.message);
  })
  .then(function() {
    console.log('No matter what happens, I will get executed');
  });

function createOrder(cart) {
  const pr = new Promise(function(resolve, reject) {
    // create order
    // Validate Cart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error('Cart is not valid!');
      reject(err);
    }
    // logic for createOrder
    const orderId = '12345';
    if (orderId) {
      setTimeout(function() {
        resolve(orderId);
      }, 5000)
    }
  });

  return pr ;
}

function proceedToPayment(orderID) {
  // Logic for handling payment.
// This function returns a promise
  return new Promise(function(resolve, reject) {
    // logic
    if (orderID!="12345") {
        reject(new Error("oder id is not valid"))
    }
    resolve({ message: `Payment Successful for order id: ${orderID}`, amt: 2500 });
  })
}

function showOrderSummary(paymentInfo, amt) {
  return new Promise(function(resolve, reject) {
    // console.log(amt);
    if (amt >= 2000) {
      resolve({ message: 'You have ordered items that cost ${amt} RS', amt });
    } else {
      reject(new Error('Please buy more for discount'));
    }
  })
}

function validateCart(cart) {
  // code to validate cart.
  return true;
  // return false;
}


function myPromise(executor) {
  /*
      onResolve -> to store resolveCallback
      onReject -> to store rejectCallback
      isCalled -> check and mark the promise as resolved/rejected
      isFulfilled -> executor isFulfilled
      isRejected -> executor isRejected

      (!isCalled && isFulfilled) or (!isCalled && isRejected) is used to enable synchronous promises.
      onResolve and onReject works for asynchronous tasks as asynchronous functions can be passed in executor function directly (setTimeout here).
  */

  let onResolve, onReject, isCalled = false, 
    isFulfilled = false, isRejected = false, output, err;

this.then = function(resolveCallback) {
  onResolve = resolveCallback;
  
  // check if the promise has not yet resolved/rejected and executor isFulfilled
  if(!isCalled && isFulfilled) {
    isCalled = true;
    onResolve(output);
  }

  // Returning this to enable chaining of then
  return this;
}

this.catch = function(rejectCallback) {
  onReject = rejectCallback;
  
  // check if the promise has not yet resolved/rejected and executor isRejected
  if(!isCalled && isRejected) {
    isCalled = true;
    onReject(err);
  }
  
  // Returning this to enable chaining of catch
  return this;
}

function resolver(data) {
  isFulfilled = true;
  output = data;
  
  if(typeof onResolve=== 'function' && !isCalled){
    isCalled = true;
    onResolve(data);
  }
}

function rejecter(error) {
  isRejected = true;
  err = error;
  
  if(typeof onReject === 'function' && !isCalled){
    isCalled = true;
    onReject(error);
  }
}

executor(resolver, rejecter);
}

let p1 = new myPromise(
  (resolve, reject) => setTimeout(() => resolve('Resolved successfully with a delay', 1000))
);
p1.then((data) => console.log(data));

let p2 = new myPromise(
  (resolve, reject) => resolve('Resolved right away')
);
p2.then((data) => console.log(data));