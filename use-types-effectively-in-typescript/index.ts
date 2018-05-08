(function() {
  type Animal = {
    type: string;
  }

  type Human = {
    name: string;
  }

  const animal: Animal = {
    type: 'dog'
  };

  const human: Human = {
    name: 'Petr'
  };

  function showTypeOrName(stuff: Animal | Human): string {
    let result: string = '';

    if ((<Human>stuff).name) {            // old syntax
      result = (<Human>stuff).name;
    } else if ((stuff as Animal).type) {  // new syntax is more preferable bcz of JSX
      result = (stuff as Animal).type;
    }

    return result;
  }
})();