console.log("This is tutorial 30");

const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// This creates abdul object
let abdul = Object.create(proto);
abdul.name = "abdul";
abdul.role = "Programmer";
// abdul.changeName("abdul2")
// console.log(abdul)

// This also creates abdul object
const abdul1 = Object.create(proto, {
    name: { value: "abdul", writable: true },
    role: { value: "Programmer" },
});
abdul1.changeName("abdul2")
// console.log(abdul1)


// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let abdulObj = new Employee("abdul", 345099, 87);
// console.log(abdulObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
// console.log(rohan);


let food={
    cooked:function(){
        return "Your delivery is ready for it";
    },
    requirdGredient:function(gredient1,gredient2,gredient3){
        return (`You need Gredient for pizza ${this.gredient1} ${this.gredient2} ${this.gredient3}`)
    }
}

let pizza = Object.create(food)
pizza.gredient1 = "floors"
pizza.gredient2 = "paneer"
pizza.gredient3 = "corn"
console.log(pizza.requirdGredient())