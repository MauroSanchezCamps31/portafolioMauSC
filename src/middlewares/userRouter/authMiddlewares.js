//Es para un middlewares de ruta para que un usuario depende si esta o no esta logueado, pude entrar o no a determinadas vistas.
//Este Middlewares la fucnion es que si esta logueado no tiene la posibilidad de ir a la vista de register.
//se coloca o insterta en user router
function authMiddlewares(req, res, next) {
    if (!req.session.userLogged) {//si no tengo a nadie en session
        return res.redirect('/users/login');
    }
    next();//dejar que siga y vaya al el controlador
}
module.exports = authMiddlewares;