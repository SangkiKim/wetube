export const localsMiddleWare = (req,res,next) => {
    res.locals.siteTitle = "Movie info";
    next();
};