'use strict';
const minimist = require('minimist');



// COnstructors 
class Input {
    constructor() {

        const args = minimist(process.argv.slice(2));
        // console.log(args,11111111111111111111111234567)
        // console.log(process.argv,"I ammm aaaaargvvvvvvv")
        if (Object.keys(args)[0]) {
            // ############ it was working with [1] when running the file from terminal but I will make it [0] because of the mocking ###################
            // to check if the user entered the command(add) or not 
            this.action = this.validateAction(Object.keys(args)[0]);
        }
        else {
            console.log("please Enter an Input")
        }


        if ( args['add'] || args['a'] ) {
            //to validate showing the text only when it is defined
            this.paylod = this.validatePaylod(args[this.action]);
            // console.log(`Adding Note:${this.paylod}`);
        }
        else {
            // showed when text is empty (undefined)
            console.log("Please enter a NOTE!");
        }


        this.IfAddEntered = this.valid(args);
    }


    validateAction(action) {
        // check the value from the action
        const regAction = /add|a/i
        return regAction.test(action) ? action : 'Not Valid Input! \n you should use (--add , -a or --a) to add a not';
    }

    validatePaylod(text) {
        const regPaylod = /\w*/i
        return regPaylod.test(text) ? text : undefined;
    }
    valid(action) {
        if(Object.keys(args)[0]){ // in case it is empty and didn't enter an action
            const regAction = /add|a/i
            return regAction.test(action) ? true : false;
        }
        else {
            return "no action"
        }
    }

}







module.exports = Input;

