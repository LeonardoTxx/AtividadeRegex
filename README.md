**Expressão Regular para o Nome:**
   ``
   /^[a-zA-Z ]{1,100}$/
   ``
   - `^`: Indica o início da string.
   - `[a-zA-Z ]`: Define um conjunto de caracteres permitidos no nome, que inclui letras maiúsculas, letras minúsculas e o espaço.
   - `{1,100}`: Especifica o intervalo de comprimento do nome, de 1 a 100 caracteres.
   - `$`: Indica o fim da string.

   Essa expressão regular valida se o nome contém apenas letras e espaços, e se está dentro do limite de 100 caracteres.

**Expressão Regular para o Email:**
   ``
   /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   ``
   - `^`: Indica o início da string.
   - `[^\s@]+`: Corresponde a um ou mais caracteres que não são espaços em branco ou '@'.
   - `@`: Corresponde ao caractere '@'.
   - `\.`: Corresponde ao caractere '.'.
   - `$`: Indica o fim da string.

   Esta expressão regular verifica se o email possui o formato padrão, contendo um único '@' e pelo menos um ponto após o '@', além de não permitir espaços em branco.

**Expressão Regular para o Número de Telefone:**
   ``
   /^\(\d{2}\) \d{5}-\d{4}$/
   ``
   - `^`: Indica o início da string.
   - `\(`: Corresponde ao caractere '('.
   - `\d{2}`: Corresponde a exatamente dois dígitos para o DDD.
   - `\)` : Corresponde ao caractere ')'.
   - `\d{5}`: Corresponde a exatamente cinco dígitos para o prefixo do telefone.
   - `-`: Corresponde ao caractere '-'.
   - `\d{4}`: Corresponde a exatamente quatro dígitos para a parte final do telefone.
   - `$`: Indica o fim da string.

   Essa expressão regular valida um número de telefone no formato brasileiro padrão, com DDD entre parênteses, seguido por um espaço, o prefixo do telefone, um hífen e a parte final do telefone.
