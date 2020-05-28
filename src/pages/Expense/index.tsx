import React, { useState } from 'react';
import {Main} from './styles';
import {ListBox} from 'primereact/listbox';
import {InputNumber} from 'primereact/inputnumber';

const Exprense: React.FC = () => {
  const [selectCategorie, setCategorie] = useState<any>(null);
  const [price, setPrice] = useState(20);
  const categorieTemplate = (option: { label: string }) => {
    return (
      <div className="p-clearfix">
        <span style={{fontSize:'1em',padding:'1em .5em 0 0'}}>{option.label}</span>
      </div>
    );
  }
  const categories = [
    {label: 'Gasolina', value: 'Audi'},
    {label: 'Brinquedo', value: 'BMWw'},
    {label: 'Comida', value: 'BMWww'},
    {label: 'BMWww', value: 'BMWwww'},
    {label: 'BMWwww', value: 'BMWwwww'},
    {label: 'BMWwww2', value: 'BMWwwww2'},
  ];
  return (
    <Main>
      <div>
        <h3>Valor</h3>
        <InputNumber className="w-100" value={price} onChange={(e) => setPrice(e.value)} showButtons mode="currency" currency="BRL" />
        <h3>Categoria</h3>
        <ListBox  value={selectCategorie} filter={true} filterPlaceholder={selectCategorie} options={categories}
                 onChange={(e)=> {setCategorie(e.value);}} itemTemplate={categorieTemplate} />
        <button className="w-100">Salvar</button>
      </div>
    </Main>
  );
};

export default Exprense;
