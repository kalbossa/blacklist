import logo from "./pictures/blacklistLogo.jpg";
import "./App.css";
import DisplayAbuser from "./components/DisplayAbuser";
import SearchBar from "./components/SearchBar";

import { LoganWebb } from "./abusers/LoganWebb/LoganWebb";
import { HenryBrown } from "./abusers/HenryBrown/HenryBrown";
import { TrinidadMcPharlin } from "./abusers/TrinidadMcPharlin/TrinidadMcPharlin";
import { BeckNinneman } from "./abusers/BeckNinneman/BeckNinneman";
import { EzraWay } from "./abusers/EzraWay/EzraWay";
import { AndrewCrabtree } from "./abusers/AndrewCrabtree/AndrewCrabtree";
import { JesusAlcazar } from "./abusers/JesusAlcazar/JesusAlcazar";
import { KeeganMichaels } from "./abusers/KeeganMichaels/KeeganMichaels";
import { OliverKlozov } from "./abusers/OliverKlozov/OliverKlozov";
import { ChristianForslof } from "./abusers/ChristianForslof/ChristianForslof";
import { AustinCarro } from "./abusers/AustinCarro/AustinCarro";
import { useEffect, useState } from "react";

const abusers = [
  LoganWebb,
  JesusAlcazar,
  TrinidadMcPharlin,
  EzraWay,
  OliverKlozov,
  HenryBrown,
  BeckNinneman,
  AndrewCrabtree,
  KeeganMichaels,
  ChristianForslof,
  AustinCarro,
];

function App(props) {
  const newAbusers = [];
  const [showAbusers, setShowAbusers] = useState(abusers);
  // const [searchValue, setSearchValue] = useState('')

  //   const inputChangeHandler = (e) => {
  //       setSearchValue(e.target.value)

  //   }

  const searchAbuser = (input) => {
    // input.map(item => newAbusers.push(item))

    //   newAbusers.forEach((c) => {
    //     if (!finalArray.includes(c)) {
    //         finalArray.push(c);
    //     }
    // });

    input.forEach((c) => {
      if (!newAbusers.includes(c)) {
        newAbusers.push(c);
      }
    });
  };

  useEffect(() => {
    console.log(
      "use effectt function runs every time the component rerenders,  initially and ffdevery rerender"
    );
    setShowAbusers(newAbusers);
  }, [newAbusers]);





  return (
    <div>
      <div>
        {/* <img className='logo' alt="blacklist page logo" src={logo} /> */}
        <h1>Welcome to the Washington/Oregon EDM blacklist website.</h1>
        <h3 className="  ">
           Here we list
         the community condemned Sex predators, thieves, abusers, scammers
          and otherwise dangerous people so that we all know who is blacklisted
          from events and who to keep an eye out for. 
        </h3>
        <h5 className="  ">Because facebook has a
          tendency to remove content that is consider "harrassment" or
          "Bullying", we are creating an archive here that is beyond the reach
          of Meta. The facebook page is still the main source to upload content
          to and hold to discussions.  This list is by no means complete. People in jail/deceased or whos links have been broken or just arent that dangerous might not be on this archive.  The worst people and active threats to our community are listed. It will continually be updated as more people are added.</h5>
      </div>
      <header className="sbar">
        <SearchBar
          className="autocomplete"
          abusers={abusers}
          onInputChange={searchAbuser}
        />
      </header>
      <DisplayAbuser abusers={abusers} newAbusers={newAbusers} />
      <footer> footer shit goes here</footer>
    </div>
  );
}

export default App;
