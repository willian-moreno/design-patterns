# Abstract Factory

## Premissa

- Fornecer uma interface para cria��o de fam�lias de objetos relacionados ou dependentes, sem especificar suas classes concretas.

## Sobre o Abstract Factory

- � um padr�o de cria��o, portanto lida com a cria��o de objetos.
- � uma f�brica, assim como o Factory Method e geralmente � composto por m�ltiplos Factory Methods.
- Visa agrupar fam�lias de produtos compat�veis, criando uma f�brica concreta por grupo de objetos compat�veis.
- Separa o c�digo que cria do c�digo que usa os objetos (SRP).
- Permite f�cil implementa��o de novas fam�lias de objetos (OCP).
- Toda a programa��o fica focada nas interfaces e n�o em implementa��es.

## Estrutura

![structure](./assets/imgs/structure.png)

## Aplicabilidade

### Usar o Abstract Factory quando:

- Um sistema deve ser independente de como seus produtos s�o criados, compostos ou representados.
- Um sistema dever ser configurado com uma fam�lia de produtos que podem (ou n�o) trabalhar juntos.
- Uma fam�lia de objetos for projetada para ser usada em conjunto e � necess�rio garantir essa restri��o.
- For preciso fornecer uma biblioteca de classes de produtos e quer revelar somente suas interfaces, n�o suas implementa��es.

## Consequ�ncias

### Bom

- Os produtos sempre ser�o compat�veis entre si.
- Aplica��o clara do Open/Closed Principle, ou seja, � f�cil adicionar novas f�bricas e produtos.
- Aplica��o clara do Single Responsibility Principle, o c�digo que cria est� separado do c�digo que usa os objetos.

### Ruim

- Muitas classes e maior complexidade ser� atribu�da ao c�digo.

---

### Refer�ncias

[Abstract Factory Teoria - Padr�es de Projeto](https://youtu.be/UPSuHqNsNs4?list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H)
