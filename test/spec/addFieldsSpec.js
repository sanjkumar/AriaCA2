/**
 * Created by sanjeev on 26/03/2014.
 */

//jasmin test code

    describe("multiply() function", function () {

        it("should  multiplication any numbers", function(){
            expect( Number.multiply('2, 2' ) ).toEqual( 4 );
        });
    });

    describe("When adding the numbers", function() {
        it("should equal 3", function () {
            expect( add(1, 2)).toEqual(3);
        });

    });

