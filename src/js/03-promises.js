
import Notiflix from 'notiflix';

const refs = {
submitBtn: document.querySelector('button'),
formRef: document.querySelector('form'),
}

refs.formRef.addEventListener('submit', onSbmBtnClick);

function onSbmBtnClick(e) {
  e.preventDefault();
        
        let delay = Number(refs.formRef.delay.value);
        const step = Number(refs.formRef.step.value);
        const amount = Number(refs.formRef.amount.value);

  for (let i = 1; i <= amount; i += 1){
  
    createPromise(i, delay).then(({ position, delay }) => Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`), delay) 
  .catch(({position, delay}) => Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`), delay) ;
    delay += step;
  }
  refs.formRef.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  let params = { position, delay}
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) { resolve(params) }
      else { reject(params) }
    }, delay)
  return params
  })
  }


