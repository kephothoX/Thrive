'use node';

import { action } from './_generated/server';
import { api } from './_generated/api';
import { v } from 'convex/values'

import DescopeClient from '@descope/node-sdk';

import DescopeSdk from '@descope/node-sdk';


export const B2BSessionValidation = action({
    args: { token: v.string() },
    handler: async (ctx, args) => {
        try {
            const descopeClient = DescopeClient({ projectId: 'P2cC4YzygthpPTF11mXVnJVK3PnW' });

            try {

                const authInfo = await descopeClient.validateJwt(args.token);
                console.log("Successfully validated user session:");
                console.log(authInfo);

                return authInfo

            } catch (error) {
                return error;
            }

        } catch (error) {

            console.log("failed to initialize: " + error)
        }
    }

});



export const B2CSessionValidation = action({
    args: { token: v.string() },
    handler: async (ctx, args) => {
        try {
            const descopeClient = DescopeClient({ projectId: 'P2bzm8ZYJ0fD8n6aEHbGiXS4bVjL' });

            try {
                const authInfo = await descopeClient.validateJwt(args.token);
                console.log("Successfully validated user session:");
   
                return authInfo

            } catch (error) {
                return error;
            }

        } catch (error) {

            console.log("failed to initialize: " + error)
        }
    }

});