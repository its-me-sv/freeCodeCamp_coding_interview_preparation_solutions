const updateInventory = (arr1, arr2) => {
    const getIndex = itemName => {
        for (let i = 0; i < arr1.length; i += 1)
            if (arr1[i][1] == itemName)
                return i;
        return null;
    };
    for (let i = 0; i < arr2.length; i += 1){
        const index = getIndex(arr2[i][1]);
        if (index == null)
            arr1.push(arr2[i]);
        else
            arr1[index][0] += arr2[i][0];
    }
    return arr1.sort((a, b) => a[1] > b[1] ? 1 : -1);
};