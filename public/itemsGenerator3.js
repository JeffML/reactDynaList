const arr = ["nnn", "ooo", "ppp", "qqq"];

onmessage = e => {
  if (e.data !== 'Go!')
    postMessage("no go")
  else {
    var index = 0;
    while (index < arr.length) {
      const thenTime = Date.now()
      while (Date.now() - thenTime < 1000);  // tight wait loop
      const item = arr[index++]
      console.log({ item })
      postMessage(item)
    }
    postMessage("Kill me! Kill me now!")
  }
}