import React, { useEffect, useState } from "react";
import Container from "./Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabItem from "./TabItem";

const Work = () => {
  const [tab, setTab] = useState([]);
  const [data, setData] = useState(tab);
  useEffect(() => {
    fetch("/public/portfolio.json")
      .then(res => res.json())
      .then(data => setTab(data));
  }, []);

  const filterResult = cartItem => {
    const result = tab.filter(carData => {
      return carData.category === cartItem;
    });
    setData(result);
  };

  // console.log(data)

  return (
    <div
      className="min-h-[85vh] lg:min-h-[78vh] font-montserrat my-10"
      id="work"
    >
      <Container>
        <div className="text-center mb-5">
          <p className="text-[16px] text-white/50">My portfolio</p>
          <h2 className="text-[32px] font-semibold text-cyan-600">
            Recent Work
          </h2>
        </div>
        <div>
          <Tabs>
            <TabList className="border-none text-center mb-5">
              <Tab className="inline-block text-cyan-600 bg-black/20 px-3 py-2 rounded-lg cursor-pointer">
                All Project
              </Tab>
              <Tab
                onClick={() => filterResult("blog")}
                className="inline-block text-cyan-600 bg-black/20 px-3 py-2 rounded-lg ml-2 cursor-pointer"
              >
                Blog
              </Tab>
              <Tab
                onClick={() => filterResult("portfolio")}
                className="inline-block text-cyan-600 bg-black/20 px-3 py-2 rounded-lg ml-2 cursor-pointer"
              >
                Portfolio
              </Tab>
              <Tab
                onClick={() => filterResult("travel")}
                className="inline-block text-cyan-600 bg-black/20 px-3 py-2 rounded-lg ml-2 cursor-pointer"
              >
                Travel
              </Tab>
              <Tab
                onClick={() => filterResult("agency")}
                className="inline-block text-cyan-600 bg-black/20 px-3 py-2 rounded-lg ml-2 cursor-pointer"
              >
                Agency
              </Tab>
            </TabList>

            <TabPanel>
              <div className="lg:grid grid-cols-3 gap-5">
                {tab.map(item => (
                  <TabItem key={item.id} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="lg:grid grid-cols-3 gap-5">
                {data.map(item => (
                  <TabItem key={item.id} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="lg:grid grid-cols-3 gap-5">
                {data.map(item => (
                  <TabItem key={item.id} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="lg:grid grid-cols-3 gap-5">
                {data.map(item => (
                  <TabItem key={item.id} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="lg:grid grid-cols-3 gap-5">
                {data.map(item => (
                  <TabItem key={item.id} item={item} />
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Work;
