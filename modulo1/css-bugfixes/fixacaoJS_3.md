```
function calculaNota(ex, p1, p2) {
  let media = (p1 + p2 + ex) / 3
  if(media >= 9) {
    return "A"
  }else if(media >= 7.5) {
    return "B"
  }else if(media >= 6) {
    return "C"
  }else {
    return "D"
  }
}

```