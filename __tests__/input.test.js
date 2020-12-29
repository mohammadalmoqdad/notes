 let Input=require('../lib/input');
 let minimist=require('minimist');


 // mocking 
jest.mock('minimist');
minimist.mockImplementation(()=>{

    return {
        add: 'Here is my noooooote yupeee',
    }


})



 describe('input Model', ()=>{

     it('the action should not be empty',()=>{
        let inputObj= new Input();
        expect(inputObj.IfAddEntered).not.toEqual("no action")
     })

     it('The action should be a or add',()=>{
         let inputObj=new Input();
         expect(inputObj.IfAddEntered).toEqual(true);
     })


    
     })