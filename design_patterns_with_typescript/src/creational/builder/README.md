# Builder

## Premissa

- Separar a constru��o de um objeto complexo da sua representa��o, de modo que o mesmo processo de constru��o possa criar diferentes representa��es.

## Vis�o geral

- O padr�o sugere a separa��o do c�digo que cria e o c�digo que usa o objeto.
- Trata da cria��o de objetos complexos.
  - Objetos que possuem construtores grandes/complexos.
  - Composi��o de v�rios objetos (composite).
  - Algoritmo de cria��o de objeto complexo.
- Permite a cria��o de um objeto em etapas.
- Permite method chaining (encadeamento de m�todos).
- O objeto final pode variar de acordo com a necessidade.
- � um padr�o complexo.

## Estrutura

![structure_builder](./assets/img/structure_builder.png)
![structure_concrete_builder](./assets/img/structure_concrete_builder.png)
![structure_product](./assets/img/structure_product.png)
![structure_director](./assets/img/structure_director.png)

## Exemplo

```javascript
export class Person {
  constructor(public name?: string, public age?: number) {}
}

/**
 * O padr�o n�o se aplica a classe abaixo, levando em considera��o a simplicidade da classe.
 * A classe PersonBuilder � somente um exemplo de aplica��o.
 * O Builder deve ser aplicado em classes complexas.
 */
export class PersonBuilder {
  private person = new Person();

  newPerson(): void {
    this.person = new Person();
  }

  setName(name: string): this {
    this.person.name = name;
    return this; // method chaining
  }

  setAge(age: number): this {
    this.person.age = age;
    return this;
  }

  getResult(): Person {
    return this.person;
  }
}

const personBuilder = new PersonBuilder();
const person1 = personBuilder.setName('Willian').setAge(22).getResult();
personBuilder.newPerson();
const person2 = personBuilder.setName('Moreno').setAge(22).getResult();
```

## Consequ�ncias

### Bom

- Separa a cria��o de utiliza��o.
- O cliente n�o precisa criar objetos diretamente.
- O mesmo c�digo pode construir objetos diferentes.
- Ajuda na aplica��o dos princ�pios SRP e OCP.

> SRP: Single Responsibility Principle (Princ�pio da responsabilidade �nica)
> OCP: Open-Closed Principle (Princ�pio aberto-fechado)

### Ruim

- O c�digo final pode se tornar muito completo.

---

### Refer�ncias

(Builder Teoria - Padr�es de Projeto)[https://youtu.be/2VwLvwsIu-8?list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H]
