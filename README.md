# Riu Kousei (リュウ・コウセイ) - Official Artist Website

Sitio web oficial de **Riu Kousei**, productor y compositor de música instrumental, ambient y paisajes sonoros.

Publicado automáticamente en GitHub Pages: **[https://riukousei.github.io](https://riukousei.github.io)**

---

## 🎧 Estructura del Proyecto

```text
Riukousei.github.io/
├── index.html                   # Página principal (Hero, Bio, Álbum Destacado, Discografía, Enlaces)
├── .nojekyll                    # Asegura que GitHub Pages sirva los archivos estáticos puros
├── css/
│   └── style.css                # Efectos visuales, glassmorphism, glow animado y tipografía
├── js/
│   └── main.js                  # Menú móvil, switcher interactivo de Spotify/YouTube/Apple y utilidades
├── releases/                    # Páginas individuales con la estética única de cada lanzamiento
│   ├── colorful-life.html       # Estética Aurora/Pastel J-Music (con reproductores oficiales)
│   ├── chapter-2-drowning.html  # Estética Abisal / Azul profundo
│   ├── chapter-1-feelings.html  # Estética Crepuscular / Atardecer nostálgico
│   └── neon-strk.html           # Estética Neón / Cyberpunk
└── img/
    ├── artist/
    │   └── riu-kousei.jpg           # Foto oficial de perfil de Riu Kousei
    └── releases/
        ├── colorful-life.jpg        # Portada oficial 'Colorful Life'
        ├── chapter-2-drowning.jpg   # Portada oficial 'Chapter 2: Drowning'
        ├── chapter-1-feelings.jpg   # Portada oficial 'Chapter 1: New Feelings'
        └── neon-strk.jpg            # Portada oficial 'Neon STRK'
```

---

## 🎨 Cómo personalizar tus imágenes y fotos

Todos los placeholders están listos para ser reemplazados cuando quieras:

1. **Tu foto de artista:**
   * Coloca tu foto en `img/artist/` (por ejemplo `foto-riu.jpg`) y en `index.html` cambia `src="img/artist/riu-kousei-portrait.svg"` por `src="img/artist/foto-riu.jpg"`.
2. **Portadas de lanzamientos:**
   * Coloca los archivos `.jpg` o `.png` de tus portadas en `img/releases/` y actualiza la ruta `src` en `index.html` y en `releases/*.html`.

---

## 🚀 Publicación y Edición

* **Sin instalaciones ni build:** No requieres npm, node ni compiladores.
* Al hacer `git push` a la rama `main`, GitHub Pages actualizará tu web en minutos de forma 100% gratuita y optimizada.
