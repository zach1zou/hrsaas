/** *
 *
 *  将列表型的数据转化成树形数据 => 递归算法 => 自身调用自身 => 一定条件不能一样， 否则就会死循环
 *  遍历树形 有一个重点 要先找一个头儿
 * ***/
export function transListToTree(data,pid) { 
    const arr = []
    data.forEach(item => {
        if (item.pid === pid) {
            const children = transListToTree(data, item.id)
            if (children.length) {
                item.children=  children
            }
            arr.push(item)
        }
    });
    return arr
}