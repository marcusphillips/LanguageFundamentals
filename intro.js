//  _
// | | __ _ _ __   __ _ _   _  __ _  __ _  ___
// | |/ _` | '_ \ / _` | | | |/ _` |/ _` |/ _ \
// | | (_| | | | | (_| | |_| | (_| | (_| |  __/
// |_|\__,_|_| |_|\__, |\__,_|\__,_|\__, |\___|
//                |___/             |___/
//   __                 _                            _        _
//  / _|_   _ _ __   __| | __ _ _ __ ___   ___ _ __ | |_ __ _| |___
// | |_| | | | '_ \ / _` |/ _` | '_ ` _ \ / _ \ '_ \| __/ _` | / __|
// |  _| |_| | | | | (_| | (_| | | | | | |  __/ | | | || (_| | \__ \
// |_|  \__,_|_| |_|\__,_|\__,_|_| |_| |_|\___|_| |_|\__\__,_|_|___/
//
//
// An introduction to the lanugage of JavaScript by way of vague
// recollections and hasty (not thorough or detailed) failing unit tests.
//
// <3 @fat, a class taught in 2012


$(function () {


  //  ____  _                  _               _
  // / ___|| |_ __ _ _ __   __| | __ _ _ __ __| |___
  // \___ \| __/ _` | '_ \ / _` |/ _` | '__/ _` / __|
  //  ___) | || (_| | | | | (_| | (_| | | | (_| \__ \
  // |____/ \__\__,_|_| |_|\__,_|\__,_|_|  \__,_|___/
  //
  // JavaScript's standard global objects


  module("Standards");


  test( "Array", function () {

    expect(5);

    var array;

    ok ( array instanceof Array , "is an array" );
    ok ( array[0] === "cool"    , "first value is cool" );
    ok ( array[1] === "story"   , "second value is story" );
    ok ( array[1] === "bro"     , "third value is bro" );
    ok ( array.length == 3      , "three items in the array" )

  });


  test( "Boolean", function () {

    expect(4);

    var bool;

    ok ( bool instanceof Boolean , "is a boolean" );
    ok ( bool                    , "boolean is truthy" );
    ok ( bool == true            , "boolean is still truthy" );
    ok ( bool === true           , "boolean is true." );

  });


  test( "Date", function () {

    expect(3);

    var date;
    var month;
    var year;

    ok ( date instanceof Date , "is a date" );
    ok ( month == "Feb"       , "is a month");
    ok ( year  == 2012        , "is a year");

  });


  test( "Function", function () {

    expect(4);

    var fn;

    ok ( fn instanceof Function , "is a function" );
    ok ( fn()  === 0            , "returns 0");
    ok ( fn(2) === 2            , "returns 2");
    ok ( fn(4) === 4            , "returns 4");

  });


  test( "Number", function () {

    expect(3);

    var number;

    ok ( typeof number == "Number" , "is a number" );
    ok ( number                    , "is truthy" );
    ok ( (number + 5) == 10        , "+5 is 10" );

  });


  test( "Object", function () {

    expect(2);

    var object;

    ok ( typeof object == "Object" , "is an object" );
    ok ( "property" in object      , "has a property 'property'" );

  });


  test( "RegExp", function () {

    expect(4);

    var regexp;

    ok ( regexp instanceof RegExp           , "is a regular expression" );
    ok ( regexp.test("I <3 javascript")     , "matches i <3 javascript" );
    ok ( regexp.test("I <3 fat")            , "matches i <3 fat" );
    ok ( regexp.test("I <3 all the things") , "matches i <3 all the things" );

  });

  test( "String", function () {

    expect(2);

    var string;

    ok ( typeof string == "string" , "is a string" );
    ok ( string === "(O_O )"       , "matches i <3 javascript" );

  });



  //  _  __                                _
  // | |/ /___ _   ___      _____  _ __ __| |___
  // | ' // _ \ | | \ \ /\ / / _ \| '__/ _` / __|
  // | . \  __/ |_| |\ V  V / (_) | | | (_| \__ \
  // |_|\_\___|\__, | \_/\_/ \___/|_|  \__,_|___/
  //           |___/
  //
  // JavaScript's keywords and how to use them


  module("Keywords");


  test( "if/else", function () {

    expect(1);

    var condition = true;

    if (condition) {
       ok( false , "this should not be called" );
    } else {
       ok( true  , "this should be called" );
    }

  });


  test( "switch/case/default", function () {

    expect(1);

    var expression = "";
    var value = 0;

    switch (expression) {

      case label1:
        value = value + 1;

      case label2:
        value = value + 1;

      case label3:
        value = value + 1;

      default:
        ok ( value === 2 , "this value should equal 2" );

    }

  });


  test( "for", function () {

    expect(4);

    var array = [];

    for (var i = 0; i < array.length; i++;) {
      ok ( true , "this should be called 4 times" );
    }

  });


  test( "while/do", function () {

    expect(4);

    var value = 0;

    while (value) {
      ok ( true , "this should be called 4 times" );
    }

  });


  test( "break/continue", function () {

    expect(4);

    var condition = true;
    var array = [];

    for (var i = 0; i < array.length; i++;) {

      if (condition) {
        break;
      }

      if (!condition) {
        continue;
      }

      ok ( true , "this should be called 4 times" );
    }

  });


  test( "throw/try/catch/finally", function () {

    expect(1);

    throw "(╯°□°）╯︵ ┻━┻";

    ok ( true , "this should be called" );

  });


  test( "return", function () {

    expect(3);

    ok ( true , "this should be called" );
    ok ( true , "this should be called" );
    ok ( true , "this should be called" );

    ok ( false , "this should not be called" );
    ok ( false , "this should not be called" );
    ok ( false , "this should not be called" );
    ok ( false , "this should not be called" );

  });

  test( "function", function () {

    expect(3);

    function fn ( argument ) {
      ok ( true , "this should be called 3 times" );
    }

  });


  test( "var", function () {

    expect(4);

    var value = 0;

    function fn () {

      while (value--) {
        ok ( true , "this should be called 3 times" );
      }

    }

    fn();

    ok ( value === 0 , "value should equal 0" );

  });


  test( "delete", function () {

    expect(1);

    var object = {
      peropert1: "value"
      property2: "value"
    }

    for (var i in object) {
      ok ( true, "this hsould be called 1 time" );
    }

  });


  test( "with", function () {

    expect(1);

    var object = {
      property1: "value"
      property2: "value"
    }

    ok ( property1 === property2 , "the object's property was deleted" );

  });


  test( "typeof", function () {

    expect(7);

    var type1 = "";
    var type2 = "";
    var type3 = "";
    var type4 = "";
    var type5 = "";
    var type6 = "";
    var type7 = "";

    ok ( typeof undefined      == type1 , "typeof undefined" );
    ok ( typeof null           == type2 , "typeof null" )
    ok ( typeof true           == type3 , "typeof true" );
    ok ( typeof 2              == type4 , "typeof number" );
    ok ( typeof "string"       == type5 , "typeof string" );
    ok ( typeof function () {} == type6 , "typeof function" );
    ok ( typeof { fat: 1 }     == type7 , "typeof function" );

  });


  test( "this", function () { /* hint: call/apply */

    expect(1);

    var that = this;

    function fn () {
      ok (this == that, "this == that" );
    }

  });


  test( "new", function () {

    expect(2);

    var fn1;
    var fn2;

    function Fn (argument) {
      this.value = argument
    }

    ok ( fn1.value == 1, "different instances" );
    ok ( fn2.value == 2, "different instances" );

  });


  test( "instanceof", function () {

    expect(3);

    var value1;
    var value2;
    var value3;

    ok( value1 instanceof Array  , "instance of array"  );
    ok( value2 instanceof Object , "instance of object" );
    ok( value3 instanceof Number , "instance of RegExp" );

  });


  test( "in", function () {

    expect(1);

    var object = {};

    ok ( "property" in object , "the object's property was declared" );

  });


  // __   ____ _ _ __
  // \ \ / / _` | '__|
  //  \ V / (_| | |
  //   \_/ \__,_|_|
  //
  // Variables in Javascript. What they do.


  module("Var");


  test( "simple", function () {

    expect(1);

    var value = 0;
    var result = false;

    if (true) {
      value = 2;
    }

    value = 3;

    if (true) {
      var value = 4;
    }

    ok( value === result , "value equals result" );

  });


  test( "scope", function () {

    expect(1);

    var value = 0;
    var result = false;

    function fn() {
      value = 1;
      var value = 2;

      !function () {
        var value = 3;
      }();

      !function () {
        value = 4;
      }

    }

    fn();

    ok( value === result , "value equals result" );

  });


  test( "simple hoisting", function () {

    expect(1);

    var value = 1;
    var result = false;

    function fn() {

      if (!value) {
        var value = 10;
      }

    }

    fn();

    ok ( value === result , "value equals result" );

  });


  test( "hoisting wtf", function () {

    expect(1);

    var value = 1;
    var result = false;

    function fn() {
      value = 10;
      return;
      var value = 1000;
    }

    fn();

    ok( value === result , "value equals result" );

  })


  //  _              _   _
  // | |_ _ __ _   _| |_| |__  _   _ _ __   ___  ___ ___
  // | __| '__| | | | __| '_ \| | | | '_ \ / _ \/ __/ __|
  // | |_| |  | |_| | |_| | | | |_| | | | |  __/\__ \__ \
  //  \__|_|   \__,_|\__|_| |_|\__, |_| |_|\___||___/___/
  //                           |___/
  //
  // Learning true and false. Truthy and Falsey.


  module("truthy/falsey");


  test( "truthy/falsey", function () {

    expect(4);

    var truthy = true;
    var falsey = false;
    var result;

    ok ( 0         == result , "is truthy/falsey" );
    ok ( ""        == result , "is truthy/falsey" );
    ok ( false     == result , "is truthy/falsey" );
    ok ( 1         == result , "is truthy/falsey" );
    ok ( -1        == result , "is truthy/falsey" );
    ok ( "false"   == result , "is truthy/falsey" );
    ok ( true      == result , "is truthy/falsey" );
    ok ( (!"")     == result , "is truthy/falsey" );
    ok ( (!0)      == result , "is truthy/falsey" );
    ok ( (!!false) == result , "is truthy/falsey" );
    ok ( (!!+Date) == result , "is truthy/falsey" );
    ok ( (!~-1)    == result , "is truthy/falsey" );

  });


  //  ____  _            _
  // | __ )| | ___   ___| | _____
  // |  _ \| |/ _ \ / __| |/ / __|
  // | |_) | | (_) | (__|   <\__ \
  // |____/|_|\___/ \___|_|\_\___/
  //
  // JS Functions, Closures, and Blocks


  test( "function arguments", function () {

    expect(1);

    var result;

    function fn (argument1, argument2) {
      ok ( arguments.length == result , "correct argument length" );
    }

    fn(1,2,3,4,5);

  });


  test( "conditional function definition", function () {

    expect(1);

    var value = 0;
    var result;

    function fn (argument1, argument2) {
      value = 1;
    }

    if (false) {
      function fn (argument1, argument2) {
        value = 2;
      }
    }

    fn();

    ok ( value == result , "correct result specified" );

  });


  test( "function expressions", function () {

    expect(1);

    var value = 0;
    var result;

    function each (array, fn) {
      for (var i = 0, l = array.length; i < l; i++;) {
        fn(array[i], i);
      }
    }

    each([1, 2, 3], function (item) {
      value = value * item;
    });

    ok ( value == result , "correct result specified" );

  });


  test( "function recursion", function () { /* replace result with truthy or falsey */

    expect(1);

    var value = 0;
    var result;

    function fn (array, fn) {
      array.pop();
      value++;
      fn(array);
    }

    fn([1, 2, 3, 4]);

    ok ( value == result , "correct result specified" );

  });

  test( "function scope", function () {

    expect(1);

    var result;
    var object = {};

    function fn () {
      var object = { property: "value" };
    }

    fn();

    ok ( (property in object) == result , "correct result specified" );

  });


  test( "closures", function () {

    expect(1);

    var result;
    var name;

    function person () {

      var name;

      return {

        setName: function (string) {
          name = string;
        },

        getName: function () {
          return name;
        }

      }

    }

    var wayne = person().setName("@liltunechi")

    ok ( wayne.getName() == result , "correct result specified" );

    var jacob = person().setName("@fat")

    ok ( jacob.getName() == result , "correct result specified" );

  });


  test( "blocks", function () {

    expect(1);

    var result;
    var value = 0;

    if (true) {
      var value = 1;
    }

    if (false) {
      var value = 2;
    }

    {
      var value = 3;
    }

    ok ( value == result , "correct result specified" );

  });


  //
  //      _ ____   ___  _   _
  //     | / ___| / _ \| \ | |
  //  _  | \___ \| | | |  \| |
  // | |_| |___) | |_| | |\  |
  //  \___/|____/ \___/|_| \_|
  //
  // JavaScript object notation


  module("JSON");

  test( "stringify", function () {

    expect(1);

    var result;
    var object = {};
    object.string = "new property";
    object.number = 3;

    ok ( JSON.stringify(object) == result , "JSON stringified" );

  });

  test( "toJSON", function () {

    expect(1);

    var object = {};
    object.string = "new property";
    object.toJSON = function () { return "bar"; };

    ok ( JSON.stringify(object) == result , "JSON stringified with toJSON" );
  });

  test( "parse", function () {

    expect(1);

    var result;
    var json = '{"property":"value"}';

    ok ( JSON.parse(json)["property"] == result , "JSON parsed" );

  });


});