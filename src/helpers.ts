export const incrementCount = (value: number, incFn: Function) => {
  incFn(value + 1);
};

export const decrementCount = (value: number, decFn: Function, counterRef, addToCardRef): void => {
  if (value > 1) {
    decFn(value - 1);
  } else {
    if (counterRef.current && addToCardRef.current) {
      counterRef.current.style.display = 'none';
      addToCardRef.current.style.display = 'block';
    }
  }
};