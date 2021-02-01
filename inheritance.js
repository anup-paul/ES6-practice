class Parent
{
    constructor()
    {
        this.fatherName = 'Dhiman Paul';  //this.fatherName and this.name different hote hobe otherwise kaj korbe na
    }
}
class Child extends Parent
{
    constructor(childName)
    {
        super();
        this.name = childName;     //this.fatherName and this.name different hote hobe otherwise kaj korbe na
    }
    //we can also use function like this way
    fullName()
    {
        return this.name + " " + this.fatherName;
    }
}

const bio = new Child('Dhrity');
const bio2 = new Child(bio. fullName());
console.log(bio);
console.log(bio2);