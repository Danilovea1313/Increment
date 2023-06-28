var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this.count = 0;
    }
    CounterComponent.prototype.increment = function () {
        this.count++;
    };
    CounterComponent.prototype.decrement = function () {
        this.count--;
    };
    CounterComponent.prototype.getCount = function () {
        return this.count;
    };
    return CounterComponent;
}());
// Создание стора счетчика
var CounterStore = /** @class */ (function () {
    function CounterStore() {
        this.counter = new CounterComponent();
    }
    CounterStore.prototype.incrementCounter = function () {
        this.counter.increment();
    };
    CounterStore.prototype.decrementCounter = function () {
        this.counter.decrement();
    };
    CounterStore.prototype.getCounterValue = function () {
        return this.counter.getCount();
    };
    return CounterStore;
}());
// Создание экземпляра стора счетчика
var counterStore = new CounterStore();
// Добавление кнопок инкремента/декремента
var incrementButton = document.createElement('button');
incrementButton.textContent = '+';
incrementButton.addEventListener('click', function () {
    counterStore.incrementCounter();
    updateCounterValue();
});
var decrementButton = document.createElement('button');
decrementButton.textContent = '-';
decrementButton.addEventListener('click', function () {
    counterStore.decrementCounter();
    updateCounterValue();
});
// Вывод состояния счетчика на экран
var counterValueElement = document.createElement('div');
counterValueElement.textContent = counterStore.getCounterValue().toString();
function updateCounterValue() {
    counterValueElement.textContent = counterStore.getCounterValue().toString();
}
// Добавление элементов на страницу
var appContainer = document.createElement('div');
appContainer.appendChild(incrementButton);
appContainer.appendChild(decrementButton);
appContainer.appendChild(counterValueElement);
document.body.appendChild(appContainer);
