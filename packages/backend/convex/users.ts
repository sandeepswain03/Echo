import { mutation, query } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    return users;
  },
});

export const add = mutation({
  args: {},
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity === null) {
      throw new Error("Unauthorized");
    }

    const orgId = identity?.orgId as string;

    if (!orgId) {
      throw new Error("Organization not found");
    }

    const user = await ctx.db.insert("users", {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password",
    });
    return user;
  },
});
