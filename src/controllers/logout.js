
exports.get = async (req, res, next) => {
    try {
        res.clearCookie("access-token");
        res.status(200).json({"message": "Successfully Logout"})
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err)
    }
}

