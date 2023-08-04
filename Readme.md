# Forms React Native 📱

## Descrição

Este projeto se concentra no uso de tecnologias de native-base e react-hook-form para criar um formulário em um aplicativo expo.
native-base é uma lib que facilita a criação de layout e estilização de forma que se assemelhe ao framework tailwindcss, mas as atribuições de estilização são realizadas via propriedade.

```javascript
    <Heading my={24} fontSize="xl">Crie sua conta</Heading>
```

A lib react-hook-form é utilizada para facilitar o processo de pegar as informações dos formularios e acelearar as etapas de validação, assim resumindo utilização sem necessidade de outras props.

## Opinião

As bibliotecas apresentadas têm um impacto significativo na agilidade da criação de layouts e validações, porém, acredito que sua utilização em projetos mais complexos possa ocasionar algumas inconsistências em termos de manutenção a longo prazo, especialmente no caso da biblioteca nativa Base. A lib react-hook-form provalvemente possa ser uma lib fora da curva devido a ser mais utilizado na construção de forms, assim se tornando mais eficiente.