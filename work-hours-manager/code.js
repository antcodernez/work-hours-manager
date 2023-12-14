class Node {
    constructor(element)
        {
            this.element = element;
            this.next = null;
        }
}

class LinkedList {
    constructor()
        {
            this.head = null;
            this.size = 0;
        }
    add(element)
        {
            let node = new Node(element);
            let current;

            if(this.head == null)
                {
                    this.head = node;
                }
            else
                {
                    
                    current = this.head 
                    while(current.next)
                        {
                            current = current.next;
                        }
                    current.next = node;
                }
            this.size++;
        }
    getFirst()
        {
            return this.head;
        }
    getLast()
        {
            let lastNode = this.head;
            if(lastNode)
                {
                    while (lastNode.next) 
                        {
                            lastNode = lastNode.next;
                        }
                }
            return lastNode;
        }
    insertAt(element, index)
        {
            if(element < 0 || index > this.size)
                {
                    return console.log("Insert a valid index");
                }
            else
                {
                    let node = new Node(element);
                    let curr, prev;

                    curr = this.head;
                    
                    if(index == 0)
                        {
                            node.next = this.head;
                            this.head = node;
                        }
                    else
                        {
                            curr = this.head;
                            let it = 0;

                            while (it < index) 
                                {
                                    it++;
                                    prev = curr;
                                    curr = curr.next;
                                }
                            node.next = curr;
                            prev.next = node;
                        }
                    this.size++;
                }
        }
    removefrom(index)
        {
            if(index < 0 || index >= this.size)
                {
                    return console.log("please enter a valid index");
                }
            else
                {
                    let current, prev, it = 0;
                    current = this.head;
                    prev = current;

                    if(index === 0)
                        {
                            this.head = current.next;
                        }
                    else
                        {
                            while(it < index)
                                {
                                    it++;
                                    prev = current;
                                    current = current.next;
                                }
                            prev.next = current.next;
                        }
                    this.size--;

                    return current.element;
                }
        }
    removeElement(element)
        {
            let  current = this.head;
            let prev = null;

            while (current != null) 
                {
                    if(current.element === element)
                        {
                            if(prev == null)
                                {
                                    this.head = current.next;
                                }
                            else
                                {
                                    prev.next = current.next;
                                }
                            this.size--;
                            return current.element;
                        }
                    prev = current;
                    current = current.next;
                }
            return -1;
        }
    indexOf(element)
        {
            let count = 0;
            let current = this.head;

            while (current != null) 
                {
                    if(current.element === element)
                        {
                            return count;
                        }
                    count++;
                    current = current.next;
                }
            
            return -1;
        }
    printList()
        {
            let current = this.head;
            let str = "";
            
            while(current)
                {
                    str += current.element + " ";
                    current = current.next;
                }
            console.log(str);
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

const employersList = new LinkedList();

const form = document.querySelector(".form");

form.addEventListener("submit", e => {
    e.preventDefault()
    const name = document.getElementById("name").value;
    const area = document.getElementById("department").value;
    if(area == "selecciona")
        {
            alert("Debes seleccionar un área valida por favor");
            return;
        }
    const salary = parseFloat(document.getElementById("salary").value);
    if(salary <= 0)
        {
            alert("El salario solo debe ser un numero positivo")
            return;
        }
    const journey = document.getElementById("journey").value;

    if(journey == "selecciona")
        {
            alert("Debes seleccionar una jornada valida por favor");
            return;
        }

    const data = new Employee(name, area, salary, journey);
    employersList.add(data);
    renderEmpleoyers(employersList);
    
});

const containerCards = document.querySelector(".content-empleados");

function renderEmpleoyers(list) 
    {
        containerCards.innerHTML = "";
        let current = list.head;
        let i = 1;
        while(current)
            {
                const {journey, salary, area, name} = current.element;
                const cardContainerEmploiye = document.createElement("div");
                cardContainerEmploiye.classList.add("content-empleados__card");
                cardContainerEmploiye.setAttribute("id", i);
                
                const containerBtns = document.createElement("div");
                const btnEdit = document.createElement("button");
                btnEdit.innerText = "Editar";
                const btnShow = document.createElement("button");
                btnShow.innerText = "Eliminar";
                btnEdit.classList.add("btn");
                btnEdit.classList.add("btn-edit-info");
                btnShow.classList.add("btn");
                btnShow.classList.add("btn-show-info");
                btnShow.setAttribute("id", i);
                btnEdit.setAttribute("id", i);
                btnShow.addEventListener("click", deleteEmployer);
                containerBtns.append(btnShow, btnEdit);
                btnEdit.addEventListener("click", updateEmployer);

                const dataUser = document.createElement("p");
                dataUser.classList.add("general-info");
                dataUser.innerText = `Area: ${area} 
                    Salario: ${salary}
                    Jornada: ${journey}`;

                const nameEmployer = document.createElement("p");
                nameEmployer.classList.add("name-empleado");
                nameEmployer.innerText = `${name}`;

                cardContainerEmploiye.append(nameEmployer, dataUser, containerBtns);
                containerCards.appendChild(cardContainerEmploiye);
                current = current.next;
                i++;
            }
    }   
function deleteEmployer() {
        const employersNodeList = document.querySelectorAll(".btn-show-info");
        employersNodeList.forEach(element => {
            element.addEventListener("click", e => {
                    const id = e.target.getAttribute("id"); // Corrige el error tipográfico aquí
                    const confir = confirm("Esta seguro que desea eliminar al empleado con el id " + id);
                    if (confir)
                        {
                            employersList.removefrom(id - 1);
                            renderEmpleoyers(employersList);
                        }
                    else
                        {
                            return;
                        }
                });
        });
    }

const formToUpdateData = document.querySelector(".form-number-two");
const shadowOnForm = document.querySelector(".imagen-light");
const btnCloseForm= document.querySelector(".btn-close-form");

function updateEmployer() 
    {
        const btnEditsNodeList = document.querySelectorAll(".btn-edit-info");        
        
        btnEditsNodeList.forEach(element => {
            element.addEventListener("click", e => {
                    const id = e.target.getAttribute("id"); // Corrige 
                    shadowOnForm.classList.toggle("show");

                    formToUpdateData.addEventListener("submit", (e) => {
                        e.preventDefault()
                        const name = document.getElementById("name-update").value;
                        const area = document.getElementById("department-update").value;
                        if(area == "selecciona")
                            {
                                alert("Debes seleccionar un área valida por favor");
                                return;
                            }
                        const salary = parseFloat(document.getElementById("salary-update").value);
                        if(salary <= 0)
                            {
                                alert("El salario solo debe ser un numero positivo")
                                return;
                            }
                        const journey = document.getElementById("journey-update").value;
                    
                        if(journey == "selecciona")
                            {
                                alert("Debes seleccionar una jornada valida por favor");
                                return;
                            }
                    
                        const data = new Employee(name, area, salary, journey);
                        console.log(data);
                        console.log(employersList);
                        employersList.removefrom(id -1);
                        employersList.insertAt(data, id -1);
                        console.log(employersList);
                        shadowOnForm.classList.toggle("show");
                        containerCards.innerHTML = "";
                        renderEmpleoyers(employersList);
                        
                    })
                });
        });
    }

btnCloseForm.addEventListener("click", () => {
    shadowOnForm.classList.toggle("show");   
})