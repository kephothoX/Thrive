import { httpAction } from './_generated/server';
import { api } from './_generated/api';




const SquareAuth = 'Bearer EAAAlzTFqkGlyIE2GvyVh3KvN9FPYlnkvBp0GAuwaOoK20SxuJxVZcc9FscvqXsR';

export const getSquareLocations = httpAction(async () => {

  const getSQLocations = await fetch('https://connect.squareupsandbox.com/v2/locations', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },

  });
  const SQLocations = await getSQLocations.json();

  return new Response(JSON.stringify({ 'SQResponse': SQLocations }), {
    headers: new Headers({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4201',
        Vary: 'origin',
      }),
    status: 200,
  });
});


export const getSquareCatalog = httpAction(async () => {

  const getSQCatalog = await fetch('https://connect.squareupsandbox.com/v2/catalog/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },

  });

  const SQCatalog = await getSQCatalog.json();

  return new Response(JSON.stringify({ 'SQResponse': SQCatalog }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,

  });
});

export const newSquareCatalog = httpAction(async (ctx, request) => {
  const params = JSON.stringify(await request.json());


  const newSQCatalog = await fetch('https://connect.squareupsandbox.com/v2/catalog/object/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: params

  });

  const addSQCatalog = await newSQCatalog.json();


  return new Response(JSON.stringify({ 'SQResponse': addSQCatalog }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});

export const newSquareLocation = httpAction(async (ctx, request) => {
   const params = JSON.stringify(await request.json());


  const newSQLocation = await fetch('https://connect.squareupsandbox.com/v2/locations/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: params,

  });

  const addSQLocation = await newSQLocation.json();

  console.log(addSQLocation);

  return new Response(JSON.stringify({ 'SQResponse': addSQLocation }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});

export const getSquareLocation = httpAction(async (ctx, request) => {
  const params = await request.json();

  const getSQLocation = await fetch(`https://connect.squareupsandbox.com/v2/locations/${params}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },

  });

  const SQLocation = await getSQLocation.json();

  return new Response(JSON.stringify({ 'SQResponse': SQLocation }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});


export const editSquareLocation = httpAction(async (ctx, request) => {
  const params = await request.json();

  const editSQLocation = await fetch(`https://connect.squareupsandbox.com/v2/location/${params.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    }
  });

  const SQLocation = await editSQLocation.json();

  return new Response(JSON.stringify({ 'SQResponse': SQLocation }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});

export const newSquareCustomer = httpAction(async (ctx, request) => {
   const params = JSON.stringify(await request.json());

  const newSQCustomer = await fetch('https://connect.squareupsandbox.com/v2/customers/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: params,

  });

  const SQCustomer = await newSQCustomer.json();

  return new Response(JSON.stringify({ 'SQResponse': SQCustomer }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});


export const getSquareMainLocation = httpAction(async (ctx, request) => {

  const getSQMainLocation = await fetch('https://connect.squareupsandbox.com/v2/locations/main', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },

  });

  const SQMainLocation = await getSQMainLocation.json();

  return new Response(JSON.stringify({ 'SQResponse': SQMainLocation }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});


export const getSquareCustomerByEmail = httpAction(async (ctx, request) => {
  const params = JSON.stringify(await request.json());

  const getSQCustomerByEmail = await fetch('https://connect.squareupsandbox.com/v2/customers/search/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: params,
  });

  const SQCustomerEmail = await getSQCustomerByEmail.json();

  return new Response(JSON.stringify({ 'SQResponse': SQCustomerEmail }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});

export const getSquareCatalogObjectByID = httpAction(async (ctx, request) => {
  const params = await request.json();

  const getSQCatalogByID = await fetch(`https://connect.squareupsandbox.com/v2/catalog/object/${params.id}?include_related_objects=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },

  })

  const SQCatalogObjectID = await getSQCatalogByID.json();

  return new Response(JSON.stringify({ 'SQResponse': SQCatalogObjectID }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});


export const newSquareOnlineSubscriptionCheckout = httpAction(async (ctx, request) => {
  const params = JSON.stringify(await request.json());

  const newSQOnlineSubscriptionCheckout = await fetch('https://connect.squareupsandbox.com/v2/online-checkout/payment-links/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: params,

  })

  const SQOnlineSubscriptionCheckout = await newSQOnlineSubscriptionCheckout.json();

  return new Response(JSON.stringify({ 'SQResponse': SQOnlineSubscriptionCheckout }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});

export const newSquareSubscription = httpAction(async (ctx, request) => {
  const params: any = JSON.stringify(await request.json());

  const newSQSubscription = await fetch('https://connect.squareupsandbox.com/v2/subscriptions/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: params,

  })
  const SQSubscription = await newSQSubscription.json();

  return new Response(JSON.stringify({ 'SQResponse': SQSubscription }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const newSquareCard = httpAction(async (ctx, request) => {
  const params = JSON.stringify(await request.json());

  const newSQCard = await fetch('https://connect.squareupsandbox.com/v2/cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: params

  });

  const SQCard = await newSQCard.json();

  return new Response(JSON.stringify({ 'SQResponse': SQCard }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const getSquareCards = httpAction(async (ctx, request) => {
  const params = await request.json();

  const getSQCards = await fetch(`https://connect.squareupsandbox.com/v2/cards?customer_id=${params.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },

  })

  const SQCards = await getSQCards.json();

  return new Response(JSON.stringify({ 'SQResponse': SQCards }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});


export const getSquareCard = httpAction(async (ctx, request) => {
  const params = await request.json();

  const getSQCard = await fetch(`https://connect.squareupsandbox.com/v2/cards/${params.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    }
  });

  const SQCard = await getSQCard.json();

  return new Response(JSON.stringify({ 'SQResponse': SQCard }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const disableSquareCard = httpAction(async (ctx, request) => {
  const params = await request.json()

  const disableSQCard = await fetch(`https://connect.squareupsandbox.com/v2/cards/${params.id}/disable/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    }
  });

  const SQCard = await disableSQCard.json();

  return new Response(JSON.stringify({ 'SQResponse': SQCard }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});



export const newSquareOrder = httpAction(async (ctx, request) => {
  const params = JSON.stringify(await request.json());

  const newSQOrder = await fetch('https://connect.squareupsandbox.com/v2/orders/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: params
  });

  const SQOrder = await newSQOrder.json();

  return new Response(JSON.stringify({ 'SQResponse': SQOrder }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const newSquareInvoice = httpAction(async (ctx, request) => {
  const params = JSON.stringify(await request.json());

  const newSQInvoice = await fetch('https://connect.squareupsandbox.com/v2/invoices/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: params

  });

  const SQInvoice = await newSQInvoice.json();

  return new Response(JSON.stringify({ 'SQResponse': SQInvoice }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const getSquareInvoices = httpAction(async (ctx, request) => {
  const params = await request.json();

  const getSQInvoices = await fetch(`https://connect.squareupsandbox.com/v2/invoices?location_id=${params.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    }
  });

  const SQInvoices = await getSQInvoices.json();

  return new Response(JSON.stringify({ 'SQResponse': SQInvoices }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const payment = httpAction(async (ctx, request) => {
  const params = JSON.stringify(await request.json());

  const Pay = await fetch('https://connect.squareupsandbox.com/v2/payments/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: params

  });

  const PayResult = await Pay.json();

  return new Response(JSON.stringify({ 'SQResponse': PayResult }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const newSquarePayment = httpAction(async (ctx, request) => {
  const params = JSON.stringify(await request.json());

  const newSQPayment = await fetch('https://connect.squareupsandbox.com/v2/payments/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: params

  });

  const SQPayment = await newSQPayment.json();

  return new Response(JSON.stringify({ 'SQResponse': SQPayment }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const getSquareUsers = httpAction(async (ctx, request) => {

  const getSQUsers = await fetch('https://connect.squareupsandbox.com/v2/customers?sort_field=CREATED_AT&sort_order=DESC', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    }

  });

  const SQUsers = await getSQUsers.json();

  return new Response(JSON.stringify({ 'SQResponse': SQUsers }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const getSquareUser = httpAction(async (ctx, request) => {
  const params: string = JSON.stringify(await request.json());

  const getSQUser = await fetch(`https://connect.squareupsandbox.com/v2/customers/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: params
  });

  const SQUser = await getSQUser.json();

  return new Response(JSON.stringify({ 'SQResponse': SQUser }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});


export const updateSquareUser = httpAction(async (ctx, request) => {
  const params = await request.json();

  const updateSQUser = await fetch(`https://connect.squareupsandbox.com/v2/customers/${params.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    }

  });

  const SQUser = await updateSQUser.json();

  return new Response(JSON.stringify({ 'SQResponse': SQUser }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const deleteSquareUser = httpAction(async (ctx, request) => {
  const params = await request.json();

  const deleteSQUser = await fetch(`https://connect.squareupsandbox.com/v2/customers/${params.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    }
  });

  const SQUser = await deleteSQUser.json();

  return new Response(JSON.stringify({ 'SQResponse': SQUser }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});


export const getSquareSubscriptions = httpAction(async (ctx, request) => {
  const params = JSON.stringify(await request.json());

  const getSQSubscriptions = await fetch('https://connect.squareupsandbox.com/v2/invoices/search/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: params

  });

  const SQSubscriptions = await getSQSubscriptions.json();

  return new Response(JSON.stringify({ 'SQResponse': SQSubscriptions }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const updateSquareLocation = httpAction(async (ctx, request) => {
  const params = await request.json();

  const updateSQLocation = await fetch(`https://connect.squareupsandbox.com/v2/locations/${params.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: request.body
  });

  const SQLocation = await updateSQLocation.json();

  return new Response(JSON.stringify({ 'SQResponse': SQLocation }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const pauseSquareSubscription = httpAction(async (ctx, request) => {
  const params = await request.json();

  const pauseSQSubscription = await fetch(`https://connect.squareupsandbox.com/v2/subscriptions/${params.subscription_id}/pause/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: request.body

  });

  const SQSubscription = await pauseSQSubscription.json();

  return new Response(JSON.stringify({ 'SQResponse': SQSubscription }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const cancelSquareSubscription = httpAction(async (ctx, request) => {
  const params = await request.json();

  const cancelSQSubscription = await fetch(`https://connect.squareupsandbox.com/v2/subscriptions/${params.subscription_id}/cancel/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: request.body
  });

  const SQSubscription = await cancelSQSubscription.json();

  return new Response(JSON.stringify({ 'SQResponse': SQSubscription }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const resumeSquareSubscription = httpAction(async (ctx, request) => {
  const params = await request.json();

  const resumeSQSubscription = await fetch(`https://connect.squareupsandbox.com/v2/subscriptions/${params.subscription_id}/resume/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: request.body

  });

  const SQSubscription = await resumeSQSubscription.json();

  return new Response(JSON.stringify({ 'SQResponse': SQSubscription }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const getSquareSubscriptionByID = httpAction(async (ctx, request) => {
  const params = await request.json();

  const getSQSubscriptionID = await fetch(`https://connect.squareupsandbox.com/v2/subscriptions/${params.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    }
  });

  const SQSubscriptionID = await getSQSubscriptionID.json();

  return new Response(JSON.stringify({ 'SQResponse': SQSubscriptionID }), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});


export const addNewSubscriptionPlan = httpAction(async (ctx, request) => {
  const params = await request.json();

  const response = await ctx.runMutation(api.thriveMutations.saveSubcriptionPlan, params);

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});

export const addNewInvoice = httpAction(async (ctx, request) => {
  const params = await request.json();

  const response = await ctx.runMutation(api.thriveMutations.saveNewInvoice, params);

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});
