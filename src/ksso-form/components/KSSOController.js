import React, {useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import KSSOContentForm from './KSSOContentForm';
import KSSOStructureSelector from './KSSOStructureSelector';
import { GET_STRUCTURES_BY_SITE_KEY } from '../queries/KSSOFormQueries';

function KSSOController() {

  let siteKey = 'sso';

  // Hooks
  const [selectedStructure, setSelectedStructure] = useState('');
  const { loading, error, data } = useQuery(GET_STRUCTURES_BY_SITE_KEY, {variables: {siteKey}});

  if (loading){
    return <div>Carregando...</div>;
  }

  if (error){
    console.log("error", error);
    return <div>Houve um erro :(</div>;
  }

  console.log("data.contentStructures.items", data)
  let structures = data.contentStructures.items;
  if (data !== undefined && selectedStructure === ''){
    return <KSSOStructureSelector structures={structures} onSelect={(selected) => setSelectedStructure(selected)} />
  }

  return (
    <KSSOContentForm
      structureName={selectedStructure.name}
      onCancel={() => setSelectedStructure('')}
      contentStructureId={selectedStructure.id}
      siteKey={siteKey}
      fields={selectedStructure.contentStructureFields} />
  );

}

export default KSSOController;
