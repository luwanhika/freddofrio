const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);


const mostreVendas = document.querySelector('.vendas_ordens').addEventListener('click', (e)=>{
  e.preventDefault();

  c('.container').style.opacity = 0;
  c('.container').style.display = 'block';
  setTimeout(()=>{
    c('.container').style.opacity = 1;
  }, 200);
});
