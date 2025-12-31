# Decodificador de Texto - Challenge ONE

Uma aplicação web simples e funcional que permite criptografar e descriptografar textos, desenvolvida como parte do desafio proposto pela **Oracle** e **Alura**.

## 🎓 Sobre o Projeto
Este projeto foi desenvolvido em **2024** durante a primeira fase do programa **ONE (Oracle Next Education)**. O objetivo foi colocar em prática os conhecimentos iniciais de lógica de programação, manipulação de strings e interação com o DOM (Document Object Model) usando JavaScript puro.

## 🛠️ Funcionalidades
* **Criptografia:** Transforma palavras em códigos através de substituições pré-definidas.
* **Descriptografia:** Converte o código de volta para o texto original.
* **Copiar para a Área de Transferência:** Um botão prático para copiar o resultado gerado e colá-lo em qualquer outro lugar.
* **Interface Limpa:** Design focado na experiência do usuário e na facilidade de uso.

## 🔑 A Lógica de Criptografia
Para o funcionamento deste decodificador, as seguintes "chaves" foram utilizadas:
- `a` vira `ai`
- `e` vira `enter`
- `i` vira `imes`
- `o` vira `ober`
- `u` vira `ufat`



## 📂 Estrutura do Código
A lógica principal está centralizada no arquivo `app.js`, com destaque para:
* **`ModificarTexto`**: Uma função otimizada que utiliza matrizes (chave-valor) e **Expressões Regulares (RegExp)** com o modificador `gi` para garantir que todas as ocorrências de uma letra sejam substituídas globalmente.
* **`navigator.clipboard`**: Implementação moderna para a funcionalidade de cópia, garantindo compatibilidade com navegadores atuais.

## ⚠️ Requisitos de Uso
Para que a criptografia funcione conforme o esperado, o sistema foi projetado para:
* Trabalhar apenas com **letras minúsculas**.
* Não utilizar caracteres com **acentuação** ou símbolos especiais.