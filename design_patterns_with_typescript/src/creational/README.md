# Padr�es de projeto de cria��o (creational)

Os padr�es de projeto de cria��o s�o padr�es que abstraem o processo de instancia��o de objetos. Eles ajudam a tornar um sistema independente de como seus objetos s�o representados, criados e compostos. Geralmente, atingem este objetivo delegando tarefas para outros objetos.

Esses padr�es d�o muita flexibilidade ao sistema, porque encapsulam o conhecimento sobre quais classes concretas s�o usadas. Al�m disso, ocultam o modo como as inst�ncias s�o criadas e compostas. O foco � eliminar conhecimento do cliente sobre o _QUE_, _COMO_ e _QUANDO_ est� sendo criado e _QUEM_ faz parte do processo de cria��o.

## Padr�es e inten��es

Os padr�es de projeto de cria��o originais da GoF s�o:

- **Abstract Factory** - Fornecer uma interface para cria��o de fam�lias de objetos relacionados ou dependentes sem especificar suas classes concretas;
- **Builder** - Separar a constru��o de um objeto complexo de sua representa��o, de modo que o mesmo processo de constru��o possa criar diferentes representa��es;
- **Factory Method** - Definir uma interface para criar um objeto, mas deixar as subclasses decidirem qual classe a ser instanciada. O Factory Method permite a uma classe postergar (defer) a instancia��o �s subclasses;
- **Prototype** - Especificar os tipos de objetos a serem criados usando uma inst�ncia protot�pica e criar novos objetos copiando este prot�tipo;
- **Singleton** - Garantir que uma classe tenha somente uma inst�ncia e fornecer um ponto global de acesso para ela.
