export default function bubble_sort(arr: number[]): void {
  for (let j = 0; j < arr.length - 1; j++){
    for (let i = 0; i < arr.length - 1 - j; i++){
      let current = arr[i];
      let next = arr[i+1];
      if (arr[i] > arr[i+1]){
        arr[i+1] = current;
        arr[i] = next;
      }
    }
  }
}

// let arr1 = [3, 5, 2, 7, 8]

// console.log(bubble_sort(arr1));
// console.log(arr1)

// example array: [3, 5, 2, 7, 8]
// array length would be 5