'use strict';
const minimist = require('minimist');



// COnstructors 
class Input {
    constructor() {

        const args = minimist(process.argv.slice(2));
        if (Object.keys(args)[1]) {
            // to check if the user entered the command(add) or not 
            this.action = this.validateAction(Object.keys(args)[1]);
        }
        else {
            console.log("please Enter an Input")
        }

        if (process.argv[3]) {
            //to validate showing the text only when it is defined
            this.paylod = this.validatePaylod(args[this.action]);
            console.log(`Adding Note:${this.paylod}`);
        }
        else {
            // showed when text is empty (undefined)
            console.log("Please enter a NOTE!");
        }
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

}







module.exports = Input;

