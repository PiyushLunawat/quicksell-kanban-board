import React from 'react'
import './Card.css';
import { useSelector } from "react-redux";

const Card = ({id, title, tag, status}) => {

    const { selectedData, user } = useSelector(
        (state) => state.SelectDataReducer
      );
      selectedData.map((elem, index) => {
      })

    function initials(value){
        var result = "";
        var tokens = value.split(/\s/); 
          result += tokens[0].substring(0,1).toUpperCase();
          {if(tokens.length>1)result += tokens[tokens.length-1].substring(0,1).toUpperCase();}
        return result;
    }

  return (
    <div className="card-container flex-gap-10">
        <div className="card-heading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="image-container">
                {!user ? (
                      <>
                          <div className="user-icon">{initials(title)}
                             <div className="show-status"></div>
                          </div>
                      </>
                    ) : (
                      <p></p>
                    )}
            </div>
        </div>
        <div className="card-title" style={{fontWeight : 200}} >
            <p>{title}</p>
        </div>
        <div className="card-tags">
        <div className="tags color-grey"> ... </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"> <span>•</span> {tag}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;