# Introdução

### Referências

[Playlist - Otávio Miranda](https://www.youtube.com/watch?v=MqddY6Ochkc&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H&index=1&ab_channel=Ot%C3%A1vioMiranda)

## O que são padrões de projeto

- São soluções elegantes para problemas conhecidos recorrentes no desenvolvimento de software que foram utilizados e testados no passado e continuam relevantes nos dias atuais.
- Foram catalogados e popularizados pelo livro ?Padrões de projeto - Soluções reutilizáveis de software orientado a objetos? (os padrões da ?GoF?, de 1994/95 - por Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides) - Autores conhecidos como ?gang of four?.
- São divididos em 3 categorias: de criação (creational), que visam abstrair o processo de como objetos são criados na aplicação; estruturais (structural), que lidam com a composição de classes e objetos; comportamentais (behavioural), que caracterizam como as classes e objetos interagem e distribuem responsabilidades na aplicação.
- São apenas sugestões de software que podem ser aplicadas a qualquer linguagem de programação.
- O que é bom:
    - Não é preciso duplicar código.
    - Padrões universais facilitam o entendimento do projeto.
    - Evita refatoração desnecessária.
    - Ajuda na reutilização do código (conceito DRY - Don?t repeat yourself).
    - Abstrai e nomeia partes particulares do projeto.
    - Ajuda na aplicação dos princípios do design orientado a objetos (SOLID)
    - Facilitam a criação de testes unitários.
- O que é ruim:
    - Alguns padrões podem ser complexos para entender.
    - Muito código quando o objetivo é simples.
    - Podem trazer otimizações prematuras para o código (YAGNI - You Ain?t Gonna Need It).
    - Se usados incorretamente, podem atrapalhar no desenvolvimento.

## Padrões de projeto por categoria

### Criação (Creational):

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
- Façade
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

## Princípios do design orientado a objetos (SOLID)

### Single Responsibility Principle (Princípio da responsabilidade única)

- Uma classe deve ter apenas um motivo para mudar.

### Open/closed principle (Princípio  do aberto/fechado)

- Classes ou objetos e métodos devem estar abertos para extensão, mas fechados para modificações.

### Liskov substitution principle (Princípio  da substituição de Liskov)

- Classes derivadas devem ser capazes de substituir totalmente classes-bases.

### Interface segregation principle (Princípio  da segregação de Interface)

- Os clientes não devem ser forçados a depender de interfaces que não utilizam.

### Dependency inversion principle (Princípio da inversão de dependência)

- Módulos de alto nível não devem ser dependentes do módulo de baixo nível; ambos devem depender de abstrações. Detalhes devem depender das abstrações, não o inverso.