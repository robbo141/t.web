

//EXERCITIUL 1

//new Date().getFullYear()
//Folosiți metodele map și filter pentru a procesa un array de numere reprezentând ani de naștere
//pentru a obține toate vârstele peste 18 ani.


/*const birthYears = [1990, 2000, 1985, 1995, 2005, 2010];

const filteredArr =birthYears.filter(el =>el <2005);

birthYears.filter(el=>
    {
        if(el<2005)
        {
        return true;
        }
        else{
            return false;
        }
    })

    console.log(birthYears);
   console.log( "Persoanele majore sunt nascute in : " , filteredArr);*/


// EXERCITIUL 2

//mplementați o funcție care primește ca parametrii un array de numere și un număr și returnează
//suma tuturor numerelor din array divizibile cu cel de-al doilea parametru.


const arr =[ 15,20,13,35,41];
 var y = 5;
var sum=0;
 function suma ( arr ,y)
 {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%y==0) 
         sum=sum+arr[i];
    }

    return sum;
 }

 console.log(suma(arr,y));
 

//EXERCITIUL 3 

//Se furnizează un array de obiecte care reprezintă un grup de studenți, fiecare cu un nume și un
//array de note la teste. Trebuie să găsiți o soluție prin care să utilizați metodele map, filter și reduce
//pentru a calcula media notelor pentru fiecare student, apoi să returnați un array de obiecte care
//conține doar studenții care au o medie a notelor mai mare de 90.
//const students = [ { name: "Alice", scores: [90, 85, 92] }, { name: "Bob", scores: [75, 80, 85] }, { name:
//"Charlie", scores: [90, 95, 85] }, { name: "David", scores: [100, 100, 100] } ];

//const students = [ { name: "Alice", scores: [90, 85, 92] }, { name: "Bob", scores: [75, 80, 85] }, { name:
    //"Charlie", scores: [90, 95, 85] }, { name: "David", scores: [100, 100, 100] } ];

   // console.log(students);

    