import routes from "./routes";

export const localsMiddleWare = (req,res,next) => {
    res.locals.siteName = "KiTube";
    res.locals.routes = routes;
    next();
};