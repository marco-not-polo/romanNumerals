// function convertToRoman(num) {
//     const rom = [];
//   const numArray = Array.from(String(num)); 
//    console.log(numArray.length); 
//    switch(numArray.length) {
//      case 1:
//      if(num <= 3){
//        for(let i = 1; i <= num; i++){rom.push('I')};     
//     } else if (num === 4) {
//        rom.push('IV');
//     } else if  (num >= 5 && num < 9) {
//       rom.push('V');
//       if (num > 5 ) {
//        let dif = num - 5;
//        for(let i = 1; i <= dif; i++){rom.push('I')};
//       }
//     } else rom.push('IX');
        
//      console.log(rom)
     
//      break;
//      case 2:
//       rom.push(secondDecade(numArray[0]*10));
//       rom.push(firstDecade(numArray[1]));
//       console.log(rom)
//      break;
//      case 3:
//      break
//      case 4:
//      break
//    }
//    return rom.flat().join('');
//   }
  
  
//   convertToRoman(36);
  
  
//   convertToRoman(5);

//   const arr = [];
//   arr.push(3);
//   console.log(arr);
//   arr.push(4);


//   convertToRoman(5);


//   console.log(convertToRoman(9));
//   console.log(convertToRoman(36));
//   function firstDecade(arr) {
//   let rom = [];

//   if(arr <= 3){
//       for(let i = 1; i <= arr; i++){rom.push('I')};     
//    } else if (arr === 4) {
//       rom.push('IV');
//    } else if  (arr >= 5 && arr < 9) {
//      rom.push('V');
//      if (arr > 5 ) {
//       let dif = arr - 5;
//       for(let i = 1; i <= dif; i++){rom.push('I')};
//      }
//    } else rom.push('IX');

//    return rom;
//   }


//   console.log(firstDecade(3));
  

//   function secondDecade(arr) {
//     let rom = [];
  
//     if(arr <= 39){
//         for(let i = 1; i <= Math.trunc(arr/10); i++){rom.push('X')};     
//      } else if (arr === 40) {
//         rom.push('XL');
//      } else if  (arr >= 50 && arr < 90) {
//        rom.push('L');
//        if (arr > 50 ) {
//         let dif = Math.trunc((arr - 50)/10);
//         for(let i = 1; i <= dif; i++){rom.push('X')};
//        }
//      } else if (arr <=99) rom.push('XC');
  
//      return rom;
//     }
  
//     console.log(secondDecade(90));
 

// function encoder(num, arr) {
//       let rom = [];
    
//       if(num <= 3){
//           for(let i = 1; i <= num; i++){
//             rom.push(arr[0])
//         };     
//        } else if (num === 4) {
//           rom.push(arr[1]);
//        } else if  (num >= 5 && num < 9) {
//          rom.push(arr[2]);
//          if (num > 5 ) {
//           let dif = num - 5;
//           for(let i = 1; i <= dif; i++){rom.push(arr[0])};
//          }
//        } else rom.push(arr[3]);
    
//        return rom.flat().join('');
//       }

//       convertToRoman(100);

// console.log(keys[0][0]);

// console.log(encoder(1, keys[2]));
// console.log(convertToRoman(369));


// console.log (keys[3]);

// console.log(encoder(8, key2));


// console.log(Array.from(String(3999)).reverse());


// key1.forEach((el, i ) => {
//     console.log(el);
//     console.log(i);
    
    
    
// });