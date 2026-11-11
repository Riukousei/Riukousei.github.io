# Riu Kousei (流光成 / リュウ・コウセイ) - Official Artist Website

Sitio web oficial de **Riu Kousei**, compositor y productor de música instrumental, ambient, piano solo y texturas sonoras reflexivas.

🌐 **En vivo en GitHub Pages:** [https://riukousei.github.io](https://riukousei.github.io)

---

## 🎧 Arquitectura Modular del Proyecto

Diseñado para funcionar sin dependencias de Node.js, npm ni proceso de compilación previo; 100% compatible con GitHub Pages y `.nojekyll`.

```text
Riukousei.github.io/
├── index.html                   # Vitrina principal (Hero, Bio, Lanzamiento destacado, Discografía, Enlaces globales)
├── 404.html                     # Página 404 estilizada con estética ambient y redirección
├── favicon.svg                  # Ícono de pestaña oficial vectorial (aurora dorada)
├── .nojekyll                    # Instrucción para que GitHub Pages sirva todas las carpetas sin filtro Jekyll
├── css/
│   └── style.css                # Estilos personalizados, glassmorphism, tarjetas de partituras, acordeones y animación glow
├── js/
│   └── main.js                  # Lógica de pestañas de reproductores, menú móvil interactivo y animaciones de scroll
├── sheet-music/
│   └── index.html               # Catálogo dedicado de partituras y MIDIs con visor modal PDF y microdatos Schema.org
├── assets/
│   └── sheets/                  # Archivos descargables de partituras (.pdf) y secuencias (.mid)
│       ├── cordeviare-piano.pdf / .mid
│       ├── colorful-life-piano.pdf / .mid
│       ├── velcuore-piano.pdf / .mid
│       ├── adagiola-piano.pdf / .mid
│       ├── caretzia-piano.pdf / .mid
│       └── palvore-piano.pdf / .mid
├── releases/                    # Páginas inmersivas por álbum con paletas y estéticas únicas
│   ├── colorful-life.html       # Estética Otoño/Aurora dorada + Reproductores + Módulo de Historias (Lore)
│   ├── chapter-2-drowning.html  # Estética Abisal / Azul oceánico profundo
│   ├── chapter-1-feelings.html  # Estética Crepuscular / Atardecer nostálgico
│   └── neon-strk.html           # Estética Carmesí / Synthwave retrofuturista
└── img/
    ├── artist/
    │   └── riu-kousei.jpg       # Fotografía oficial del artista (alta resolución)
    └── releases/
        ├── colorful-life.jpg    # Portada oficial 'Colorful Life'
        ├── chapter-2-drowning.jpg # Portada oficial 'Chapter 2: Drowning'
        ├── chapter-1-feelings.jpg # Portada oficial 'Chapter 1: New Feelings'
        └── neon-strk.jpg        # Portada oficial 'Neon STRK'
```

---

## 🎼 Módulos Implementados

### 1. Catálogo de Partituras y MIDIs (`/sheet-music/`) *(Oculto temporalmente en navegación pública)*
* Código y arquitectura estructurados en `/sheet-music/index.html` y `/assets/sheets/` listos para ser activados en los menús cuando decidas habilitar las descargas al público.
* **Descarga directa:** Botones con atributo `download` para descargar instantáneamente partituras en `.pdf` y archivos `.mid`.
* **Visor PDF integrado:** Modal para previsualizar la partitura sin necesidad de salir de la página.
* **SEO Semántico (Schema.org):** Etiquetas `MusicComposition` y `DigitalDocument` integradas en el `<head>` para que Google indexe las búsquedas de partituras de piano de Riu Kousei.

### 2. Módulo de Historias y Concepto (Track Breakdown en `/releases/colorful-life.html`)
* Acordeones interactivos desplegables con el origen del título, la etimología y el trasfondo emocional de temas como *Cordeviare*, *Velcuore*, *Adagiola*, *Caretzia*, *Palvoré*, entre otros.
* Tarjetas de Lore poético con tipografía serif y citas conceptuales.

### 3. Reproductores Oficiales Multiplataforma
* **Bandcamp:** Embebidos oficiales en modo oscuro adaptativo con reproducción completa de tracks.
* **Spotify:** Reproductores embebidos interactivos en cada página.
* **YouTube Music & Apple Music:** Tarjetas y enlaces directos a álbumes y perfiles verificados de artista.

---

## 🚀 Publicación y Despliegue en GitHub Pages

Cada cambio se publica automáticamente al subirlo al repositorio:

```bash
git add .
git commit -m "feat: modulo de partituras, historias de canciones y estetica visual"
git push origin main
```
*GitHub Pages compilará y actualizará el sitio en 1-3 minutos.*
