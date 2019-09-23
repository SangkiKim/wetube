import routes from "./routes";

export const localsMiddleWare = (req, res, next) => {
  res.locals.siteName = "Sexy Site";
  res.locals.routes = routes;
  next();
};
