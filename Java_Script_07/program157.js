class Demo
{
    constructor()
    {
        console.log("Inside Constructor");
    }

}

function main()
{
    //Demo dobj = new Demo();    //error

    dobj1 = new Demo();
    dobj2 = new Demo();
}

main()