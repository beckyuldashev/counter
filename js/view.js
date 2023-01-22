function createView({ onIncrementBtnClick,  onDecrementBtnClick, onResetBtnClick}) {
  const output = document.getElementById('output');
  const decrementBtn = document.getElementById('decrement-btn');
  const incrementBtn = document.getElementById('increment-btn');
  const resetBtn = document.getElementById('reset-btn');

  decrementBtn.addEventListener('click', onDecrementBtnClick);
  incrementBtn.addEventListener('click', onIncrementBtnClick);
  resetBtn.addEventListener('click', onResetBtnClick);

  return {
    render({counter}) {
      output.textContent = counter;
    }
  };
}