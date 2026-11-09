# Proposta Comercial Zettius

Projeto inicial de uma página de proposta comercial audiovisual, com preços, escopo, prazos e simulador.

## Publicar no GitHub sem instalar programas

1. Acesse https://github.com e entre na sua conta.
2. Clique em **New** para criar um repositório.
3. Nomeie como `zettius-proposta-comercial`.
4. Escolha Public ou Private. Não marque para criar README.
5. Clique em **Create repository**.
6. Escolha **uploading an existing file**.
7. Descompacte o ZIP deste projeto no computador.
8. Arraste o conteúdo de dentro da pasta `zettius-proposta` para a área de upload do GitHub. Não envie o ZIP fechado.
9. Confira que `AGENTS.md`, `package.json`, `README.md` e a pasta `app` aparecem na raiz.
10. Escreva uma mensagem como `Adiciona projeto inicial` e clique em **Commit changes**.

## Publicar na Vercel

1. Acesse https://vercel.com e entre/crie uma conta.
2. Escolha **Continue with GitHub** e autorize a conexão.
3. No painel, clique em **Add New...** > **Project**.
4. Importe o repositório `zettius-proposta-comercial`.
5. A Vercel deve detectar Next.js automaticamente. Mantenha as configurações padrão.
6. Clique em **Deploy**. Ao terminar, ela mostrará o endereço público do site.

Quando você enviar novas alterações para o GitHub, a Vercel publicará a nova versão automaticamente.

## Como usar uma IA para continuar o desenvolvimento

Conecte o repositório a uma ferramenta de programação com IA que aceite GitHub. Peça:

> Antes de editar, leia o AGENTS.md. Quero melhorar este site sem alterar preços, prazos ou regras comerciais. Explique as mudanças em linguagem simples e me diga como conferir o resultado.

O `AGENTS.md` é um arquivo de instruções para orientar a IA. Ele não é o agente em si, nem publica o site sozinho.

## Rodar localmente (opcional)

Instale Node.js LTS em https://nodejs.org. No terminal, dentro da pasta, rode `npm install` e depois `npm run dev`. Abra http://localhost:3000.

## Decisões comerciais pendentes
Antes de enviar a proposta final, defina pagamento, revisões, deslocamento, hora extra, validade, licenciamento das trilhas e prazo de disponibilidade dos links dos arquivos brutos.
