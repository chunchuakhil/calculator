export {};

export class MyCallculater implements calculator {
    constructor(){

    }
    addition(num: number, ...num2: number[]): number {
        let total=0;
       // throw new Error("Method not implemented.");
       //return (num+function(num2){return 7})
       num2.forEach(element => {
           total=total+element;
           
       });
       return num+total;

    }    
    substraction(num: string): string {
        throw new Error("Method not implemented.");
    }
    multiplication(num: string): string {
        throw new Error("Method not implemented.");
    }
    division(num: string): string {
        throw new Error("Method not implemented.");
    }

        
}




