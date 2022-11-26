import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      {/*入力 */}
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      {/*未完了 */}
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>aaaa</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>

      {/*完了 */}
      <div className="complete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>aaaa</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
