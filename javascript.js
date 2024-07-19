// 1)intersection between two arrays

function Intersection(arr1, arr2) {
const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1);
  return intersectionResult;
}
const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];
const result = Intersection(array1, array2);
console.log(result);

// 2)creating a new array with a given length
function size(a){
    let arr=new Array(a);
    console.log(arr);
    }
    size(5)

// 3)Inserting items at a specific position
function insertElement() {
    let arr = [1, 2, 3, 4, 5];
    let index = 2;
    let element = -99;

    arr.splice(index, 0, element);
    
    console.log(arr);
}
insertElement();

// 4)Finding the difference between two arrays 
function diff(){
    let arr1=[1,2,3,4,5];
    let arr2=[3,5,6,7,8];
    let diff=arr1.filter((x) => !arr2.includes(x));
    console.log(diff);
}
diff()


// 5)Flattening arrays
const Arr = [[8,17],[1,17],[25,9]];
const newArr = Arr.flat();
console.log(newArr)

