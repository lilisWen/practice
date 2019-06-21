a <- {
    '0':0,
    '1':3,
    '2':1,
    '3':2,
    '4':24,
    '5':42,
    '6':2,
    'length':7
}//将要进行排序的数组
hash <- {}//存放排列后数的hash
index <- 0
while(index < a['length']){
    if (a[index] == undefined){
        hash(a[index]) <- 1
    }else if(a[index]==hash[a[index]]){
        hash(a[index]) <- hash[a[index]] + 1
    }
    index <- index + 1
}//相同数字在一个桶内

index2 <- 0
newarr <- {}
max <- findmax(hash)//42

while(index2 <= max){
    if(hash[index2]!=undefined){
        count <- 0
        while(count < hash[index2]){
            newarr.push(index2)
        }
    }
    index2 <- index2+1
}
print newarr
