import React, { useState, createRef, useEffect } from "react";

const DynamicInput = () => {
  const [childs, setChilds] = useState([]);
  const [childsRefs, setChildsRefs] = useState([]);

  useEffect(() => {
    setChildsRefs(childs.map(() => createRef()));
  }, [childs])


  function addField() {
    setChilds((prevState) => [...prevState, Date.now()]);
  }

  function deleteField(child) {
    const childIndex = childs.indexOf(child);

    if (childIndex === childs.length - 1) {

      childsRefs[childIndex - 1]?.current.focus();
    }
    else {
      childsRefs[childIndex + 1]?.current.focus();
    }
    setChilds((prevState) => prevState.filter((item) => item !== child));

  }

  function swapChildsInArr(arr, i1, i2) {
    const newChilds = [...arr];
    let temprorary = newChilds[i2];
    newChilds[i2] = newChilds[i1];
    newChilds[i1] = temprorary;
    return newChilds;
  }

  function moveUp(child) {
    const childIndex = childs.indexOf(child);
    const prevChildIndex = childIndex - 1;
    childsRefs[childIndex].current.focus();
    if (!childIndex) {
      //       const newChilds = [...childs.filter((item) => item !== child), child];
      //       return setChilds(newChilds);
      return;
    }

    const newChilds = swapChildsInArr(childs, childIndex, prevChildIndex);

    setChilds(newChilds);
  }

  function moveDown(child) {
    const childIndex = childs.indexOf(child);
    const prevChildIndex = childIndex + 1;

    childsRefs[childIndex].current.focus();

    if (childIndex === childs.length - 1) {
      //       const newChilds = [child, ...childs.filter((item) => item !== child)];
      //       return setChilds(newChilds);

      return;
    }

    const newChilds = swapChildsInArr(childs, childIndex, prevChildIndex);

    setChilds(newChilds);
  }

  return (
    <>
    <button data - testid= "add-row" onClick = { addField } > + </button>
      < ul className = 'list' >
      {
        childs.map((child, i) => (
          <li key= { child } >
          <input data - testid="row-input" 
          autoFocus 
          ref = { childsRefs[i]}
          />
          <button data - testid="row-up" onClick = {() => moveUp(child)}>&#8593; </button>
            < button data - testid="row-down" onClick = {()=> moveDown(child)}>&#8595; </button>
              < button data - testid="row-delete" onClick = {() => deleteField(child)}> x < /button>
                < /li>
        ))}

</ul>
  < />
  );
};
export default DynamicInput;