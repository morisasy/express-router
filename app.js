const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// require our routes/index.js file
const userRoutes = require('./routes/usersRouter');
const index = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Now let's tell our app about those routes we made!
app.use("/", index);
app.use("/users", userRoutes);



// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
