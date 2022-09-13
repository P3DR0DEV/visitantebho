- ✔️ <a href="#funcionamento">Funcionamento</a> <br>
- 🤔 <a href="#como-rodar">Como Rodar</a> <br>
- ⚙️ <a href="#controller">Controllers</a> <br>
- 📝 <a href="#todo">TODO</a> <br>

## Funcionamento
Este projeto foi feito para manter um certo 'Guest Control' na escola onde trabalho, como funciona?
Ao entrar com um login autenticado de 'Visitante' nas Máquinas da escola, roda um script onde o Usuário tem que forcener informações como: CPF e Nome, esse script envia para um banco de dados a Hora, o Hostname da Máquina e as informações inseridas pelo Usuário.

### Como Rodar
No folder config, insira a configuração do Active Directory.
Exemplo: 
```
    const config = {
    url: 'ldap://192.192.192.192:3000',
    baseDN: 'dc=nome, dc=domain.teste',
    username: 'Username valido, com permissões com o sufixo, ex: exemplo@domain.teste',
    password: 'senha compatível username',
}
```
Para iniciar o servidor utilize:
```
    yarn start ||
    npm start

```
## Controller

Na controller de autenticação, eu precisei setar na mão quais usuários poderão utilizar dos serviços, pois a partir do momento em que a conexão é feita, qualquer pessoa autenticada no AD tem acesso ao serviço, por motivos de LGPD, isso não é recomendável, então fiz um Array de permissões onde os users, que tiverem dentro desse Array possam ter esse acesso.
```
 const permissoes = [{ username: 'User Permitido do dominio' }, { username: 'User Permitido do dominio' }]; 

```


## TODO

- Separar o Front do Backend;
- Adicionar uma forma de filtrar pesquisas entre Datas/Hostname/Nomes;
- Adicionar um Log de conexões;
- Adicionar um db com users permitidos;
- Adicionar uma forma de Cadastro de novos Users permitidos;
