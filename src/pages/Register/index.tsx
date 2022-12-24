import './Register.module.css';

const Register = (): JSX.Element => {
  return (
    <>
      <h1>Cadastre-se em nosso sistema</h1>
      <form>
        <label htmlFor="">
          <span>Nome: </span>
          <input type="text" placeholder={'Seu nome...'} />
        </label>
        <label htmlFor="">
          <span>E-mail: </span>
          <input type="email" placeholder={'Seu email...'} />
        </label>
        <label htmlFor="">
          <span>Senha: </span>
          <input type="password" placeholder={'Sua senha...'} />
        </label>
        <input type="submit" value={'Registrar-se'} />
      </form>
    </>
  );
};

export default Register;