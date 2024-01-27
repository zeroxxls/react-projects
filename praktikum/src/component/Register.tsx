import React, { useState } from 'react';
import "./Register.css"

interface RegisterProps{
  LoginClick: () => void;
}

const Register: React.FC<RegisterProps> = (props) => {
const [selectedRole, setSelectedRole] = useState<string>('');
const [firstName, setFirstName] = useState<string>('');
const [lastName, setLastName] = useState<string>('');
const [patronymic, setPatronymic] = useState<string>('');

const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setSelectedRole(e.target.value);
};
const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFirstName(e.target.value);
};

const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setLastName(e.target.value);
};

const handlePatronymicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPatronymic(e.target.value);
};

  return (
    <div className="container">
      <form id="registerForm" className="form">
        <div className="text-wrapper">Реєстрація</div>
        <input className='inputGroup' type="text" id="fullName" name="fullName" required placeholder="Ім'я" onChange={handleFirstNameChange} />
        <input className='inputGroup' type="text" id="lastName" name="lastName" required placeholder="Призвище" onChange={handleLastNameChange} />
        <input className='inputGroup' type="text" id="patronymic" name="patronymic" required placeholder="По-Батькові" onChange={handlePatronymicChange} />
        <input className="input3" type="email" id="emailRegister" name="emailRegister" required placeholder="Email:" />
        <input className="input3" type="password" id="passwordRegister" name="passwordRegister" required placeholder="Password:" />

        <div id="classInput" style={{ display: selectedRole === 'student' ? 'block' : 'none' }}>
          <input className="input3" type="text" id="class" name="class" placeholder="Введіть клас:" />
        </div>

        <div id="subjectInput" style={{ display: selectedRole === 'teacher' ? 'block' : 'none' }}>
          <input className="input3" type="text" id="subject" name="subject" placeholder="Введіть предмет:" />
        </div>

        <select className="input3" id="role" name="role" required value={selectedRole} onChange={handleRoleChange}>
          <option value="" disabled hidden>Оберить роль</option>
          <option value="student">Ученик</option>
          <option value="teacher">Вчитель</option>
        </select>

        <button type="submit" className="button-sign-up">Зареєструватись</button>
        <div className="login-link">
          <p>Вже є аккаунт? <a href="#" id="loginLink" className="link" onClick={props.LoginClick}>Увійти</a></p>
        </div>
      </form>
    </div>
  );
};

export default Register;