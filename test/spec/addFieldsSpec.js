/**
 * Created by sanjeev on 26/03/2014.
 */

//jasmin test code

describe("add() function", function () {

    beforeEach(function() {
       add.curreent = 0;
    });

    describe("When adding the numbers", function() {
    it("should equal 3", function () {
        expect( add(1, 2)).toEqual(3);
    });

    it("should equal 3.75", function(){
        expect( add(1.75, 2) ).toEqual( 3.75 );
    });
    });
});