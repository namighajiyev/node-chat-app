const expect = require('expect');
var {
    generateMessage
} = require('./message');
describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'namiq';
        var text = 'hello world'
        var message = generateMessage(from, text);
        expect(message.from).toEqual(from);
        expect(message.text).toEqual(text);
        //expect(message.createdAt).toBeLessThan(new Date().getTime());
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        });

    });

})