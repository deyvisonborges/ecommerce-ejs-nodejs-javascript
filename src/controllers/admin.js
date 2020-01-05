'use strict'

// GET - página para registro de usuário
exports.getLogin = async (req, res, next) => {
    try {
        return res.render('admin/dash/index');
    } catch(err) {
        next(err);
    }
}
