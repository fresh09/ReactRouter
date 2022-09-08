import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link to="/">Home</Link> | <Link to="/expenses">Expenses</Link> |{" "}
          <Link to="/invoices">Invoices</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
