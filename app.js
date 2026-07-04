const STORAGE_CUSTOM = "chorradas.custom";
const STORAGE_FAVS = "chorradas.favs";

const grid = document.getElementById("grid");
const emptyMsg = document.getElementById("empty");
const searchInput = document.getElementById("search");
const categoriaSelect = document.getElementById("categoria");
const ordenSelect = document.getElementById("orden");
const randomBtn = document.getElementById("randomBtn");
const statsEl = document.getElementById("stats");

const fab = document.getElementById("addBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const addForm = document.getElementById("addForm");

function loadCustom() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_CUSTOM)) || [];
  } catch {
    return [];
  }
}

function saveCustom(list) {
  localStorage.setItem(STORAGE_CUSTOM, JSON.stringify(list));
}

function loadFavs() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_FAVS)) || []);
  } catch {
    return new Set();
  }
}

function saveFavs(set) {
  localStorage.setItem(STORAGE_FAVS, JSON.stringify([...set]));
}

let favs = loadFavs();
let productos = [...PRODUCTOS_BASE, ...loadCustom()];

function poblarCategorias() {
  const cats = [...new Set(productos.map((p) => p.categoria))].sort();
  categoriaSelect.innerHTML =
    '<option value="">Todas las categorías</option>' +
    cats.map((c) => `<option value="${c}">${c}</option>`).join("");
}

function chorraEmojis(nivel) {
  return "🤪".repeat(nivel) + "😐".repeat(5 - nivel);
}

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const cat = categoriaSelect.value;
  const orden = ordenSelect.value;

  let lista = productos.filter((p) => {
    const matchQuery =
      !query ||
      p.nombre.toLowerCase().includes(query) ||
      p.descripcion.toLowerCase().includes(query) ||
      p.categoria.toLowerCase().includes(query);
    const matchCat = !cat || p.categoria === cat;
    return matchQuery && matchCat;
  });

  lista.sort((a, b) => {
    switch (orden) {
      case "chorrada-asc":
        return a.chorrada - b.chorrada;
      case "ventas-desc":
        return (b.ventas || "").length - (a.ventas || "").length;
      case "año-desc":
        return (b.año || 0) - (a.año || 0);
      case "año-asc":
        return (a.año || 0) - (b.año || 0);
      case "az":
        return a.nombre.localeCompare(b.nombre);
      case "chorrada-desc":
      default:
        return b.chorrada - a.chorrada;
    }
  });

  grid.innerHTML = "";
  emptyMsg.classList.toggle("hidden", lista.length > 0);

  for (const p of lista) {
    const card = document.createElement("article");
    card.className = "card";
    const isFav = favs.has(p.id);
    card.innerHTML = `
      <div class="card-top">
        <div class="card-emoji">${p.emoji || "🎁"}</div>
        <div>
          <h3>${p.nombre}</h3>
          <span class="badge">${p.categoria}</span>
          ${p.custom ? '<span class="custom-tag">Tu propuesta</span>' : ""}
        </div>
      </div>
      <div class="chorrometro" title="Nivel de chorrada">${chorraEmojis(p.chorrada)}</div>
      <p class="desc">${p.descripcion}</p>
      <div class="meta">
        ${p.año ? `<span>📅 ${p.año}</span>` : ""}
        ${p.precioAprox ? `<span>💵 ${p.precioAprox}</span>` : ""}
        ${p.ventas ? `<span>📈 ${p.ventas}</span>` : ""}
      </div>
      ${p.porQueTriunfo ? `<div class="porque">✨ ${p.porQueTriunfo}</div>` : ""}
      <div class="card-actions">
        <button class="fav-btn ${isFav ? "active" : ""}" data-id="${p.id}" title="Marcar como favorito">
          ${isFav ? "❤️" : "🤍"}
        </button>
      </div>
    `;
    grid.appendChild(card);
  }

  grid.querySelectorAll(".fav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      if (favs.has(id)) favs.delete(id);
      else favs.add(id);
      saveFavs(favs);
      render();
    });
  });

  statsEl.innerHTML = `
    <span>🗂️ ${productos.length} chorradas catalogadas</span>
    <span>❤️ ${favs.size} favoritas tuyas</span>
    <span>🏆 Nivel medio de chorrada: ${(
      productos.reduce((s, p) => s + p.chorrada, 0) / productos.length
    ).toFixed(1)}/5</span>
  `;
}

searchInput.addEventListener("input", render);
categoriaSelect.addEventListener("change", render);
ordenSelect.addEventListener("change", render);

randomBtn.addEventListener("click", () => {
  const p = productos[Math.floor(Math.random() * productos.length)];
  searchInput.value = p.nombre;
  categoriaSelect.value = "";
  render();
  requestAnimationFrame(() => {
    grid.firstElementChild?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

fab.addEventListener("click", () => modal.classList.remove("hidden"));
closeModal.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(addForm);
  const nombre = data.get("nombre").trim();
  const nuevo = {
    id: "custom-" + Date.now(),
    nombre,
    descripcion: data.get("descripcion").trim(),
    categoria: data.get("categoria").trim(),
    emoji: data.get("emoji").trim() || "🎁",
    chorrada: Number(data.get("chorrada")),
    año: new Date().getFullYear(),
    custom: true
  };

  const custom = loadCustom();
  custom.push(nuevo);
  saveCustom(custom);

  productos = [...PRODUCTOS_BASE, ...custom];
  poblarCategorias();
  render();

  addForm.reset();
  modal.classList.add("hidden");
});

poblarCategorias();
render();
