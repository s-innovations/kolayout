
import { isDefined } from "kolayout/utils/isDefined";
import { KoLayout } from "kolayout";

describe("koLayoutSuite", function () {
    it("isDefined spec", function () {

        expect(isDefined(undefined)).toBe(false);
        expect(isDefined(null)).toBe(false);
        expect(isDefined("a")).toBe(true);
        expect(isDefined(false)).toBe(true);
        expect(isDefined(0)).toBe(true);

    });


    it("KoLayout Constructor spec", () => {
        let options = {};
        let layout = new KoLayout(options);
        expect(layout).toBeDefined();
        expect(options).toEqual(layout.templateOptions());
        
    });
});





