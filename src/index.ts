//Уявімо, що ми розробляємо платіжну систему. Бекенд розробники віддали
// нам ендпоінт, на який потрібно відправити наступну інформацію:
// {
//   "sum": 10000,
//     "from": 2,
//     "to": 4
// }
//У відповідь сервер надішле один з наступних варіантів (при успіху або провалі)

// In case of success
// {
//   "status": "success",
//     "data": {
//   "databaseId": 567,
//       "sum": 10000,
//       "from": 2,
//       "to": 4
// }
// },

// In case of fail
// {
//   "status": "failed",
//     "data": {
//   "errorMessage": "Недостаточно средств",
//       "errorCode": 4
// }
// }
//Нам потрібно створити інтерфейси для об'єктів реквесту та обох варіантів респонсу.
// Будьте уважні, старайтеся не допускати дублювання та використовуйте знання, набуті
// на попередніх лекціях.
// P.S: Не треба робити реалізацію запиту на бекенд, створювати додаткову логіку і тд.
// В рамках цього завдання ми вчимося працювати з абстракціями

interface IPayData {
    "sum": number;
     "from": number;
     "to": number;
}

const payData : IPayData = {
    "sum": 10000,
    "from": 2,
    "to": 4
}

type TResponse = "success" | "failed";

interface IResponseData extends IPayData {
    "databaseId" : number;
}

interface IFailedResponseData {
    "errorMessage": "Недостаточно средств";
    "errorCode": 4;
}

interface IResponse  {
    "status": TResponse ;
     "data": IResponseData | IFailedResponseData;
}

const responseSuccess : IResponse = {
     "status": "success",
     "data": {
       "databaseId": 567,
       "sum": 10000,
       "from": 2,
       "to": 4
   }
}

const responseFailed : IResponse = {
    "status": "failed",
    "data": {
        "errorMessage": "Недостаточно средств",
        "errorCode": 4,
    }
}