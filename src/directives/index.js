export  const  imgError = {
     inserted(el, { value }) {
    el.onerror = function () { 
      el.src=value
    }
  },
}