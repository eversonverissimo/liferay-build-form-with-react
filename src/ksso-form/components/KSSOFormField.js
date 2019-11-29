import React from 'react';

function KSSOFormField(props) {

  return (
    <div className="ksso-form-element form-group">
      {props.type !== 'checkbox' && props.label && props.showLabel && <label>{props.label}</label>}
      {renderField(props)}
      {props.children}
    </div>
  );
}

function renderField({onChange, type, id, name, className, value, label, options}) {

  function onValueChange(event) {
    onChange && onChange(event.target.value);
  }

  if (type === 'textarea') {
    return <textarea id={id} name={name} className={"form-control " + className} onChange={onValueChange} />

  } else if (type === 'select') {
    return (
      <select id={id} name={name} className={"form-control " + className} onChange={onValueChange}>
        <option></option>
      </select>
    );

  } else if (type == 'radio' && options !== undefined) {
    return (
      <div className="custom-control custom-radio">
        {options.map(option => (
          <div key={name + '_' + option.value}>
            <input className={"custom-control-input " + className} id={name + '_' + option.value} value={option.value} type="radio" name={name} onChange={onValueChange}/>
            <label className="custom-control-label" htmlFor={name + '_' + option.value}>{option.label}</label>
          </div>
        ))}
      </div>
    );

  } else if (type == 'checkbox') {
    return (
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id={"check_" + name} value={value} name={name} onChange={onValueChange} />
        <label className="custom-control-label" htmlFor={"check_" + name}>{label}</label>
      </div>
    );

  } else if (type) {
    return <input value={value} type={type} id={id} name={name} className={"form-control " + className} onChange={onValueChange}/>;

  } else {
    return <hr/>;
  }
}

export default KSSOFormField;
