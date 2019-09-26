import routes from "./routes";

export const localsMiddleWare = (req,res,next) => {
    res.locals.siteName = "KiTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated : true,
        id : 5
    }
    next();
};