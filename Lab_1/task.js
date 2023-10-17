var Category;
(function (Category) {
    Category[Category["BUSINESS_ANALYST"] = 0] = "BUSINESS_ANALYST";
    Category[Category["DEVELOPER"] = 1] = "DEVELOPER";
    Category[Category["DESIGNER"] = 2] = "DESIGNER";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["SCRUM_MASTER"] = 4] = "SCRUM_MASTER";
})(Category || (Category = {}));
function getAllworkers() {
    var workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BUSINESS_ANALYST },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.DEVELOPER },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.DESIGNER },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.DEVELOPER }
    ];
    return workers;
}
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = getAllworkers(); }
    console.log("number of employee: ".concat(workers.length));
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.available) {
            console.log("".concat(worker.name, " ").concat(worker.surname, " - AVAILABLE"));
        }
    }
}
function getWorkersNamesByCategory(targetCategory) {
    if (targetCategory === void 0) { targetCategory = Category.DESIGNER; }
    var workers = [];
    for (var _i = 0, _a = getAllworkers(); _i < _a.length; _i++) {
        var worker = _a[_i];
        if (worker.category === targetCategory) {
            workers.push(worker.surname);
        }
    }
    return workers;
}
function logWorkersNames(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
function getWorkerByID(id) {
    for (var _i = 0, _a = getAllworkers(); _i < _a.length; _i++) {
        var worker = _a[_i];
        if (worker.id == id) {
            return worker;
        }
    }
}
function createCustomerID(name, id) {
    return "".concat(name, ", id - ").concat(id);
}
function createCustomer(name, age, city) {
    console.log("customer name: ".concat(name));
    if (age != undefined) {
        console.log("age ".concat(age, " years"));
    }
    if (city != undefined) {
        console.log("city: ".concat(city));
    }
}
function checkoutWorkers(customer, workerIDs) {
    var workers_list;
    var available_workers;
    for (var _i = 0, workerIDs_1 = workerIDs; _i < workerIDs_1.length; _i++) {
        var id = workerIDs_1[_i];
        workers_list.push(getWorkerByID(id));
    }
    for (var _a = 0, workers_list_1 = workers_list; _a < workers_list_1.length; _a++) {
        var worker = workers_list_1[_a];
        if (worker.available) {
            available_workers.push(worker);
        }
    }
    console.log("customer: ".concat(customer));
    return available_workers;
}
logFirstAvailable(getAllworkers());
var developers = getWorkersNamesByCategory(Category.DEVELOPER);
developers.forEach(function (worker) { return console.log(worker); });
var myID = createCustomerID('Ann', 10);
console.log(myID);
var IdGenerator;
IdGenerator = createCustomerID;
console.log(IdGenerator('Kate', 11));
getWorkersNamesByCategory();
logFirstAvailable();
createCustomer('Ann');
createCustomer('Ann', 27);
createCustomer('Ann', 27, 'Lviv');
var myWorkers = checkoutWorkers('Ann', [1, 2, 4]);
myWorkers.forEach(function (name) { return console.log("".concat(name, ": AVAILABLE")); });
