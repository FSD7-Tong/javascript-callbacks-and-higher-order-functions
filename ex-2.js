//Exercise #2: At Least Five Function

//function atLeastFive(array, operation) {
  // Start coding here

// 1 นักเรียนแต่ละห้อง > 5 คนที่ได้คะแนน > 70 ถือว่าผ่าน ถ้าไม่ถึงถือว่าไม่ผ่าน if-else


//}
let scroe =[];
function atLeastFive(array,operation,room,roomNumber){
  for (let i = 0; i < array.length; i++) {
    operation(array[i],scroe)
    //console.log(array)
  }
  console.log(room(scroe,roomNumber));
  //ตรวจ ค่าคะแนน >70
  }
  function operation (clsss){
    //console.log(clsss)
    if(clsss>70)
      scroe.push(clsss);
    //console.log(scroe);
  }
  function room(classroom,roomNumber){
    if(classroom.length>=5){
      return `นักเรียนห้องที่ ${roomNumber} ผ่านเกณฑ์ ✅`;
    }else{
      return `นักเรียนห้องที่ ${roomNumber} ไม่ผ่านเกณฑ์ ❌`;  
  }
}
  //console.log(room(scroe));
//console.log(scroe)

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

//atLeastFive(studentScoresRoom3,operation,room,1)

let scoreRoom1Result=atLeastFive(studentScoresRoom1,operation,room,1);
let scoreRoom2Result=atLeastFive(studentScoresRoom2,operation,room,2);
let scoreRoom3Result=atLeastFive(studentScoresRoom3,operation,room,3);
