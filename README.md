# Introdu��o

### Refer�ncias

[Playlist - Ot�vio Miranda](https://www.youtube.com/watch?v=MqddY6Ochkc&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H&index=1&ab_channel=Ot%C3%A1vioMiranda)

## O que s�o padr�es de projeto

- S�o solu��es elegantes para problemas conhecidos recorrentes no desenvolvimento de software que foram utilizados e testados no passado e continuam relevantes nos dias atuais.
- Foram catalogados e popularizados pelo livro ?Padr�es de projeto - Solu��es reutiliz�veis de software orientado a objetos? (os padr�es da ?GoF?, de 1994/95 - por Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides) - Autores conhecidos como ?gang of four?.
- S�o divididos em 3 categorias: de cria��o (creational), que visam abstrair o processo de como objetos s�o criados na aplica��o; estruturais (structural), que lidam com a composi��o de classes e objetos; comportamentais (behavioural), que caracterizam como as classes e objetos interagem e distribuem responsabilidades na aplica��o.
- S�o apenas sugest�es de software que podem ser aplicadas a qualquer linguagem de programa��o.
- O que � bom:
    - N�o � preciso duplicar c�digo.
    - Padr�es universais facilitam o entendimento do projeto.
    - Evita refatora��o desnecess�ria.
    - Ajuda na reutiliza��o do c�digo (conceito DRY - Don?t repeat yourself).
    - Abstrai e nomeia partes particulares do projeto.
    - Ajuda na aplica��o dos princ�pios do design orientado a objetos (SOLID)
    - Facilitam a cria��o de testes unit�rios.
- O que � ruim:
    - Alguns padr�es podem ser complexos para entender.
    - Muito c�digo quando o objetivo � simples.
    - Podem trazer otimiza��es prematuras para o c�digo (YAGNI - You Ain?t Gonna Need It).
    - Se usados incorretamente, podem atrapalhar no desenvolvimento.

## Padr�es de projeto por categoria

### Cria��o (Creational):

- Abstract factory
- Factory Method
- Builder
- Prototype
- Singleton

### Estrutural (Structural)

- Adapter
- Bridge
- Composite
- Decorator
- Fa�ade
- Flyweigth
- Proxy

### Comportamental (Behavioural)

- Interpreter
- Template method
- Chain of responsibility
- Iterator
- Command
- Mediator
- Memento
- Observer
- State
- Strategy
- Visitor

## Princ�pios do design orientado a objetos (SOLID)

### Single Responsibility Principle (Princ�pio da responsabilidade �nica)

- Uma classe deve ter apenas um motivo para mudar.

### Open/closed principle (Princ�pio  do aberto/fechado)

- Classes ou objetos e m�todos devem estar abertos para extens�o, mas fechados para modifica��es.

### Liskov substitution principle (Princ�pio  da substitui��o de Liskov)

- Classes derivadas devem ser capazes de substituir totalmente classes-bases.

### Interface segregation principle (Princ�pio  da segrega��o de Interface)

- Os clientes n�o devem ser for�ados a depender de interfaces que n�o utilizam.

### Dependency inversion principle (Princ�pio da invers�o de depend�ncia)

- M�dulos de alto n�vel n�o devem ser dependentes do m�dulo de baixo n�vel; ambos devem depender de abstra��es. Detalhes devem depender das abstra��es, n�o o inverso.