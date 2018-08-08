


document.getElementById('btn').addEventListener(
  'click', () => {
  
  console.log(document.getElementById('text').value);
  
    document.getElementById('jerigonza').innerHTML = mixIt( document.getElementById('text').value);
  });
  
  
  let vocals = ['a', 'e', 'i', 'o', 'u'];
  
 let mixIt = function (str){
    let toWork = str;
    for (let index in vocals ){
      let vocal = vocals[index];
      toWork = toWork.split(vocal).join(vocal + 'p' + vocal);
    }
    return toWork;
  }