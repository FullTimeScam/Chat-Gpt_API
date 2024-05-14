const Home = () => {
  const onSubmitChat = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <form onSubmit={onSubmitChat}>
        <input type="text" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Home;
