export function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD") // separa acentos
    .replace(/[\u0300-\u036f]/g, ""); // remove acentos
}

export function filterResults(data, query) {
  const q = normalizeText(query);

  return data.filter((anime) => {
    const titles = [
      anime.title,
      anime.title_english,
      ...(anime.titles?.map((t) => t.title) || []),
    ].filter(Boolean);

    return titles.some((t) => normalizeText(t).includes(q));
  });
}
