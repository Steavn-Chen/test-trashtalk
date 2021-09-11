module.exports = {
  ifeq: function(a, b, opt) {
    // console.log(a,b)
    if (a === b) {
      return opt.fn(this)
    } else return opt.inverse(this)
  }
}