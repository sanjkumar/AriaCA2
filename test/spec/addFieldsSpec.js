/**
 * Created by sanjeev on 26/03/2014.
 */

//jasmin test code

describe("addFields(a, b) function", function () {
    it("should equal 3", function () {
        expect( add(1, 2)).toEqual(3);
    });

    it("should equal 3.75", function(){
        expect( add(1.75, 2) ).toEqual( 3.75 );
    });

    it("should NOT equal '3' as a String", function () {
        expect( add(1, 2)).not.toBe( "3" );
    });
});