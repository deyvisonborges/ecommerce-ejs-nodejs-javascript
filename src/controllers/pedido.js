'use strict'

exports.getPedido = async (req, res, next) => {
    try {
        return res.render('client/_pedido');
    } catch (err) {
        next(err);
    }
}