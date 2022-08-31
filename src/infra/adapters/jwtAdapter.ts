import { jwtGenTokens } from "@/util/interfaces/jwtGenTokens.interface";
import jwt from 'jsonwebtoken';
import 'dotenv/config';

class jwtAdapter implements jwtGenTokens {
  createAccessToken<T>(data: T): string {
    return jwt.sign({ data }, process.env.JWT_ACCESS_TOKEN_SECRET!, {
      expiresIn: '15m',
    });
  }
  createRefreshToken<T>(data: T): string {
    return jwt.sign({ data }, process.env.JWT_REFRESH_TOKEN_SECRET!, {
      expiresIn: '7d',
    });
  };
};

export { jwtAdapter };
