
export const authRequired = (req, res, next) => {
    
    console.log('token validado');
    console.log(req.headers);
    console.log(req.cookies);
    next()
}

