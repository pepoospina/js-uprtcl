(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{250:function(t,s,e){"use strict";e.r(s);var a=e(28),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"developing-micromodules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#developing-micromodules"}},[t._v("#")]),t._v(" Developing "),e("code",[t._v("MicroModules")])]),t._v(" "),e("p",[t._v("This guide assumes you have gone through "),e("a",{attrs:{href:"use/installing-the-micro-orchestrator"}},[t._v("Using MicroModules")]),t._v(" and already know the basic concepts about "),e("code",[t._v("MicroModules")]),t._v(".")]),t._v(" "),e("p",[t._v("Technically, a "),e("code",[t._v("MicroModule")]),t._v(" is only a javascript class that extends from the "),e("a",{attrs:{href:"https://github.com/uprtcl/js-uprtcl/blob/develop/packages/micro-orchestrator/src/orchestrator/micro.module.ts",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MicroModule")]),e("OutboundLink")],1),t._v(" superclass. This superclass specifies certain properties that define how the module behaves, mainly what are its dependencies and how the modules loads itself.")]),t._v(" "),e("h2",{attrs:{id:"properties-of-micromodules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties-of-micromodules"}},[t._v("#")]),t._v(" Properties of "),e("code",[t._v("MicroModules")])]),t._v(" "),e("p",[t._v("All "),e("code",[t._v("MicroModules")]),t._v(" can define these properties:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("id")]),t._v(": a unique identifier, which means that there should be only one instance of that module in the application.")]),t._v(" "),e("li",[e("code",[t._v("bindings")]),t._v(": specify all the bindings that this module has registered to the "),e("code",[t._v("MicroOrchestrator")]),t._v(" container during initialization.")]),t._v(" "),e("li",[e("code",[t._v("dependencies")]),t._v(": identifier of all the modules that this module depends on. They need to be present when the module is loaded.")]),t._v(" "),e("li",[e("code",[t._v("submodules")]),t._v(": all the modules that compose this bigger module. They will be loaded just before the present module is.")])]),t._v(" "),e("h2",{attrs:{id:"micromodules-loading-lifecycle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#micromodules-loading-lifecycle"}},[t._v("#")]),t._v(" "),e("code",[t._v("MicroModules")]),t._v(" loading lifecycle")]),t._v(" "),e("p",[t._v("Here is the flow of how the "),e("code",[t._v("MicroOrchestrator")]),t._v(" loads "),e("code",[t._v("MicroModules")]),t._v(", when executing the "),e("code",[t._v("loadModules()")]),t._v(" function:")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("Register all modules ids")]),t._v(" to the list of modules being loaded at current time.")])]),t._v(" "),e("p",[t._v("Now, for each module being loaded:")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("strong",[t._v("Load dependencies first")]),t._v(":")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Check the "),e("code",[t._v("dependencies")]),t._v(" list")]),t._v(" an make sure that the modules with specified ids there are already loaded or being loaded at the same time.")]),t._v(" "),e("li",[t._v("If there are dependencies that are being loaded at the same time of the present module, load the dependencies first.")]),t._v(" "),e("li",[t._v("After that, if some dependency is missing, "),e("strong",[t._v("fail to load")]),t._v(" the module.")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Load submodules: "),e("strong",[t._v("execute the load lifecycle")]),t._v(" for each of the submodules.")]),t._v(" "),e("li",[e("strong",[t._v("Execute the "),e("code",[t._v("onLoad")]),t._v(" function")]),t._v(" of the module being loaded.")])]),t._v(" "),e("h2",{attrs:{id:"defining-your-micromodule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defining-your-micromodule"}},[t._v("#")]),t._v(" Defining your "),e("code",[t._v("MicroModule")])]),t._v(" "),e("p",[t._v("In this guide we are going to be using typescript to define our modules, but you can define them in javascript just as easily, without specifying the types of each variable.")]),t._v(" "),e("h3",{attrs:{id:"_1-create-a-class-extending-from-micromodule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-class-extending-from-micromodule"}},[t._v("#")]),t._v(" 1. Create a class extending from "),e("code",[t._v("MicroModule")])]),t._v(" "),e("p",[t._v("The first step is to define a standard class extending "),e("code",[t._v("MicroModule")]),t._v(". The only required property to set is the "),e("code",[t._v("onLoad")]),t._v(" function:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" interfaces "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inversify'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MicroModule "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@uprtcl/micro-orchestrator'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyModule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MicroModule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This function will be executed when the module is being loaded")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("container"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" interfaces"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here we should execute any loading functions that our module requires to work")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The inversify container can be modified through the "),e("a",{attrs:{href:"https://github.com/inversify/InversifyJS/blob/master/wiki/container_api.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Container API"),e("OutboundLink")],1),t._v(". But for now, we won't code our "),e("code",[t._v("onLoad")]),t._v(" function just yet: first we're going to define dependencies and submodules.")]),t._v(" "),e("h3",{attrs:{id:"_2-declare-dependencies-to-other-modules-optional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-declare-dependencies-to-other-modules-optional"}},[t._v("#")]),t._v(" 2. Declare dependencies to other modules (optional)")]),t._v(" "),e("p",[t._v("Declaring dependencies is as easy as including the module's "),e("code",[t._v("id")]),t._v(" in the "),e("code",[t._v("dependency")]),t._v(" list property:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" interfaces "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inversify'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CortexModule "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@uprtcl/cortex'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MicroModule "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@uprtcl/micro-orchestrator'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyModule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MicroModule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dependencies "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CortexModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This function will be executed when the module is being loaded")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("container"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" interfaces"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here we should execute any loading functions that our module requires to work")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This is expressing that "),e("code",[t._v("MyModule")]),t._v(" will only work when "),e("code",[t._v("CortexModule")]),t._v(" is also loaded in the "),e("code",[t._v("MicroOrchestrator")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"_3-compose-different-submodules-optional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-compose-different-submodules-optional"}},[t._v("#")]),t._v(" 3. Compose different submodules (optional)")]),t._v(" "),e("p",[t._v("Adding submodules is easy as well, adding the "),e("code",[t._v("submodules")]),t._v(" property:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" interfaces "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inversify'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CortexModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PatternsModule "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@uprtcl/cortex'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MicroModule "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@uprtcl/micro-orchestrator'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CustomPattern "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./custom-pattern'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyModule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MicroModule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dependencies "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CortexModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("submodules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PatternsModule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomPattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This function will be executed when the module is being loaded")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("container"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" interfaces"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here we should execute any loading functions that our module requires to work")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This will load all submodules before executing the "),e("code",[t._v("onLoad")]),t._v(" function of our module. If any of the submodules specifies an "),e("code",[t._v("id")]),t._v(" it will only get loaded once: multiple loads of a module with the same "),e("code",[t._v("id")]),t._v(" will only execute the "),e("code",[t._v("onLoad")]),t._v(" function once.")]),t._v(" "),e("h3",{attrs:{id:"_4-define-module-bindings-and-register-services-optional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-define-module-bindings-and-register-services-optional"}},[t._v("#")]),t._v(" 4. Define module bindings and register services (optional)")]),t._v(" "),e("p",[t._v("Every module "),e("strong",[t._v("can register services, functions or any type of object inside the "),e("code",[t._v("Container")])]),t._v(". This objects will be made "),e("strong",[t._v("available to any other module, as well as to all custom elements")]),t._v(" defined inside the "),e("code",[t._v("customElements")]),t._v(" registry.")]),t._v(" "),e("p",[t._v("When the "),e("code",[t._v("onLoad")]),t._v(" method is called, you can assume:")]),t._v(" "),e("ul",[e("li",[t._v("All dependencies will be available and loaded (you can get other module's bindings with "),e("code",[t._v("container.get()")]),t._v(")")]),t._v(" "),e("li",[t._v("All submodules will be loaded")])]),t._v(" "),e("p",[t._v("After this method is called, other modules will assume:")]),t._v(" "),e("ul",[e("li",[t._v("All "),e("code",[t._v("bindings")]),t._v(" declared by this module are available in the container (bind them using "),e("code",[t._v("container.bind()")]),t._v(")")])]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" interfaces "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inversify'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CortexModule "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@uprtcl/cortex'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MicroModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ElementsModule "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@uprtcl/micro-orchestrator'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CustomPattern "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./custom-pattern'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HttpService "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./http-service'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyModule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MicroModule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dependencies "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CortexModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("submodules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PatternsModule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomPattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" bindings "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    BackendService"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http-service'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This function will be executed when the module is being loaded")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("container"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" interfaces"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here we should execute any loading functions that our module requires to work")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// And bind all services specified in the `bindings` property")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("container")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bindings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BackendService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("to")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HttpService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"_5-define-the-module-s-id-optional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-define-the-module-s-id-optional"}},[t._v("#")]),t._v(" 5. Define the module's id (optional)")]),t._v(" "),e("p",[t._v("If your module "),e("strong",[t._v("only needs to be loaded once")]),t._v(" and should serve as a "),e("strong",[t._v("base layer for other modules to depend on")]),t._v(", you can specify the module's identifier with the "),e("code",[t._v("id")]),t._v(" static property. This is akin to making the module 'singleton'.")]),t._v(" "),e("p",[t._v("This has some consequences:")]),t._v(" "),e("ul",[e("li",[t._v("The module will only be loaded once: if "),e("code",[t._v("MicroOrchestrator")]),t._v(" finds a module with the same "),e("code",[t._v("id")]),t._v(" that one module already present, it will not load the module a second time.")]),t._v(" "),e("li",[t._v("Other modules can specify a dependency to this module by including the module's "),e("code",[t._v("id")]),t._v(" inside their "),e("code",[t._v("dependencies")]),t._v(" property.")])]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" interfaces "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inversify'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CortexModule "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@uprtcl/cortex'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MicroModule "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@uprtcl/micro-orchestrator'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CustomPattern "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./custom-pattern'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HttpService "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./http-service'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyModule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MicroModule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-module'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  dependencies "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CortexModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("submodules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PatternsModule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomPattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" bindings "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    BackendService"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http-service'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This function will be executed when the module is being loaded")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("container"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" interfaces"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here we should execute any loading functions that our module requires to work")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// And bind all services specified in the `bindings` property")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("container")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bindings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BackendService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("to")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HttpService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);