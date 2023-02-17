const inputField = document.getElementById('input-temp');
const fromUnitField = document.getElementById('input-unit');
const toUnitField = document.getElementById('output-unit');
const outputField = document.getElementById('output-temp');
const form = document.getElementById('txt_reader');

function convertTemp(value, fromUnit, toUnit) {
  if (fromUnit === 'c') {
    if (toUnit === 'f') {
      return value * 9 / 5 + 32;
    } else if (toUnit === 'k') {
      return value + 273.15;
    }
    return value;
  }
  if (fromUnit === 'f') {
    if (toUnit === 'c') {
      return (value - 32) * 5 / 9;
    } else if (toUnit === 'k') {
      return (value + 459.67) * 5 / 9;
    }
    return value;
  }
  if (fromUnit === 'k') {
    if (toUnit === 'c') {
      return value - 273.15;
    } else if (toUnit === 'f') {
      return value * 9 / 5 - 459.67;
    }
    return value;
  }
  throw new Error('Invalid unit');
}

function show() {
  // var reader = new FileReader();
  // reader.onload = function () {
  //   //alert(this.result)
  //   story.value = this.result + "sss"
  // }
  var f = document.getElementById("filePicker").files[0];
  // reader.readAsText(f);
  readTxtRandom(f)
}


function readTxtRandom(obj_file) {
  // RandomAccessFile randomAccessFile = null;
  try {
      // 可读写
      // randomAccessFile = new RandomAccessFile(new File(obj_file), "r");
      ra_f = new RandomAccessFile(obj_file, "r");
      ra_f.seek(0);
      System.out.println("ra_f.readUTF(): " + ra_f.readUTF());
      // ra_f.close();
      
      // 写
      // for (int i = 1; i <= 10; i++) {
      //     randomAccessFile.write((i+" 设备名/devicename,设备数量/devicenum\n\r").getBytes());
      //     System.out.println("当前指针位置："+randomAccessFile.getFilePointer());
      // }
//            randomAccessFile.writeBoolean(true);
//            randomAccessFile.writeByte(11);
//            randomAccessFile.writeDouble(12);
//            randomAccessFile.writeUTF("操作");
      
      // 读
      // randomAccessFile.seek(0);// 读时指针重新置为开始位置,事实上可以从文件内容的任何位置开始
      // byte[] bs = new byte[1024];
      // int len=0;
      // while ((len=randomAccessFile.read(bs))!=-1) {                
      //     System.out.println(new String(bs, 0, len));
      // }
//            System.out.println("readLine:"+ randomAccessFile.readLine()); 
//            System.out.println("readDouble:"+randomAccessFile.readDouble());
//            System.out.println("readByte:"+randomAccessFile.readByte());
//            System.out.println("readUTF:"+randomAccessFile.readUTF());
      
      // RandomAccessFile的记录指针放在文件尾部，用于追加内容
      // randomAccessFile.seek(randomAccessFile.length());// 指针移到文件末尾
      // randomAccessFile.write((21+" 设备名/devicename,设备数量/devicenum\n\r").getBytes());
      
  } catch (ex) {
      ex.printStackTrace();
  } finally{
      if (randomAccessFile!=null) {
          try {
              randomAccessFile.close();
          } catch (ex) {
              ex.printStackTrace();
          }
      }
  }
}



// form.addEventListener('input', () => {
//   const inputTemp = parseFloat(inputField.value);
//   const fromUnit = fromUnitField.value;
//   const toUnit = toUnitField.value;

//   const outputTemp = convertTemp(inputTemp, fromUnit, toUnit);
//   outputField.value = (Math.round(outputTemp * 100) / 100) + ' ' + toUnit.toUpperCase();
// });

