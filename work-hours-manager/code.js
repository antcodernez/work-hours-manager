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

    renderEmpleoyers(empleados);
});

const containerCards = document.querySelector(".content-empleados");

function renderEmpleoyers(queue) 
    {
        containerCards.innerHTML = "";
        let i = 0;
        while(i < queue.count)
            {
                const cardContainerEmploiye = document.createElement("div");
                cardContainerEmploiye.classList.add("content-empleados__card");
                
                const containerBtns = document.createElement("div");
                const btnEdit = document.createElement("button");
                btnEdit.innerText = "Editar";
                const btnShow = document.createElement("button");
                btnShow.innerText = "Mostrar";
                btnEdit.classList.add("btn");
                btnEdit.classList.add("btn-edit-info");
                btnShow.classList.add("btn");
                btnShow.classList.add("btn-show-info");
                containerBtns.append(btnEdit, btnShow);
                
                const dataUser = document.createElement("p");
                dataUser.classList.add("general-info");
                dataUser.innerText = `Area: ${queue.stack[i].area} ${queue.stack[i].salary}
                    ${queue.stack[i].journey}`;

                const nameEmployer = document.createElement("p");
                nameEmployer.classList.add("name-empleado");
                nameEmployer.innerText = `${queue.stack[i].name}`;

                cardContainerEmploiye.append(nameEmployer, dataUser, containerBtns);
                containerCards.appendChild(cardContainerEmploiye);
                i++;
            }
    }   