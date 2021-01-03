'use strict';
const minimist = require('minimist');



// COnstructors 
class Input {
    constructor() {


        const args = minimist(process.argv.slice(2));
        console.log(process.argv, "arrgv")
        console.log(args, "this issssssssss argggggggsssssss");
        if (args) {
            //just to avoid typeerror when it looks empty

            if (Object.keys(args)[1]) {
                // to check if the user entered the command(add) or not 
                this.action = this.validateAction(Object.keys(args)[1]);
            } else {
                console.log("please Enter an Input")
            }
        }




        // ****acttions*****
        if (args['add'] || args['a']) {

            //to validate showing the text only when it is defined
            this.paylod = this.validatePaylod(args[this.action]);
            this.category = args['category'];

        }


        else if (this.action == "list") {
            // to cover the cases if it has a value or not
            if (args["list"]) {
                this.category = args["list"];
                if (args['id']) {
                    this.id = args['id'];
                }
            }
            else {
                this.category = true;
            }
            console.log(this.category)

        }



        else if (this.action == 'delete') {

            if (args['delete']) {

                this.id = args['delete'];
            }
            else {
                console.log("enter an id!")
            }

        }



        else if (this.action == "update") {
            if (args['update']) {
                this.paylod = args['update'];
                this.id = args['id'];
            }
        }



        else {
            console.log("Please enter a NOTE and a CATEGORY !");
        }

        this.IfAddEntered = this.valid(args);

    }





    validateAction(action) {
        // check the value from the action
        const regAction = /add|a|delete|list|update/i
        return regAction.test(action) ? action : 'Not Valid Input! \n you should use (--add , -a or --a) to add a not';
    }


    validatePaylod(text) {
        const regPaylod = /\w*/i
        return regPaylod.test(text) ? text : undefined;
    }


    valid(action) {
        if (Object.keys(action)[0]) { // in case it is empty and didn't enter an action

            const regAction = /add|a|delete|list|update/i
            return regAction.test(Object.keys(action)[0]) ? true : false;

        } else {

            return "no action"

        }
    }

}







module.exports = Input;

