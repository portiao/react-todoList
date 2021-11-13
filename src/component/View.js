import React from "react";

function View(props) {
  const { inputWord, setInputWord, writeList, setWriteList, clickHandle } = props;

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setInputWord(e.target.value);
        }}
        // 控制輸入框顯示的內容
        value={inputWord}
      />
      <button onClick={() => {
          clickHandle();
      }}>新增</button>
      {writeList.map((v, i) => {
        return <p key={i}>{v}</p>;
      })}
    </>
  );
}

export default View;
