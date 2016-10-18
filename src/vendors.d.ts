interface KnockoutBindingProvider {
    preprocessNode?: (node: HTMLElement) => void;
}
interface KnockoutBindingHandlers {
    koLayout: KnockoutBindingHandler;

}

interface KnockoutTemplateSources {
    stringTemplate: new (templateName: string) => KnockoutTemplateSourcesDomElement
}

interface KnockoutNativeTemplateEngine {
    makeTemplateSource: (t: string | HTMLElement, d: Document) => KnockoutTemplateSourcesDomElement;
}

interface KnockoutStatic {
    templates: { [name: string]: string }
}
declare module "text" {
    interface text {
        load(name: string, req: any, onLoad: any, config: any): void;
        write(pluginName: string, moduleName: string, write: any, config: any): void;
    }
    let a: text;
    export = a;
}
declare module "text!*" {
    let txt: string;
    export = txt;
}