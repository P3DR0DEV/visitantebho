interface jwtGenTokens {
  createAccessToken<T>(data: T): string;
  createRefreshToken<T>(data: T): string;
};

export { jwtGenTokens };

