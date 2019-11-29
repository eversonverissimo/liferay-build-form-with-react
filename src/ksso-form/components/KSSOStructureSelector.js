import React from 'react';

function KSSOStructureSelector({structures, onSelect}) {

  return (
    <div className="ksso-structure-selector-wrapper clearfix">
      {structures && structures.map(structure => (
        <div onClick={() => onSelect && onSelect(structure)} key={structure.id}
          style={{width: '200px', margin: '20px', padding: '10px', height: '200px', float: 'left', border: '2px solid #CCC', overflow: 'hidden', cursor: 'pointer'}}>
          <h4>{structure.name}</h4>
          <span style={{color: '#CCC'}}>{structure.description && <p>{structure.description}</p>}</span>
        </div>
      ))}
    </div>
  );
}

export default KSSOStructureSelector;
