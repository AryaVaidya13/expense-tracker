import React, { useState } from 'react';
const CreatePage = () => {
  const [newExpense, setNewExpense] = useState({
    title: '',
    amount: 0,
    date: new Date()
  });
  return (
    <div>CreatePage</div>
  )
}

export default CreatePage