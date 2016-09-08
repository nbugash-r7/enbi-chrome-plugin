/**
 * Created by nbugash on 2016-09-08.
 */
var fs = require('fs');
var exec = require('child_process').exec;
var prompt = require('prompt');
var selectOptionSchema = {
    properties: {
        option: {
            required: true,
            type: 'number',
            description: 'What do you want to do \n[1] Create new module\n[2] Delete current module\n[3] Exit\n'
        }
    }
};
var createModuleSchema =  {
    properties: {
        module_name: {
            required: true,
            description: "Enter the name of the new module",
            type: 'string'
        }
    }
};
var destroyModuleSchema = {
    properties: {
        module_name: {
            required: true,
            description: "Enter the name of the module you want to destroy",
            type: 'string'
        }
    }
};
console.log('Bootstrapping new module of the chrome plugin....');
prompt.start();
prompt.get(selectOptionSchema, function(err, optionResult) {
    switch(optionResult.option) {
        case 1:
            console.log("Creating new module...");
            prompt.get(createModuleSchema, function(err, createModuleResult) {
                if(err) {
                    console.error(err);
                    prompt.stop();
                }
                var module_name = createModuleResult.module_name.toLowerCase();
                if (!fs.existsSync('src/modules/' + module_name)){
                    fs.mkdir('src/modules/' + module_name, null, function() {
                        console.log('"' + module_name + '" module created!');
                        console.log('Bootstrapping complete!!');
                        prompt.stop();
                    })
                } else {
                    console.error('WARNING: "' + module_name + '" module has already been created');
                    prompt.stop();
                }
            });
            break;
        case 2:
            console.log('Destroying module...');
            prompt.get(destroyModuleSchema, function(err, destroyModuleResult) {
                if (err) {
                    console.err(err);
                    prompt.stop();
                }
                var module_name = destroyModuleResult.module_name.toLowerCase();
                if (fs.existsSync('src/modules/' + module_name)){
                    fs.rmdir('src/modules/' + module_name, function(){
                        console.log(module_name + " destroyed!");
                        prompt.stop();
                    });
                } else {
                    console.log(module_name + " does not exist!");
                    prompt.stop();
                }
            });
            break;
        case 3:
            prompt.stop();
            break;
    }
});