import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      {/*入力 */}
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      {/*未完了 */}
      <div>
        <div>
          <p>未完了のTODO</p>
          <button>完了</button>
          <button>削除</button>
        </div>
        <ul>
          <li>aaaa</li>
        </ul>
      </div>
      <div>
        {/*完了 */}
        <div>
          <p>完了のTODO</p>
          <button>完了</button>
          <button>削除</button>
        </div>
        <ul>
          <li>aaaa</li>
        </ul>
      </div>
    </>
  );
};
