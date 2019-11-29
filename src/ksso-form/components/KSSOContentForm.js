import React from 'react';
import { Mutation } from 'react-apollo'
import KSSOFormField from './KSSOFormField';
import { SAVE_WEB_CONTENT } from '../queries/KSSOFormMutations';

class KSSOContentForm extends React.Component {

  constructor(props) {
    super(props);

    this.structureName = props.structureName;
    this.contentStructureId = props.contentStructureId;
    this.siteKey = props.siteKey;
    this.fields = props.fields;
    this.onCancel = props.onCancel;

    this.state = {
      values: {}
    };
  }

  onSave(mutationFn) {

    // Convert values to InputContentField array
    let valuedFields = [];
    Object.keys(this.state.values).forEach(key => {
      if (key !== 'title'){
        valuedFields.push({
          name: key,
          value: {data: this.state.values[key]}
        });
      }
    });
    
    // Build InputStructuredContent
    let structuredContent = {
      contentStructureId: this.contentStructureId,
      title: this.state.values.title,
      contentFields: valuedFields
    },
    variables = {
      siteKey: this.siteKey,
      structuredContent: structuredContent
    };
    
    mutationFn && mutationFn({variables: variables});
  }

  // Render field
  renderField(field) {

    return (
      <KSSOFormField
        key={field.name}
        options={field.options}
        type={field.inputControl || field.dataType || field.type}
        nestedContentStructureFields={field.nestedContentStructureFields}
        onChange={newValue => { this.state.values[field.name] = newValue; this.setState(this.state.values)}}
        value={this.state.values[field.name] || ''}
        label={field.label} name={field.name} showLabel={field.showLabel}>
          {field.nestedContentStructureFields && field.nestedContentStructureFields.map(child => (
            this.renderField(child)
          ))}
      </KSSOFormField>
    );
  }

  render() {

    return (
      <div className="ksso-form-wrapper card">
        <div className="card-header"><h3 className="card-title">{this.structureName}</h3></div>
        <div className="card-body">
          {this.renderField({label: "Título", showLabel: "true", name: "title", type: "text"})}
          {this.fields && this.fields.map(field => (this.renderField(field)))}

          <Mutation mutation={SAVE_WEB_CONTENT} >
            {(saveWebContent) => (
              <button className="btn btn-primary" onClick={() => this.onSave(saveWebContent)}>Salvar</button>
            )}
          </Mutation>
          <button className="btn btn-link" onClick={() => this.onCancel ()}>Cancelar</button>
        </div>
      </div>
    );
  }
}

export default KSSOContentForm;
