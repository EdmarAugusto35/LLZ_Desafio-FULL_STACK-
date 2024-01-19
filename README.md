Desafio Full Stack

Este repositório contém uma aplicação Full Stack desenvolvida com Java 17, Angular 17 e Spring Boot 3.2.1. Ao utilizar a biblioteca ngx-mask@latest para a máscara de CNPJ, é necessário adicionar e importar a configuração adequada no arquivo app.config.ts. Isso pode ser alcançado através da inclusão do método provideHttpClient(withFetch()).

Resolvendo o Erro do HttpClient
Caso ocorra um erro relacionado ao httpclient, siga os passos abaixo para resolver o problema:

Abra o arquivo app.config.ts.

Importe a configuração necessária adicionando a seguinte linha no início do arquivo:

import { provideHttpClient, withFetch } from 'sua-biblioteca-httpclient';

Adicione a configuração ao seu módulo, incluindo o método provideHttpClient(withFetch()) no bloco de configuração do Angular:

app.config(provideHttpClient(withFetch()),

Isso deve resolver qualquer problema relacionado ao httpclient.

Utilizando ngx-mask para Máscara de CNPJ
Para utilizar a máscara de CNPJ na aplicação, foi incorporada a biblioteca ngx-mask@latest. Siga as instruções abaixo para configurar e reconhecer a máscara no Angular:

Execute o comando abaixo para instalar a biblioteca ngx-mask:

npm install ngx-mask@lates
t
Abra o arquivo que contém as configurações do Angular (geralmente app.config.ts ou similar).

Importe os elementos necessários adicionando as seguintes linhas no início do arquivo:

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
No bloco de configuração do Angular, adicione o provider provideNgxMask():
providers: [
provideNgxMask(),
],

Ao seguir esses passos, o Angular estará configurado para reconhecer e aplicar a máscara de CNPJ utilizando a biblioteca ngx-mask.

Certifique-se de ajustar os caminhos e nomes de arquivos conforme necessário para a estrutura específica do seu projeto. Se houver outras dependências ou configurações específicas do ambiente, consulte a documentação oficial das bibliotecas utilizadas.