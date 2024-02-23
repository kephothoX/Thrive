import { httpRouter } from 'convex/server';


import 
    { 
        getSquareLocations,
        getSquareCard,
        getSquareCards,
        getSquareCatalog,
        getSquareCatalogObjectByID,
        getSquareCustomerByEmail,
        getSquareInvoices,
        getSquareSubscriptionByID,
        getSquareSubscriptions,
        getSquareLocation,
        getSquareMainLocation,
        getSquareUser,
        getSquareUsers,
        newSquareCard,
        newSquareCatalog,
        newSquareCustomer,
        newSquareInvoice,
        newSquareLocation,
        newSquareOnlineSubscriptionCheckout,
        newSquarePayment,
        newSquareOrder,
        newSquareSubscription,
        addNewSubscriptionPlan,
        addNewInvoice
        

    } from './square';


import {
  descopeSAMLExchange,
  validateB2BSession,
  validateB2CSession,
  addNewDescopeAdminSession,
  addNewDescopeAdminUser,
  addNewDescopeUser, 
  addNewDescopeUserSession
} from './descope';


import {
  getSubscriptionPlans
} from './thrive';

const http = httpRouter();


http.route({
  path: '/api/square/location',
  method: 'GET',
  handler: getSquareLocation,
});

http.route({
  path: '/api/square/location/new',
  method: 'POST',
  handler: newSquareLocation,
});

http.route({
  path: '/api/square/main/location',
  method: 'GET',
  handler: getSquareMainLocation,
});


http.route({
  path: '/api/square/locations',
  method: 'GET',
  handler: getSquareLocations
});

http.route({
  path: '/api/square/card',
  method: 'GET',
  handler: getSquareCard
});

http.route({
  path: '/api/square/cards',
  method: 'GET',
  handler: getSquareCards
});

http.route({
  path: '/api/square/card/new',
  method: 'POST',
  handler: newSquareCard
});

http.route({
  path: '/api/square/catalog',
  method: 'GET',
  handler: getSquareCatalog
});

http.route({
  path: '/api/square/catalogue/object/id',
  method: 'GET',
  handler: getSquareCatalogObjectByID
});

http.route({
  path: '/api/square/catalog/new',
  method: 'POST',
  handler: newSquareCatalog
});

http.route({
  path: '/api/square/customer/email',
  method: 'GET',
  handler: getSquareCustomerByEmail
});

http.route({
  path: '/api/square/invoices',
  method: 'GET',
  handler: getSquareInvoices
});

http.route({
  path: '/api/square/subscription/id',
  method: 'GET',
  handler: getSquareSubscriptionByID
});

http.route({
  path: '/api/square/online/subscription/checkout',
  method: 'POST',
  handler: newSquareOnlineSubscriptionCheckout
});

http.route({
  path: '/api/square/subscriptions',
  method: 'GET',
  handler: getSquareSubscriptions
});

http.route({
  path: '/api/square/subscription/new',
  method: 'POST',
  handler: newSquareSubscription
});

http.route({
  path: '/api/square/user',
  method: 'POST',
  handler: getSquareUser
});

http.route({
  path: '/api/square/users',
  method: 'GET',
  handler: getSquareUsers
});

http.route({
  path: '/api/square/user/new',
  method: 'POST',
  handler: newSquareCustomer
});

http.route({
  path: '/api/square/invoice/new',
  method: 'POST',
  handler: newSquareInvoice
});

http.route({
  path: '/api/square/payment/new',
  method: 'POST',
  handler: newSquarePayment
});

http.route({
  path: '/api/square/order/new',
  method: 'POST',
  handler: newSquareOrder
});

http.route({
  path: '/api/saml/exchange',
  method: 'POST',
  handler: descopeSAMLExchange
});

http.route({
  path: '/api/b2b/session/validate',
  method: 'POST',
  handler: validateB2BSession
});

http.route({
  path: '/api/b2c/session/validate',
  method: 'POST',
  handler: validateB2CSession
});


http.route({
  path: '/api/descope/admin/session/new',
  method: 'POST',
  handler: addNewDescopeAdminSession
});

http.route({
  path: '/api/descope/admin/user/new',
  method: 'POST',
  handler: addNewDescopeAdminUser
});

http.route({
  path: '/api/subscriptions/new',
  method: 'POST',
  handler: addNewSubscriptionPlan
});

http.route({
  path: '/api/invoices/new',
  method: 'POST',
  handler: addNewInvoice
});


http.route({
  path: '/api/descope/user/session/new',
  method: 'POST',
  handler: addNewDescopeUserSession
});

http.route({
  path: '/api/descope/user/new',
  method: 'POST',
  handler: addNewDescopeUser
});

http.route({
  path: '/api/subscriptions',
  method: 'GET',
  handler: getSubscriptionPlans
});






// Convex expects the router to be the default export of `convex/http.js`.
export default http;

