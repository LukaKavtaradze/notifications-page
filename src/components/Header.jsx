const Header = (props) => {
  return (
    <div className="textbar">                           
      <section className="noftbar">
        <h1>Notifications</h1>
        <div className="notf-num">
          <span>{props.count}</span>
        </div>
      </section>
      <span onClick={props.clear} className="mark">
        Mark all as read
      </span>
    </div>
  );
};

export default Header;
