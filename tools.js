

export class Student {
    name;
    level;
    department;

    constructor(name, level, department){
        this.name = name;
        this.level = level;
        this.department = department;
    }

    getName() {
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getLevel() {
        return this.level;
    }

    setLevel(level) {
        this.level = level;
    }

    getDepartment () {
        return this.department;
    }

    setDepartment(department) {
        this.department = department;
    }
}


// Async/await
export function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("slow");
        console.log("slow promise is done");
      }, 2000);
    });
  }
  

  const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
    ]);

export const grades = new Map();

