var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BUSINESS_ANALYST, markPrize: prizeLoggerFunc },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.DEVELOPER, markPrize: prizeLoggerFunc },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.DESIGNER, markPrize: prizeLoggerFunc },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.DEVELOPER, markPrize: prizeLoggerFunc }
    ];
    return workers;
}
function getWorkerByID(id) {
    for (var _i = 0, _a = getAllworkers(); _i < _a.length; _i++) {
        var worker = _a[_i];
        if (worker.id == id) {
            return worker;
        }
    }
}
function PrintWorker(worker) {
    console.log("".concat(worker.name, " ").concat(worker.surname, " got salary ").concat(worker.salary));
}
var prizeLoggerFunc = function (str) {
    console.log(str);
};
var logPrize = prizeLoggerFunc;
var makeAssist = function (custName) {
    console.log("Assist customer ".concat(custName));
};
var favoriteAuthor = { name: 'Nick', email: 'nick.gmail', numBooksPublished: 10 };
var favoriteLibrarian = { name: 'Michel', email: 'michel.gmail', department: 'A', assistCustomer: makeAssist };
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log("".concat(this.name, " is assisting ").concat(custName));
    };
    return UniversityLibrarian;
}());
var x = { name: 'A', email: 'A', department: 'A', assistCustomer: makeAssist };
var newFavoriteLibrarian = x;
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(newTitle, newYear) {
        this.title = newTitle;
        this.year = newYear;
        console.log("Creating a new ReferenceItem with title '".concat(this.title, "' and year ").concat(this.year));
    }
    ReferenceItem.prototype.getPublisher = function () {
        return this._publisher.toUpperCase();
    };
    ReferenceItem.prototype.setPublisher = function (newPublisher) {
        this._publisher = newPublisher;
    };
    ReferenceItem.prototype.printItem = function () {
        console.log("title '".concat(this.title, "' was published in year ").concat(this.year));
    };
    ReferenceItem.department = 'department';
    return ReferenceItem;
}());
// let ref: ReferenceItem = new ReferenceItem('Title', 2015);
// ref.printItem();
// ref.setPublisher('abcdf');
// console.log(`${ref.getPublisher()}`);
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(newTitle, newYear, newEdition) {
        var _this = _super.call(this, newTitle, newYear) || this;
        _this.edition = newEdition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edition: edition ".concat(this.edition));
    };
    Encyclopedia.prototype.printCitation = function () {
        console.log("".concat(this.title, " - ").concat(this.year));
    };
    return Encyclopedia;
}(ReferenceItem));
var refBook = new Encyclopedia('Title refBook', 2011, 2);
refBook.printItem();
