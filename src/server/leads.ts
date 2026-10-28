/**
 * Example server handler for creating a Whop Lead.
 * On Whop Websites the runtime injects WHOP_API_KEY automatically.
 *
 * Example usage inside an API route / server function:
 *
 * import { WhopClient } from "@whop/sdk";
 *
 * const client = new WhopClient({ token: process.env.WHOP_API_KEY });
 *
 * await client.leads.create({
 *   account_id: process.env.WHOP_ACCOUNT_ID, // or from runtime
 *   metadata: {
 *     name, phone, email, address, service, message
 *   }
 * });
 */
export {};
