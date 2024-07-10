import react, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [parentCount, setParentCount] = useState(0);
  console.log('父組件重新渲染--------------');
  return (
    <div style={{ background: 'lightseagreen' }}>
      <Child />
      <button type="button" onClick={() => { setParentCount(parentCount + 1); }}>父组件 +1</button>
    </div>
  );
}

export default Parent;