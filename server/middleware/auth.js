import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      const isCustomAuth = token.length < 500;

      let decodedData;

      if (token && isCustomAuth) {      
        decodedData = jwt.verify(token, secret);

        req.userId = decodedData?.id;
      } else {
        decodedData = jwt.decode(token);

        req.userId = decodedData?.sub;
      }    

      next();
    } else {
      throw new Error("Authorization header is missing.");
    }
  } catch (error) {
    console.log(error);
  }
};

export default auth;
