var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        input_temp.value = "32F";
        converter();
        assert.deepEqual(output_temp.innerHTML, "0.0 Centígrados");
    });
    test('45C = 113.0 Farenheit', function() {
        input_temp.value = "45C";
        converter();
        assert.deepEqual(output_temp.innerHTML, "113.0 Farenheit");
    });
    test('5X = error', function() {
        input_temp.value = "5X";
        converter();
        assert.match(output_temp.innerHTML, /ERROR/);
    });
    test('-25C = -13.0 Farenheit', function(){
        input_temp.value = "-25C";
        converter();
        assert.deepEqual(output_temp.innerHTML, "-13.0 Farenheit");
    });
});
