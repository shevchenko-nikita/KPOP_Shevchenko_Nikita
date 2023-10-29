
enum Category {
    BUSINESS_ANALYST,
    DEVELOPER,
    DESIGNER,
    QA,
    SCRUM_MASTER
}

function getAllworkers() {
    let workers = [
    {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BUSINESS_ANALYST},
    {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.DEVELOPER},
    {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.DESIGNER},
    {id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.DEVELOPER}
    ]
    return workers;
}
    
function logFirstAvailable(workers: {name: string, surname: string, available: boolean}[] = getAllworkers()) {
    console.log(`number of employee: ${workers.length}`);
    
    for(let worker of workers) {
        if(worker.available) {
            console.log(`${worker.name} ${worker.surname} - AVAILABLE`);
        }
    }
}

function getWorkersNamesByCategory(targetCategory: Category = Category.DESIGNER) : Array<string> {
    let workers : Array<string> = [];

    for(const worker of getAllworkers()) {
        if(worker.category === targetCategory) {
            workers.push(worker.surname);
        }
    }

    return workers;
}

function logWorkersNames(names: string[]) {
    for(const name of names) {
        console.log(name);
    }
}

function getWorkerByID(id: number) {
    for(let worker of getAllworkers()) {
        if(worker.id == id) {
            return worker;
        }
    }
}

function createCustomerID(name: string, id: number) : string {
    return `${name}, id - ${id}`;
}

function createCustomer(name: string, age?: number, city?: string) {
    console.log(`customer name: ${name}`);
    if(age != undefined) {
        console.log(`age ${age} years`);
    }
    if(city != undefined) {
        console.log(`city: ${city}`);
    }
}

function checkoutWorkers(customer: string, workerIDs: number[]) {
    
    let workers_list;
    let available_workers;
    
    for(let id of workerIDs) {
        workers_list.push(getWorkerByID(id));
    }
    
    for(let worker of workers_list) {
        if(worker.available) {
            available_workers.push(worker);
        }
    }

    console.log(`customer: ${customer}`);

    return available_workers;
}

logFirstAvailable(getAllworkers());

let developers = getWorkersNamesByCategory(Category.DEVELOPER);
developers.forEach(worker => console.log(worker));

let myID: string = createCustomerID('Ann', 10);
console.log(myID);

let IdGenerator: (name: string, id: number) => string;

IdGenerator = createCustomerID;

console.log(IdGenerator('Kate', 11));

logWorkersNames(getWorkersNamesByCategory());

logFirstAvailable(); 

createCustomer('Ann');
createCustomer('Ann', 27);
createCustomer('Ann', 27, 'Lviv');

let myWorkers = checkoutWorkers('Ann', [1, 2, 4]);
myWorkers.forEach(name => console.log(`${name}: AVAILABLE`));