
import { isDefined } from "kolayout/utils/isDefined";
import { KoLayout } from "kolayout";
import * as ko from "knockout";

const emptyTemplateElement = document.createElement("DIV");
emptyTemplateElement.setAttribute("data-bind", "koLayout: lazyLayout");

class LazyLayout extends KoLayout {
    constructor() {
        super({ nodes: [emptyTemplateElement]});
    }

    public lazyLayout = ko.observable();
}

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

    it("run applybinding", () => {
        let e = document.createElement("DIV");
        e.setAttribute("data-bind", "koLayout: $data");

        let templateElement = document.createElement("DIV");
        templateElement.innerHTML = "helloworld";

        let layout = new KoLayout({ nodes: [templateElement] });
        ko.applyBindings(layout, e);
        expect(e).toBeDefined();

        expect(e.innerHTML).toBe("<div>helloworld</div>");
    });


    it("run virtual element", () => {
        let e = document.createElement("DIV");
        e.innerHTML = "<!-- koLayout : $data --><!-- dommy comment -->";

        let templateElement = document.createElement("DIV");
        templateElement.innerHTML = "helloworld";


        let layout = new KoLayout({ nodes: [templateElement] });
        ko.applyBindings(layout, e);
        expect(e).toBeDefined();

        expect(e.innerHTML).toBe("<!-- ko koLayout:  $data --><div>helloworld</div><!-- /ko --><!-- dommy comment -->");
    });


    it("run lazy layout", () => {
        let e = document.createElement("DIV");
        e.innerHTML = "<!-- koLayout : $data -->";
        
        let layout = new LazyLayout();
        let templateElement = document.createElement("DIV");
        templateElement.innerHTML = "helloworld";

       

        ko.applyBindings(layout, e);
        layout.lazyLayout(new KoLayout({ nodes: [templateElement] }));

        expect(e.innerHTML).toBe('<!-- ko koLayout:  $data --><div data-bind="koLayout: lazyLayout"><div>helloworld</div></div><!-- /ko -->');

             
    });

    it("run lazy async layout", (done) => {
        let e = document.createElement("DIV");
        e.innerHTML = "<!-- koLayout : $data -->";

        let layout = new LazyLayout();
        let templateElement = document.createElement("DIV");
        templateElement.innerHTML = "helloworld";

        layout.lazyLayout.extend({ rateLimit: 300 });

        ko.applyBindings(layout, e);

        setTimeout(() => {
            layout.lazyLayout(new KoLayout({ nodes: [templateElement] }));
            setTimeout(() => {                
                expect(e.innerHTML).toBe('<!-- ko koLayout:  $data --><div data-bind="koLayout: lazyLayout"><div>helloworld</div></div><!-- /ko -->');
                done();
            }, 300);
        }, 0);
    });
});





