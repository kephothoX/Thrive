import { query } from './_generated/server';
import { v } from 'convex/values';


export const getAllUsers = query({
  handler: async (ctx) => {
    return await ctx.db.query('users').collect();   
  },
});

export const getAllSubscriptionPlans = query({
  handler: async (ctx) => {
    return await ctx.db.query('subscriptionPlans').collect();   
  },
});

export const getAllInvoices = query({
  handler: async (ctx) => {
    return await ctx.db.query('invoices').collect();   
  },
});