import "./Subcribe.scss";

const Subcribe = () => {
  return (
    <div className="subcribe">
      <h1 className="subcribe_title">Want the best deals?</h1>
      <span className="subcribe_desc">
        Sign up and we will send the best deals to you.
      </span>

      <div className="subcribe_input_container">
        <input type="text" placeholder="Your Email" />
        <button>Subcribe</button>
      </div>
    </div>
  );
};

export default Subcribe;
