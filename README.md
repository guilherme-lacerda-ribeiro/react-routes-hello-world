# Prática de rotas no React
Como objetivo de praticar o uso de rotas no React, fiz o treinamento da Alura e com isso deixei o projeto mais original possível. Mesmo percebendo algumas coisas que faria diferente.

## Como rodar
`npm install` seguido de `npm start` após o clone do repositório.

## Destaques de código

### Rotas Aninhadas, aproveitando o cabeçalho e banner.
Reaproveitar partes da nossa aplicação em apenas algumas rotas em vez de todas, utilizamos o recurso de rotas aninhadas. [https://reactrouter.com/start/library/routing].

Olhar também as rotas index [https://reactrouter.com/en/main/start/concepts#index-routes].

Na rota "/", a estrutura a ser renderizada é:
```
<PaginaPadrao>
  <Inicio />
</PaginaPadrao>
```` 

Na rota "/sobremim", a estrutura a ser renderizada é:
```
<PaginaPadrao>
  <SobreMim />
</PaginaPadrao>
```