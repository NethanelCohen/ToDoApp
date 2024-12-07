const LoggedIn = true;

const App = () => {
  return (
    <div>
      <>
        <div>
          <header className='text-2xl'>Hellp Netanel</header>
          {LoggedIn ? <h1>You're Logged In !</h1> : <h1>Please Log in.</h1>}
        </div>
      </>
    </div>
  );
};

export default App;
