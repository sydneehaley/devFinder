import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma/client/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const jobs = await prisma.jobs.findMany();
  res.status(200).json(jobs);
};
