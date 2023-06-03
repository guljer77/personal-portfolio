import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <header className="py-8">
      <Container>
        <div className="flex font-montserrat justify-between items-center">
          <h2 className="text-white uppercase text-xl lg:text-3xl font-semibold">G. Hossain</h2>
          <button className="btn px-2 py-1 lg:px-5 lg:py-2 rounded-lg transition-all duration-300">Work With me</button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
