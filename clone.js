function isObject(val){
    return typeof val === 'object' && val !== null;
}
    
export default function (source){
    let root = {};
    let stack = [
        {
            parent: root,  //指向它的父节点
            key: undefined, 
            data: source  //当前节点所包含的数据
        }
    ];
    let uniqueList = new WeakMap();  //解决循环引用的问题

    //栈里面都是每一个节点
    while(stack.length){
        let node = stack.pop();
        let { parent, key, data } = node;
        let target = parent;  //当key为undefined的时候，说明父节点其实就是当前节点

        //key不为undefined，表示parent的有一个属性为key的值，所以要将当前的target指向parent[key]
        if (key !== undefined){
            parent[key] = target = Array.isArray(data) ? [] : {};
        }

        if (uniqueList.has(data)) {
            parent[key] = uniqueList.get(data);
            continue;
        } 

        if (isObject(data))
            uniqueList.set(data, target);

        for (let key in data){
            if (data.hasOwnProperty(key)){
                if (isObject(data[key])){
                    stack.push({
                        parent: target,
                        key: key,
                        data: data[key]
                    });
                } else {
                    target[key] = data[key];
                }
            }
        }
    }

    return root;
}