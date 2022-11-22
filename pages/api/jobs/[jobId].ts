import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma/client/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const jobs = await prisma.jobs.findMany();
  const { jobId } = req.query;
  const job = jobs.find((job: { job_id: string }) => job.job_id === jobId);
  res.status(200).json(job);
};

export default handler;
