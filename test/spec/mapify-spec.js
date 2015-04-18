describe('mapify', function () {

  describe('Object mapping', function () {

    var myObject = {
      a: 1,
      b: 2,
      c: 3
    };

    var multiplyObj;

    beforeEach(function () {
      multiplyObj = mapify(myObject, function (prop) {
        return prop * prop;
      });
    });

    it('should map over and return a new Object', function () {
      expect(Object.prototype.toString.call(multiplyObj)).toBe('[object Object]');
    });

    it('should multiple each value by itself', function () {
      expect(multiplyObj.a).toBe(1);
      expect(multiplyObj.b).toBe(4);
      expect(multiplyObj.c).toBe(9);
    });

  });

  describe('Array mapping', function () {

    var myArray = [
      1,
      3,
      9
    ];

    var multiplyArr;

    beforeEach(function () {
      multiplyArr = mapify(myArray, function (prop) {
        return prop * prop;
      });
    });

    it('should map over and return a new Array', function () {
      expect(Object.prototype.toString.call(multiplyArr)).toBe('[object Array]');
    });

    it('should multiple each value by itself', function () {
      expect(multiplyArr[0]).toBe(1);
      expect(multiplyArr[1]).toBe(9);
      expect(multiplyArr[2]).toBe(81);
    });

  });

});
