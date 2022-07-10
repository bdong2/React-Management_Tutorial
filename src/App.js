import React,{Component} from 'react';
import Customer from './components/customer'
import './App.css';

const customers=[{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'방동현 ',
  'birthday':'880906',
  'gender':'남자',
  'job':'회사원'
},
{
'id':2,
'image':'https://placeimg.com/64/64/2',
'name':'홍길동 ',
'birthday':'880906',
'gender':'남자',
'job':'회사원'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'춘향이 ',
  'birthday':'880906',
  'gender':'남자',
  'job':'회사원'
  }]

function App() {
  return (
    <div>
    {
      customers.map(c => {
        return (
        <Customer
        key={c.id}
        id={c.id}
        image={c.image}
        name={c.name}
        birthday={c.birthday}
        gender={c.gender}
        job={c.job}
      />);
      })
    }
    </div>
  );
}

export default App;
