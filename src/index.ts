//Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання.
// Наприклад, тип значення для кожного ключа може бути число | рядок.

// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями.
// Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.

// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта,
// подібного до масиву. Ключі повинні бути числами, а значення - певного типу.

// Створіть інтерфейс з певними властивостями та індексною сигнатурою.
// Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру
// для додаткових динамічних властивостей.

// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший,
// додаючи специфічні властивості.

// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи
// відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).

interface ITestInterface {
   [keyWord: string]: number | string;
}

interface IFuncInterface {
    [key : string]: (...args: any[]) => any;
}

type PossibleType = number | string | boolean ;// Вказуемо тип значень, які очікуємо
interface IArrayLikeObject {
    [index: number]: PossibleType ;
}

interface ICustomObject {
    name: string;
    [key: string]: any;
}

interface IBaseInterface {
    [key: string]: any;
}

interface IUniqueInterface extends IBaseInterface {
    description: string;
    price: number;
}

interface IIndexSignatureObject {
    [key: string]: any;
}

function areValuesNumbers(obj: IIndexSignatureObject): boolean {
    const keys = Object.keys(obj);
    for (const key of keys) {
        if (typeof obj[key] !== 'number') {
            return false;
        }
    }
    return true;
}