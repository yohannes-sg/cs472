function b() {
  function a() {
    if (true) {
      var x = 15;
      let d = 8;
    }
    {
      x = 10;
      console.log(x);
    }
    console.log(x);
  }
  x = 7;
  a();
}
var x = 20;
b();
