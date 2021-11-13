import React from "react";
import "./view.css";

function View(props) {
  const { inputWord, setInputWord, writeList, setWriteList, clickHandle, deleHandle } = props;

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
      <button
        onClick={() => {
          clickHandle();
        }}
      >
        新增
      </button>
      {writeList.map((v, i) => {
        return (
          <div key={i} className="viewLine">
            <p>{v}</p>
            <button
              className="btn-01"
              //讓name=第[i]項，才知道要刪除誰
              name={i}
              onClick={(e) => {
                deleHandle(e.target.name);
              }}
            >
              刪除
            </button>
          </div>
        );
      })}
    </>
  );
}

export default View;
