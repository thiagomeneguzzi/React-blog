import { FormEvent, useEffect, useState } from 'react';

import styles from './Register.module.css';

import useAuthentication, { CreateUser } from '../../hooks/useAuthentication';

const Register = (): JSX.Element => {
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    setError('');

    const user: CreateUser = {
      displayName,
      email,
      password,
    };

    if (!displayName || !email || !email) {
      setError('Preencha todos os campos.');
      return;
    }

    const resp = await createUser(user);
    console.log(resp);
  };

  useEffect(() => {
    setError(authError);
  }, [authError]);

  return (
    <div className={styles.register}>
      <h1>Cadastre-se em nosso sistema</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="displayName">
          <span>Nome de usuário: </span>
          <input
            id="displayName"
            name="displayName"
            type="text"
            required
            placeholder={'Seu nome de usuário...'}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <span>E-mail: </span>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={'Seu email...'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <span>Senha: </span>
          <input
            id="password"
            type="password"
            required
            placeholder={'Sua senha...'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p className={'error'}>{error}</p>}
        <button className={'btn btn-dark'} disabled={loading}>
          {loading ? 'Aguarde...' : 'Registrar-se'}
        </button>
      </form>
    </div>
  );
};

export default Register;