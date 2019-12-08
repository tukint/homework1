let getBudget = prompt("Ваш бюджет на месяц?");
let getDate = prompt("Введите дату в формате YYYY-MM-DD");
let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");

let appData = {
    budget: getBudget,
    timeData: getDate,
    expenses: {
        "ответ на первый вопрос": question1,
        "ответ на второй вопрос": question2,
    },      
    optionalExpenses: {},
    income : [],
    savings: false,
};
alert (getBudget/30);
console.log(appData);
