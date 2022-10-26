function concat_sum (tab1, tab2) {

    let sum = 0;
  
    let tab3 = tab1.concat(tab2);
    for (let i = 0; i < tab3.length ; i++) {
      for (let j = 0; j < tab3.length ; j++) {
        if (tab3[i] === tab3[j] && i !== j) {
          tab3[i] = 0;
          tab3[j] = 0;
          break;
        }
      }
    }
    for (let i = 0; i < tab3.length; i++) {
      sum += tab3[i];
    }
  
    return sum;
  }
  console.log(concat_sum ([4, 5, 8, 7, 9], [7, 6, 8, 5, 2]));
  
  
  
  function concat_sum_2 (tab1, tab2) {
      let sum = 0;
      let tab3 = tab1.concat(tab2);
      for (let i = 0; i < tab3.length; i++) {
        for (let j = 0; j < tab3.length; j++) {
          if (tab3[i] == tab3[j] && i !== j) {
            sum += tab3[i];         
          }
        } 
      }
    
    
      return sum/2;
    }
    console.log(concat_sum_2 ([4, 5, 8, 7, 9], [7, 6, 8, 5, 2]));
  
  
    
  
  function concat_sum_3 (tab1, tab2) {
    let sum1 = 0;
    let sum2 = 0;
    const htab = {};
    let tab3 = tab1.concat(tab2);
  
    for (let i = 0; i < tab3.length; i++) {
      if (!htab.hasOwnProperty(tab3[i])) {
        htab[tab3[i]] = 0; 
      } else {
        htab[tab3[i]] = 1;
      }
    }
    for (let k in htab) {
      if (htab[k] == 1) {
        sum2 += parseInt(k);
      } else {
        sum1 += parseInt(k);
      }
    }
    let tab = [sum1, sum2];
    return tab;
  }
  console.log(concat_sum_3 ([4, 5, 8, 7, 9], [7, 6, 8, 5, 2]));