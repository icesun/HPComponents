

// Calculate Key -- Key have to be same every running
export function createKey(meta, index = 0, prefix = 'key') {

    // return id as key if exists
    if(meta.id) {
        return meta.id;
    }

    if(prefix) {
        //console.log('here', prefix);
        return prefix + '_' + index;
    }
}