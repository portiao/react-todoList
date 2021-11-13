import React ,{useState} from 'react'
import View from '../component/View'


function List() {
    //輸入框的狀態
    const [inputWord, setInputWord] =  useState('');
    //顯示我輸入的內容[1,2,3]
    const [writeList, setWriteList] = useState([]);

    //點擊新增內容
    function clickHandle(){
        //拷貝新陣列
       const newArray=[...writeList];
       //添加新屬性
       newArray.push(inputWord);
       //把修改後陣列寫回輸入內容
       setWriteList(newArray);
       //寫回後清空輸入框
       setInputWord('');
    }

    return (
        <>
            <View inputWord={inputWord} setInputWord={setInputWord} writeList={writeList} setWriteList={setWriteList} clickHandle={clickHandle}/>
        </>
    )
}

export default List
