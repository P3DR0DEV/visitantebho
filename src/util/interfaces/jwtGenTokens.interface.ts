interface jwtGenTokens {
  createAccessToken(username: string): string;
  createRefreshToken(username: string): string;
};

export { jwtGenTokens };

