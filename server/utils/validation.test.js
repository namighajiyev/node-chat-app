const expect = require('expect');
var {
    isRealString
} = require('./validation');

describe('isRealString', () => {

    it('should reject non-string values', () => {
        var result = isRealString(5);
        expect(result).toBeFalsy();
    });
    it('should reject strings with only spaces', () => {
        var result = isRealString('   ');
        expect(result).toBeFalsy();
    });
    it('should allow string with non-space characters', () => {
        var result = isRealString('namiq');
        expect(result).toBeTruthy();
    });

});