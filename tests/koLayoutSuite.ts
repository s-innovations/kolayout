
import {isDefined } from "kolayout/utils/isDefined";

describe("koLayoutSuite", function () {
    it("isDefined spec", function () {

        expect(isDefined(undefined)).toBe(false);
        expect(isDefined(null)).toBe(false);
        expect(isDefined("a")).toBe(true);
        expect(isDefined(false)).toBe(true);
        expect(isDefined(0)).toBe(true);

    });
});





