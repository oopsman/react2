

function Child() {
  console.log('------------子組件重新渲染');
  return (
    <div style={{ background: 'pink', margin: '50px 0' }}>
      <button type="button">子組件</button>
    </div>
  );
}

export default Child;