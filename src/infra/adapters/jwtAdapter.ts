import { jwtGenTokens } from "@/util/interfaces/jwtGenTokens.interface";
import jwt from 'jsonwebtoken';
import 'dotenv/config';

class jwtAdapter implements jwtGenTokens {
  createAccessToken(username: string): string {
    return jwt.sign({ username }, process.env.JWT_ACCESS_TOKEN_SECRET!, {
      expiresIn: '15m',
    });
  }
  createRefreshToken(username: string): string {
    return jwt.sign({ username }, process.env.JWT_REFRESH_TOKEN_SECRET!, {
      expiresIn: '7d',
    });
  };
};

export { jwtAdapter };
