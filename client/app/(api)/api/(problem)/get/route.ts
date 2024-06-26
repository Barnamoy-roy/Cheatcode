import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request: Request, response: Response) {
  const problems = await prisma.problem.findMany({
    include: {
      examples: true,
      testcases: true,
    },
  });
  return new Response(JSON.stringify(problems), { status: 200 });
}