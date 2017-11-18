function make_curry(f){
  let expected_arg_count = f.length;
  return (function curry(){
    //Take a copy of arguments to cook curry
    let args = Array.prototype.slice.call(arguments, 0);
    if(args.length >= expected_arg_count){
      //Got enough arguments, return the result
      return f.apply(null, args);
    }else {
      return (function raw(){
        //Get more arguments to cook curry.
        let args2 = Array.prototype.slice.call(arguments, 0);
        return curry.apply(null, args.concat(args2));
      });
    }
  });
}

let cook = make_curry(function(a,b,c,d){
                      return a+b+c+d;
                      });

console.log(cook);               //curry()
console.log(cook(1));            //raw()
console.log(cook(1)(2)(3));      //raw()
console.log(cook(1)(2)(3)(4));   //10
console.log(cook(1)(2)(3)(4,5)); //10
//Fourth call gives int result, so fifth arg has no function context
//console.log(cook(1)(2)(3)(4)(5)); //Error
