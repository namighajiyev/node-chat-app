const expect = require('expect');
var {
    generateMessage,
    generateLocationMessage
} = require('./message');
describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'namiq';
        var text = 'hello world'
        var message = generateMessage(from, text);
        expect(message.from).toEqual(from);
        expect(message.text).toEqual(text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        });

    });

});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        var from = 'namiq';
        var latitude = "40";
        var longitude = "49";
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var message = generateLocationMessage(from, latitude, longitude);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            url
        });
    });

});