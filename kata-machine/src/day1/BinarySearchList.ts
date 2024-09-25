export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let high = haystack.length - 1;

  while (lo <= high){
    let mid = Math.floor(lo +(high - lo)/2);

    if (needle === haystack[mid]){
      return true;
    } else if (needle < haystack[mid]){
      high = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return false;
}

// high is exclusive, low is inclusive.