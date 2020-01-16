export {};

export class CallculaterImpl implements ICalculator {
    constructor(){}
    addition(num: number, ...num2: number[]): number {
        let total=0;
       
       num2.forEach(element => {
           total=total+element;
       });
       return num+total;
    }
    substraction(num: number, ...num2: number[]): number {
        let total=0;
       
       num2.forEach(element => {
           total=total-element;
       });
       return num-total;
    }
    multiplication(num: number, ...num2: number[]): number {
        let total=0;
       
       num2.forEach(element => {
           total=total*element;
       });
       return num*total;
    }
    division(num: number, ...num2: number[]): number {
        let total=0;
       
       num2.forEach(element => {
           total=total/element;
       });
       return num/total;
    }
   
}




