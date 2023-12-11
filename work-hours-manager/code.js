class Queue {
    constructor()
        {
            this.stack = {};
            this.count = 0;
        }
    push(element)
        {
            this.stack[this.count] = element;
            this.count++;
            return this.stack;
        }
    peek()
        {
            return this.stack[this.count - 1];
        }
    size()
        {
            return this.count;
        }
    print()
        {
            console.log(this.stack);
        }
    pop()
        {
            this.count--;
            const element = this.stack[this.count];
            delete this.stack[this.count];
            return element;
        }
    isEmpty()
        {
            this.count == 0 ? console.log("The queue is empty") :  console.log(`The long of the queue is ${this.count}`);
        }
    }

class Employee {
    constructor(name, area, salary, journey)
        {
            this.name = name;
            this.area = area;
            this.salary = salary;
            this.journey = journey;
                this.horasTrabajadas = null;
                this.horaEntrada = null;
                this.horaSalida = null;
                this.horasExtra = null;
                this.isWorking = false;
        }
    setHoraSalida(data)
        {   
            this.horaSalida = data;
        }
    setHoraEntrada(data)
        {   
            this.horaEntrada = data;
        }
    setHorasTrabajadas(data)
        {
            this.horasTrabajadas = data;
        }
    
}

const empleados = new Queue();

const empleado1 = new Employee("Jesus Antonio Estrada Jimenez", "TI", 120000, 8);
const empleado2 = new Employee("Daniel Pérez", "Marketing", 5000, 8);
empleados.push(empleado1);
empleados.push(empleado2);
console.log(empleados.stack);


const form = document.querySelector(".form");

form.addEventListener("submit", e => {
    e.preventDefault()
    const name = document.getElementById("name").value;
    const area = document.getElementById("department").value;
    const salary = parseFloat(document.getElementById("salary").value);
    const journey = parseFloat(document.getElementById("journey").value);
    const data = new Employee(name, area, salary, journey);
    empleados.push(data);

    console.log(empleados.stack);
    // const data = Object.fromEntries(
    //     new FormData(e.target)
    // )
    // alert(JSON.stringify(data))
});