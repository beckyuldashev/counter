const INITIAL_VALUE = 0;

const counter = createCounter(INITIAL_VALUE);
const view = createView({
  onDecrementBtnClick: handleDecrementBtnClick,
  onIncrementBtnClick: handleIncrementBtnClick,
  onResetBtnClick: handleResetBtnClick,
});

view.render({counter: INITIAL_VALUE});

function handleDecrementBtnClick() {
  counter.decrement();
  view.render({
    counter: counter.get()
  });
}

function handleIncrementBtnClick() {
  counter.increment();
  view.render({
    counter: counter.get()
  });
}

function handleResetBtnClick() {
  counter.reset();
  view.render({
    counter: counter.get()
  });
}