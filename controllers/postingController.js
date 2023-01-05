export const home = (req, res) => {
    res.locals.user = req.session.user;
    return res.render("home");
}