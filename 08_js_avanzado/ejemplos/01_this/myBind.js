function myBind(fn, context) {
  return function() {
    return fn.apply(context, arguments);
  }
}
