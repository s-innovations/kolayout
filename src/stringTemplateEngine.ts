//https://github.com/rniemeyer/SamplePresentation/blob/master/js/stringTemplateEngine.js
//Changed to typescript

import  ko =require("knockout");


let templates: { [name: string]: string } = {},
    data: { [name: string]: any } = {},
    engine = new ko.nativeTemplateEngine();



class stringTemplate implements KnockoutTemplateSourcesDomElement {
    constructor(public templateName: string) {

    }
    data(key: string, value?: string) {
        data[this.templateName] = data[this.templateName] || {};

        if (arguments.length === 1) {
            return data[this.templateName][key];
        }

        data[this.templateName][key] = value;
    }
    text(value?: string) {
        if (arguments.length === 0) {

            var template = templates[this.templateName];
            if (typeof (template) === 'undefined') {
                // throw Error("Template not found: " + this.templateName);
                return this.templateName;// "<div>Template not found: " + this.templateName + "</div>";
            }
            return template;

        }

        templates[this.templateName] = value;
    }


}

ko.templateSources.stringTemplate = stringTemplate;



engine.makeTemplateSource = function (template, doc) {
    let elem: HTMLElement;
    if (typeof template === "string") {
        elem = (doc || document).getElementById(template);

        if (elem) {
            return new ko.templateSources.domElement(elem);
        }

        return new ko.templateSources.stringTemplate(template);
    }
    else if (template && ((template.nodeType == 1) || (template.nodeType == 8))) {
        return new ko.templateSources.anonymousTemplate(template);
    }
};

//make the templates accessible
ko.templates = templates;

//make this new template engine our default engine
ko.setTemplateEngine(engine);

export = engine;
