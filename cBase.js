var b = (function(w){
  function existPro(obj, pro){
    return obj.hasOwnProperty(pro);
  }
  
  return {
    existPro,
  }
})(Window);