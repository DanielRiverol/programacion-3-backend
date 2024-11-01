const loggerUrl = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
};

export {
    loggerUrl
}