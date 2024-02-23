import { httpAction } from './_generated/server';
import { api } from './_generated/api';



export const getSubscriptionPlans = httpAction(async(ctx)=> {
  const response = await ctx.runQuery(api.thriveQueries.getAllSubscriptionPlans);

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});
