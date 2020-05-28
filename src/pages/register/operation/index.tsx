import React, {useState} from 'react';
import {InputText} from 'primereact/inputtext';
import {Main} from './styles';
import {RadioButton} from 'primereact/radiobutton';
import {InputNumber} from "primereact/inputnumber";

const Operation: React.FC = () => {
  const [name, setName] = useState('');
  const [businessModel, setBusinessModel] = useState<string|undefined>(undefined);
  const [percentage,setPercentage] = useState<number>(0);
  return (
    <Main>
      <div>
        <h3>Nome</h3>
        <InputText className="w-100" value={name} onChange={(e) => setName((e.target as HTMLInputElement).value)} />
        <h3>Modelo de Negócio</h3>
        <div className="w-100" id="radios-buttons">
          <div>
            <RadioButton inputId="rb1" name="businessModel" value="New York" onChange={(e) => setBusinessModel(e.value)} checked={businessModel === 'New York'} />
            <label htmlFor="rb1" className="p-radiobutton-label">Parceria %</label>
          </div>
          { businessModel === 'New York' &&
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">%</span>
            <InputNumber className="w-100" value={percentage} onChange={(e) => setPercentage(e.value)} />
          </div>
          }
          <div>
            <RadioButton inputId="rb2" name="businessModel" value="San Francisco" onChange={(e) => setBusinessModel(e.value)} checked={businessModel === 'San Francisco'} />
            <label htmlFor="rb2" className="p-radiobutton-label">Parceria 50%</label>
          </div>
          <div>
            <RadioButton inputId="rb3" name="businessModel" value="Los Angeles" onChange={(e) => setBusinessModel(e.value)} checked={businessModel === 'Los Angeles'} />
            <label htmlFor="rb3" className="p-radiobutton-label">100% Fabrica</label>
          </div>
        </div>
        <button className="w-100">Salvar</button>
      </div>
    </Main>
  );
};

export default Operation;
