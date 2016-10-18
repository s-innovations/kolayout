//Not really sure where I got this from (copy/paste from project to project)
//Code converted to typescript.

import text = require("text");
import "./stringTemplateEngine";
import ko = require("knockout");


var loader = {
    load: function (name: string, req: any, load: any, config: any) {
        var onLoad = config.isBuild ? load : function (content: string) {

            var safeName = inferTemplateName(name);
            ko.templates[safeName] = content;
            load(safeName);
        };

        text.load(name, req, onLoad, config);
    },
    write: function (pluginName: string, moduleName: string, write: any, config: any) {
        text.write("text", moduleName, write, config);
        var safeName = inferTemplateName(moduleName);

        write.asModule(pluginName + "!" + moduleName,
            "define(['text!" + moduleName + "', 'knockout', 'stringTemplateEngine'], function (content, ko) {" +
            "ko.templates['" + safeName + "'] = content;" +
            "});\n"
        );
    }
};

function inferTemplateName(name: string) {
    var templateName: string;

    var index = name.indexOf("!");
    if (index !== -1) {
        //use the template name that is specified
        templateName = name.substring(index + 1, name.length);
    } else {
        //use the file name sans the path as the template name
        var parts = name.split("/");
        templateName = parts[parts.length - 1];

        //remove the extension from the template name
        var extensionIndex = templateName.lastIndexOf(".");
        if (extensionIndex !== -1) {
            templateName = templateName.substring(0, extensionIndex);
        }
    }
    //  console.log(templateName);
    return templateName;
}


export = loader;