import 'dotenv/config';
//it stores the required varibale to run backend properly
const required = ['DATABASE_URL', 'JWT_SECRET'];
//its a function which  checks wheather 
export function validateEnvironment() {
  //it stores the missing value 
  const missing = required.filter((name) => !process.env[name]);
  //check if missing value avaliable then sjow error
  if (missing.length) {
    throw new Error(`Missing required environment variable(s): ${missing.join(', ')}`);
  }
}
// export env varibale 
export const env = {
  port: Number(process.env.PORT || 4000),
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '8h',
  frontendOrigin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173',
};

