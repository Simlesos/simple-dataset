simple-dataset
===

为低版本浏览器提供 Node.prototype.dataset 的相似功能.

## 使用

    <script src="simple-dataset.js"></script>

## API

    <div id="box" data-title-Name="titleName"></div>
    var box = document.getElementById("box");

### Node.prototype.getDataset()

获取元素上的 dataset 对象
    
    box.getDataset(); //=> {titleName: "title"}
    
### Node.prototype.setDataset(key,[value])

为 dataset 添加属性,可以使用键值对的方式:

    box.setDataset("myAge",24);
    box.getDataset(); //=> {titleName: "title", myAge: 24}
    box.attributes; //=> NamedNodeMap {0: id, 1: data-title-name, 2: data-my-age}

也可以使用 JSON 对象的方式添加:

    box.setDataset({
        "myName": "莫声谷",
        "myGender": 0,
        "myEmailCode": "simlesos囧gmail.com"
    });
    box.getDataset(); //=> {titleName: "title", myAge: "24", myName: "莫声谷", myGender: "0", myEmailCode: "simlesos囧gmail.com"}
    box.attributes; //=> NamedNodeMap {0: id, 1: data-title-name, 2: data-my-age, 3: data-my-name, 4: data-my-gender, 5: data-my-email-code}

### Node.prototype.removeDataset(key)
删除 dataset 对象上的属性,`key` 需要是首字母小写,使用驼峰命名法

    box.removeDataset("titleName");
    box.getDataset(); //=> {myAge: "24", myName: "莫声谷", myGender: "0", myEmailCode: "simlesos囧gmail.com"}
    box.attributes; //=> {0: id, 1: data-my-age, 2: data-my-name, 3: data-my-gender, 4: data-my-email-code}
