describe('Тест функции unit', function () {
    it('1/0 = infinity', function () {
        expect(unit.calc(0)).toBe(Infinity);
    });
    it('sqrt(-1) = NaN', function () {
        expect(unit.calc(-1)).toBeNaN();
    });
});


