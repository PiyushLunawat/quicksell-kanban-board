import React from "react";
import "./Window.css";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const DashBoard = () => {

  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

function initials(value){
    var result = "";
    var tokens = value.split(/\s/); 
      result += tokens[0].substring(0,1).toUpperCase();
      {if(tokens.length>1)result += tokens[tokens.length-1].substring(0,1).toUpperCase();}
    return result;
}

  return (
    selectedData && (
      <div className="dash-container">
        {selectedData.map((elem, index) => { 
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="left-view">
                    {!user ? (
                      <p></p>
                    ) : (
                      <>
                          <div className="user-icon">{initials(elem[index]?.title)}
                            <div className="show-status"></div>
                          </div>
                      </>
                    )}
                      <div className="user-name">{elem[index]?.title}</div>
                      <div className="user-cards">{elem[index]?.value?.length}</div>
                  </div>
                  <div className="right-view">
                    <span className="plus">+</span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashBoard;
