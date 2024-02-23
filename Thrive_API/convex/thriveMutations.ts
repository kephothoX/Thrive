import { mutation } from "./_generated/server";
import { v } from 'convex/values';

export const saveDescopeAdminUser = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('adminUsers',  args);
  }
});


export const saveDescopeAdminSession = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('descopeAdminSessions',  args);
  }
});

export const saveDescopeUserSession = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('descopeUserSessions',  args);
  }
});


export const saveNewDescopeUser = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('users',  args);
  }
});


export const saveSubcriptionPlan = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('subscriptionPlans',  args);
  }
});

export const saveNewInvoice = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('invoices',  args);
  }
});