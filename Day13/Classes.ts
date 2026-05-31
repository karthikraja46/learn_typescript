/*

1.Class
2.Read only Properties
3.Optional Properties
4.Static variables and methods
    // 1) Static properties/methods are common across all the objects
    2) Static properties/methods can be accessed through class name directly
    3) static properties can be modified by using any object

*/

class Student {
    readonly studentId: number; // Read-only property(can be assigned only once, inside the constructor)
    name: string;               // Regular property
    email?: string;             // Optional property
    static schoolName: string = "Greenwood high";  // static variable shared among all instances/objects


    // Constructor
    constructor(sid: number, sname: string, email?: string) {
        this.studentId = sid;
        this.name = sname;
        this.email = email;
    }

    // Method
    displayInfo(): void {
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
        // console.log("Email:", this.email);
        if(this.email){
            console.log("Email", this.email);
        }
        else{
            console.log("email is not provided");
        }
    }

static changeSchoolName(newName:string): void{

    Student.schoolName = newName;

    // this.schoolName = newName; // this is used when u call a class here u cant use this

}
}

// Create object usage
let s1 = new Student(101, "Karthik");
let s2 = new Student(102, "bob", "raj@gmail.com")

// Call method
s1.displayInfo();
s2.displayInfo();

//change the school name using the static method
Student.changeSchoolName("Sunrise Academy");
