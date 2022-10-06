# Prototype

## Premissa

- Especificar os tipos de objetos a serem criados usando uma inst�ncia-prot�tipo e criar novos objetos pela c�pia desse prot�tipo

## Sobre JavaScript e TypesScript

- JavaScript e TypesScript s�o linguagens baseadas em prot�tipos. Vale ressaltar que TypesScript � JavaScript.
- Objetos est�o diretamente ligados a outros objetos.[
- Pode-se construir um objeto com base em outro, herdando os m�todos e propriedades.
- A "heran�a" � obtida via delega��o (um objeto delega algo para seu prot�tipo).
- Uma das maneiras mais simples para manipular o prot�tipo de um objeto � usando `Object.create(prototypeObject)`.
- Um costume seria a utiliza��o de classes ou fun��es construtoras para manipula��o de prot�tipos. Com isso, o JS/TS parecem estar usando o padr�o de orienta��o a objetos cl�ssico, mas por baixo dos panos � uma manipula��o de prototype.

> Delega��o: transmiss�o, transfer�ncia de poder.

## Vis�o geral do padr�o Prototype

- O tipo de objeto a ser criado � determinado pelo objeto prot�tipo.
- � tipicamente usado para evitar a recria��o de objetos "caros", ou seja, objetos complexos de serem constru�dos ou pesados no quesito computacional, por exemplo que lidam com muitos dados.
- Ajuda a evitar a explos�o, exagerada constru��o, de subclasses, devido a possibilidade de clonar um objeto muito similar e acrescentar o que for preciso.
- Pode, ou n�o, manter um registro de objetos prot�tipos em um objeto separado.
- Geralmente � criado apenas com um m�todo "clone" dentro do objeto prot�tipo.
- O m�todo clone pode gerar uma "shallow" ou "deep" copy do objeto prot�tipo.
- Evita que o usu�rio conhe�a as classes que criam os objetos.

> Shallow copy: _Uma shallow copy (c�pia superficial) de um objeto � uma c�pia cujas propriedades compartilham as mesmas refer�ncias (apontam para os mesmos valores subjacentes) do objeto de origem a partir do qual a c�pia foi feita. Como resultado, ao alterar a origem ou a c�pia, voc� tamb�m pode fazer com que o outro objeto tamb�m seja alterado ? e, portanto, voc� pode acabar causando altera��es inesperadas na origem ou na c�pia._

> Deep copy: _Uma deep copy (c�pia profunda) de um objeto � uma c�pia cujas propriedades n�o compartilham as mesmas refer�ncias (apontam para os mesmos valores subjacentes) que as do objeto de origem a partir do qual a c�pia foi feita. Como resultado, quando voc� altera a origem ou a c�pia, pode ter certeza de que n�o est� fazendo com que o outro objeto tamb�m seja alterado; ou seja, voc� n�o causar� altera��es inadvertidas na fonte ou na c�pia que n�o espera._

## Estrutura

![structure_client](./assets/imgs/structure_client.png)
![structure_prototype](./assets/imgs/structure_prototype.png)
![structure_concrete_prototypes](./assets/imgs/structure_concrete_prototypes.png)

## Exemplo

```javascript
interface Prototype {
  clone(): Prototype;
}

class Person implements Prototype {
  constructor(public name: string, public age: number) {}

  clone(): this {
    // Isso n�o � um clone.
    // Estamos apenas criado em novo objeto que tem este objeto como prot�tipo.
    const newPerson = Object.create(this);
    return newPerson;
  }
}

const person1 = new Person('Willian', 22);
const person2 = new person1.clone();

console.log(person1.name); // Willian
console.log(person2.name); // Willian
```

```javascript
const person1 = {
  name: 'Willian',
  age: 22,
};

const person2 = Object.create(person1);

console.log(person1.name); // Willian
console.log(person2.name); // Willian

// person1 � igual ao prototype de person2
console.log(person1 === Object.getPrototypeOf(person2));
```

## Aplicabilidade

### Use o padr�o prototype:

- Quando precisar que seu c�digo n�o dependa de classes concretas para a cria��o de novos objetos.
- Quando quiser evitar explos�o de subclasses para objetos muito similares.
- Para evitar a recria��o de objetos "caros".

## Consequ�ncias

### Bom

- Oculta classes concretas do c�digo cliente.
- Ajuda na cria��o de objetos caros ou complexos.
- Evita a explos�o de subclasses.

### Ruim

- Clonar objetos que tem refer�ncias para outros objetos pode ser super complexo.

---

### Refer�ncias

[Prototype Teoria - Padr�es de Projeto](https://youtu.be/Z-_smcjkdwM?list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H)<br>
[Shallow Copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)
[Deep Copy](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy)
