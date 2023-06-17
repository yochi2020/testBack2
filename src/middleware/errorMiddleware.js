export const errorMiddleware = (
    err,
    req,
    res,
    next,
) => {
    const status = err.status || 400;
    res.status(status).json({
        message: err.message,
        status: status,
    });
};

export const errorHandle = (message,status=400) => {
    const error = new Error(message);
    error.status = status;
    return error;
};

