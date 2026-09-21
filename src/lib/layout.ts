/** Colunas do grid de ferramentas: 2 colunas para 2 ou 4 itens evita uma última linha órfã. */
export const toolGridClass = (count: number) => (count === 3 || count >= 5 ? "grid--3" : "grid--2");
