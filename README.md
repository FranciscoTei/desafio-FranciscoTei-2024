# DESAFIOS RECINTOS DO ZOO

## Descrição do Desafio
O desafio envolve criar um código para avaliar a compatibilidade entre os animais e os recintos estabelecidos se atentando ao espaço disponível, biomas e requisitos específicos de cada animal.
Este projeto tem o objetivo de encontrar recintos adequados para novos animais em um zoológico, levando em consideração diferentes condições e regras de convivências entre as espécies. 

## Comentários
Optei por utilizar o método forEach para iterar pelos recintos e testar as diversas condições necessárias para determinar se um recinto é viável para receber um novo lote de animais. Para funcionar uso o return dentro do forEach para pular os recintos que não atendem as condições, assim ao fim retorna apenas os recintos adequados.

Fiquei em dúvida em criar vários métodos separados para cada condição e usar o método analisaRecintos para passar por todos os outros métodos. A ideia seria organizar a lógica em funções distintas para melhorar a clareza e a manutenção do código. No entanto, optei por consolidar a lógica em um único método para simplificar a implementação inicial e focar no cumprimento dos requisitos básicos do desafio.

## Melhorias
Como coomecei o desafio tarde não pude implementar algumas ideias, como adicionar uma tela com formulário e a funcionalidade de salvar o estado dos recintos após a adição de novos animais permitidos.

Criar testes que manipulem diretamente os recintos e animais para explorar mais cenários para ter uma melhor cobertura de erros. Após os testes, restaurar o estado original dos recintos para garantir a integridade dos dados.

## Agradecimentos
Agradeço a oportunidade de participar do desafio. Permitiu aplicar e aprimorar minhas habilidades em resolução de problemas como também conhecer novas tecnologias. Estou ansioso para futuras oportunidades e para contribuir com minha experiência e entusiasmo para a equipe. Obrigado pelo tempo e consideração!

