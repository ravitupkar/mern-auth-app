module.exports.errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        err: err.message || 'some thing wrong'
    });
}

module.exports.notfound = (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
}