import { users } from "~~/packages/database/schema"
import { eq } from "drizzle-orm"
import { z } from "zod"

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(256),
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, bodySchema.parse)

  const [user] = await useDrizzle().select().from(users).where(eq(users.email, body.email)).limit(1)
  if (!user) return createError({ statusCode: 401, message: "Invalid email or password" })

  return {
    user,
  }
})
