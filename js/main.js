document.querySelector('#clickMe').addEventListener('click', makeReq);

async function makeReq() {
  const res = await fetch(`/api`);
  const data = await res.json();
  alert(data.result);
}
