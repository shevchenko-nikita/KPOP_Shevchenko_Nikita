
enum Category {
    BUSINESS_ANALYST,
    DEVELOPER,
    DESIGNER,
    QA,
    SCRUM_MASTER
}

interface MyWorker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
    markPrize: PrizeLogger;
}

function getAllworkers() : MyWorker[] {
    let workers : MyWorker[] = [
    {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BUSINESS_ANALYST, markPrize: prizeLoggerFunc},
    {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.DEVELOPER, markPrize: prizeLoggerFunc},
    {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.DESIGNER, markPrize: prizeLoggerFunc},
    {id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.DEVELOPER, markPrize: prizeLoggerFunc}
    ];
    return workers;
}
    
function getWorkerByID(id: number) : MyWorker | undefined {
    for(let worker of getAllworkers()) {
        if(worker.id == id) {
            return worker;
        }
    }
}

function PrintWorker(worker: MyWorker) {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
}


interface PrizeLogger {
    (str: string) : void;
}

let prizeLoggerFunc = (str: string): void => {
    console.log(str);
}

let logPrize: PrizeLogger = prizeLoggerFunc;

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string) : void;
}

let makeAssist = (custName: string) : void => {
    console.log(`Assist customer ${custName}`);
}

let favoriteAuthor: Author = {name: 'Nick', email: 'nick.gmail', numBooksPublished: 10};

let favoriteLibrarian: Librarian = {name: 'Michel', email: 'michel.gmail', department: 'A', assistCustomer: makeAssist};


class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

let x: UniversityLibrarian = {name: 'A', email: 'A', department: 'A', assistCustomer: makeAssist};
let newFavoriteLibrarian: Librarian = x;

abstract class ReferenceItem {
    public title: string;
    protected year: number;
    private _publisher: string;

    static department: string = 'department';

    constructor(newTitle: string, newYear: number) {
        this.title = newTitle;
        this.year = newYear;
        
        console.log(`Creating a new ReferenceItem with title \'${this.title}\' and year ${this.year}`);
    }

    abstract printCitation(): void;
    
    getPublisher() : string {
        return this._publisher.toUpperCase();
    }

    setPublisher(newPublisher: string): void {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`title \'${this.title}\' was published in year ${this.year}`);
    }
}

// let ref: ReferenceItem = new ReferenceItem('Title', 2015);
// ref.printItem();

// ref.setPublisher('abcdf');
// console.log(`${ref.getPublisher()}`);

class Encyclopedia extends ReferenceItem {
    public edition: number;

    constructor(newTitle: string, newYear: number, newEdition: number) {
        super(newTitle, newYear);
        this.edition = newEdition;
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: edition ${this.edition}`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

let refBook: Encyclopedia = new Encyclopedia('Title refBook', 2011, 2);
refBook.printItem();



