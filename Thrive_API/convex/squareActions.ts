'use node';

import { action } from './_generated/server';
import { api } from './_generated/api';
import { v } from 'convex/values';

const SquareAuth = 'Bearer EAAAlzTFqkGlyIE2GvyVh3KvN9FPYlnkvBp0GAuwaOoK20SxuJxVZcc9FscvqXsR';



export const addNewSquareSubscription = action({
    args: {},
    handler:  async(ctx, args: any) => {
        return  await fetch('https://connect.squareupsandbox.com/v2/subscriptions/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': SquareAuth,
    },
    body: args,

  })

    }
})
