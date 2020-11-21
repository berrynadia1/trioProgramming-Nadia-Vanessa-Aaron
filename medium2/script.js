function compare (y, z) {
    a = y.split("").sort();
    b = z.split("").sort();
    for (i=0; i<a.length; i++) {
      if(a.length===b.length) {
        if (a[i]===b[i]){
          console.log(y + " and " + z +" "+  "are anagrams");
          break;
        }
        else {
          console.log(y + " and " + z + " are not anagrams");
          break;
        }
      }
      else {
        console.log(y + " has a different amount of letters than " + z);
      }
      break;
    }
  }
  compare("silent", "listen" );
  compare("slow", "fast");
  compare("nadia", "and")