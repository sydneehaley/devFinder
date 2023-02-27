export type User = {
  jwt: string;
  user: { blocked: boolean; confirmed: boolean; createdAt: string; email: string; id: number; provider: string; updatedAt: string; username: string };
};
