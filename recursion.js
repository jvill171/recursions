/** product: calculate the product of an array of numbers. */

function product(nums) {
    if(nums.length == 0){
        return 1;
    }

    return nums.pop() * product(nums)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0, max=0) {
    if(words.length == idx){ return max; }
    max = words[idx].length > max ? words[idx].length : max;
    return longest(words, idx+1, max)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0) {
    console.log(idx)
    if(idx+2 < str.length){
        return str[idx] + everyOther(str, idx + 2)
    }
    return str[idx]
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, start=0, end=str.length - 1) {
    if(start > end){ return true }
    if(str[start] == str[end]){
        return isPalindrome(str, start+1, end-1)
    }
    return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
    if(arr.length == idx){
        return -1;
    }
    if(arr[idx] == val){
        return idx;
    } else {
        return findIndex(arr, val, idx + 1)
    }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0, lenWord=str.length) {
    if(lenWord == idx){
        return ""
    } else {
        let newStr = str[lenWord - idx - 1]
        return newStr += revString(str, idx+1)
    }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

    let myList = []
    Object.values(obj).forEach(e => {
        if(typeof(e) === 'object'){
            myList.push(...gatherStrings(e))
        } else if(typeof(e) === 'string') {
            myList.push(e)
        }
    })
    return myList;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start=0, end=arr.length) {
    if(start > end){
        return -1
    }
    let midpoint = Math.floor((start + end) / 2)

    if(arr[midpoint] === val){
        return midpoint
    }
    if(arr[midpoint] > val){
        return binarySearch(arr, val, start, midpoint-1)
    } 
    return binarySearch(arr, val, midpoint+1, end)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
