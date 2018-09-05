var b = (function(w){

  function existPro(obj, pro){
    return obj.hasOwnProperty(pro);
  }
  
  function isEmpty(val){
    if(val === undefined || val === 'undefined' || val === null) return true;

    if(typeof val === 'string'){
      if(val.trim() === '') return true;
    }
    
    if(val instanceof Array){
      if(val.length === 0) return true;
    }

    if(typeof val === 'object'){
      if(JSON.stringify(val) === '{}') return true;
      for(var key in val){
        if(isEmpty(val[key])) return true;
      }
    }
    return false;
  }

  return {
    existPro: existPro,
    isEmpty: isEmpty
  }
})(window);