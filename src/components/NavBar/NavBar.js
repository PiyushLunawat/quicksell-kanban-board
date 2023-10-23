import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { useDispatch, useSelector} from "react-redux";
import { selectData } from "../../store/DataAction";
import filter from "../../Assets/filter.png";
import dropdown from "../../Assets/dropdown.png";
import icon from "../../Assets/powered_by.png"

const getGroup = () => {
  if(localStorage.getItem("group")){
    return localStorage.getItem("group");
  }else{
    return "status";
  }
}

const getOrder = () => {
  if(localStorage.getItem("order")){
    return localStorage.getItem("order");
  }else{
    return "priority";
  }
}

const NavBar = () =>{
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();
  const {allTickets, allUser} = useSelector(state => state.DataReducer);
  const [groupValue, setGroupValue] = useState(getGroup());
  const [orderValue, setOrderValue] = useState(getOrder());

  const handleGroupValue = (e, valueBool) => {
    if(valueBool){
     setGroupValue(e.target.value);
      setDisplay(!display);
     localStorage.setItem("group", e.target.value);
    }else{
     setOrderValue(e.target.value);
     setDisplay(!display);
    localStorage.setItem("order", e.target.value);
    }
  }

  useEffect(() => {
    if(groupValue === 'user'){
      dispatch(selectData(groupValue, {
        allTickets, allUser
      }, orderValue))
    }else{
      dispatch(selectData(groupValue, allTickets, orderValue));
    }
  }, [allTickets, dispatch, groupValue, allUser, orderValue]);

  const handleReload = () => {
    window.location.reload(); // Reload the page when the icon is clicked
  };

    return (
        <div className="nav-bar">
          <div className="display-button">
          <img src={icon} alt="icon" className="quicksell-icon" onClick={handleReload}></img>
          <button
              className="p-10 f-16 btn"
              onClick={() => setDisplay(!display)}>
            <img src={filter} alt="filter-icon" className="filter-icon"></img>
            Display
            <img src={dropdown} alt="dropdown-icon" className="dropdown-icon"></img>
            </button>
            
            {display && (
              <>
                <div className="drop-box flex-gap-10 p-10">
                  <div className="select-group flex-sb">
                    <span>Grouping</span>
                    <select value={groupValue} onChange={(e) => handleGroupValue(e, true)} className="select-style" name="group" id="group">
                      <option value="status">Status</option>
                      <option value="user">User</option>
                      <option value="priority">Priority</option>
                    </select>
                  </div>
                  <div className="select-group flex-sb">
                    <span>Ordering</span>
                    <select value={orderValue} onChange={(e) => handleGroupValue(e, false)} className="select-style" name="order" id="order">
                      <option value="priority">Priority</option>
                      <option value="title">Title</option>
                    </select>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      );
};

export default NavBar;
