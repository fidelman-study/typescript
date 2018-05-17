function trimAndLower(text: string | undefined | null) {
  if (typeof text === 'string') {
    return text.trim().toLowerCase();
  }

  return text;
}

console.log(trimAndLower(null));
console.log(trimAndLower(undefined));
console.log(trimAndLower(' Hello '));

/* ======================= */

const container: HTMLElement | null = document.getElementById('container');
if (container) {
  container.addEventListener('click', (e: Event): void => console.log(e));
}

/* ======================= */

const wrapper: HTMLElement = document.getElementById('wrapper')!; // ! at the end means not null
wrapper.classList.add('active');