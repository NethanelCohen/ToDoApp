const App = () => {
  const name = {
    firstName: 'Netanel',
    lastName: 'Cohen',
    height: '1.90',
    weight: '97',
  };

  return (
    <>
      <div>
        <div className='text-5xl'>App</div>
        <p>Hello {name.firstName}</p>
      </div>
    </>
  );
};

export default App;
