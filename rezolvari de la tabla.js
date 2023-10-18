//EX 1

/*const birthYears = [1990, 2000, 1985, 1995, 2005, 2010];
let year=new Date().getFullYear();

const yearsOld = birthYears.map(el => { return year -el;}).filter(year => year>=18);
    
    console.log(yearsOld);
*/

//EX 2

/*function calculate(arr,factor)
{   
    const filteredArr=arr.filter(el => el% factor ===0);
    return filteredArr.reduce((acc,el)=>acc+el);
    console.log(arr);
}

console.log(calculate([1,2,3,4],3));
*/

//EX 3

const students = [
     { name: "Alice", scores: [90, 85, 92] }, 
     { name: "Bob", scores: [75, 80, 85] },
      { name:"Charlie", scores: [90, 95, 85] },
       { name: "David", scores: [100, 100, 100] } 
    ];

    let mappedStudents = students.map(student => {
        const scoresSum = student.scores.reduce((acc , el)=> acc+el , 0);
     return 
     {
        name: student.name,
        average: scoresSum / student.scores.length
     }
    }).filter(student => student.average >=90);

    console.log(mappedStudents);