class CounterComponent {
  private count: number = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  getCount(): number {
    return this.count;
  }
}

// Создание стора счетчика
class CounterStore {
  private counter: CounterComponent = new CounterComponent();

  incrementCounter(): void {
    this.counter.increment();
  }

  decrementCounter(): void {
    this.counter.decrement();
  }

  getCounterValue(): number {
    return this.counter.getCount();
  }
}

// Создание экземпляра стора счетчика
const counterStore: CounterStore = new CounterStore();

// Добавление кнопок инкремента/декремента
const incrementButton: HTMLButtonElement = document.createElement('button');
incrementButton.textContent = '+';
incrementButton.addEventListener('click', () => {
  counterStore.incrementCounter();
  updateCounterValue();
});

const decrementButton: HTMLButtonElement = document.createElement('button');
decrementButton.textContent = '-';
decrementButton.addEventListener('click', () => {
  counterStore.decrementCounter();
  updateCounterValue();
});

// Вывод состояния счетчика на экран
const counterValueElement: HTMLDivElement = document.createElement('div');
counterValueElement.textContent = counterStore.getCounterValue().toString();

function updateCounterValue(): void {
  counterValueElement.textContent = counterStore.getCounterValue().toString();
}

// Добавление элементов на страницу
const appContainer: HTMLDivElement = document.createElement('div');
appContainer.appendChild(incrementButton);
appContainer.appendChild(decrementButton);
appContainer.appendChild(counterValueElement);
document.body.appendChild(appContainer);