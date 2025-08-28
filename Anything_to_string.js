//  Returs anything as a string

function asString(x) {
    let v = "",  d;
    for (d in this) {
        v += d+':'+this[d]+'\n';
    };
    v = v.substr(0, v.length-4);
    return v;
};


function replaceAll(t,v,z) {
    /* Parameters: 
    t - text 
    v - search pattern 
    z - replacement 
    */
    let it='';
    if ( t.search(v) !== -1 ) {
        let mr = t.split(v);
        for (let i of mr) { it += i + z };
    };
    return it.substr(0, it.length - z.length);
};