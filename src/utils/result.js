export const Result = (res,data,status=200,contentType) => {
    if (contentType) {
        res.set("Content-Type", contentType);
        return res.send(data);
    }
    return res.status(status).json({
        data:data,
        status
    });
};