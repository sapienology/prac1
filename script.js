// function trapeziumArea(a, b, h) {
//     let area = 1 / 2 * (a + b) * h;
//     return area;
// }
// console.log("The area of the trapeziu is" + trapeziumArea(3, 4, 7))



// function sum_of_area_and_perimeter(l + b) {
//     let area = l * b;
//     return area;

//     let perimeter = 2 * (l + b);
//     return perimter
// 
// }



// console.log("the sum of the area and perimeter of a rectangle is " + sum_of_area_and_perimeter(l + b))
//     function sum_of_area_and_perimeter(l , b) {
//     let area = l * b;
//     let perimeter = 2 * (l + b);
//     let endresult = perimeter + area;
//     return endresult;
// }



// console.log(sum_of_area_and_perimeter(10, 11))
// function volume(r , h){
//   let volume = Math.PI*r**2*h;
//   return volume.toFixed(3);
// }
// console.log(volume(2 , 3));


  



// function change(list,value,index){
// list[index] = value;
// return list;
// }

// let list = [1, 'a' , 2 , 'b', 3 , 'c' , 4 , 'd' ];
// console.log(list);
// console.log(change(list , 2 ,zz 3));




// list = [2 ,-16 , 8 , 7, 4, 9, 17 ,5 ,0];
// list.forEach( num =>{
  
//   if (num % 2 === 0){
//     console.log(num );
//   }  
// });






// let subject = {
//     name: 'Mathematics',
//     score : [],
//     students : [],
//     add: function(name,score){
//       if(score > 100 || score < 0){
//         return 'Invalid Score';
//       }
//       this.students.push(name);
//       this.score.push(score);
//       return 'New student added.';
//     },
//     remove: function(name){
//       if(this.students.indexOf(name) != -1){
//         this.students.splice(this.students.indexOf(name), 1);
//         this.score.splice(this.students.indexOf(name), 1);
//         return 'Student removed.';
//       }
//       return 'Student not found.';
//     },
//     fix: function(name, score){
//       if(score > 100 || score < 0){
//         return 'Invalid Score';
//       }
//       if(this.students.indexOf(name) != -1){
//         this.score[this.students.indexOf(name)] = score;
//         return 'Student score updated.';
//       }
//       return 'Student not found.';
//     },
// };





//  let val = true, counter = 0;
//   for (let i = 1; i < 20 ;i++){
//   console.log (i + "^2 = " +  i**2);
//     if ( i % 7 === 0 ){
//       break;
//     }
//   }