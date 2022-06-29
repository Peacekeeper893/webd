// javascript


class Calculator{
    
    constructor(n1,n2)
    {
        this.n1=n1;
        this.n2=n2;
    }

add()
{
    console.log(this.n1+this.n2)
}
};

let cal= new Calculator(5.2,9)
cal.add()

