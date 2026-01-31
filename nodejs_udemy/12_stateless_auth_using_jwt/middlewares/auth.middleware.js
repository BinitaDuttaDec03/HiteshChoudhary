import jwt from "jsonwebtoken";

export const adminMiddleware = async (req, res, next) => {
  try {
    const tokenHeader = req.headers["authorization"];

    if (!tokenHeader) {
      return next();
    }

    if (!tokenHeader.startsWith("Bearer")) {
      return res
        .status(400)
        .json({ error: "Authorization header must start with bearer" });
    }

    const token = tokenHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    return next();
  } catch (error) {
    return next();
  }
};

export const ensureAuthenticated = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "You must be authenticated" });
    }

    next();
  } catch (error) {
    return next();
  }
};

export const restrictToRole = (role) => {
  return function (req, res, next) {
    if (req.user.role !== role) {
      return res
        .status(401)
        .json({ error: "You are not authorized to access this resource" });
    }

    return next();
  };
};
