# Json
    var obj = {  
        "name":"考拉",   
        "age" : 18,   
        "sex" : "不祥"  
        "girlfriend":
            "name" : "Clover"
            "age" : "22"
            "sex" : "?"
    };  

    console.log(obj.age);	//18  
    console.log(obj["sex"]); // 不详
    var n = "name";
    console.log(obj[n]); //考拉
    console.log(obj.girlfriend.name);//Clover
    console.log(obj["girlfriend"]["sex"]);//?
## 添加和修改属性
    obj.age++;  
    boj.sex = "变化的";  
    delete obj.name;//删除了  

## 遍历Json中每一项
for (var k in obj);{
    console.log(k+"的值是"+obj[k])
}

## 数据的调用


# animate运动函数
详见20170727运动函数