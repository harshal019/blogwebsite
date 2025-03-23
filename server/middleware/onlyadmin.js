import jwt from 'jsonwebtoken'
import { handleError } from '../helpers/handleError.js'
export const onlyadmin = async (req, res, next) => {
    const token = req.cookies.access_token
    console.log(token);

    try {
        if (!token) {
            return handleError(403, 'Unathorized')
        }
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET)
        if (decodeToken.role === 'admin') {
            req.user = decodeToken
            next();
        } else {
            return handleError(403, 'Unathorized')
        }

        // if (decodeToken.role !== 'admin') {
        //     return handleError(403, 'Unathorized')
        // }
        // req.user = decodeToken
        // next();

    } catch (error) {
        handleError(500, error.message)
    }
}