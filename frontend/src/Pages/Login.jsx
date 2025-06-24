export default function Login() {
  return (
    <div>
      <h1>Вход в систему</h1>
      <form action="/login" method="POST">
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  )
}
