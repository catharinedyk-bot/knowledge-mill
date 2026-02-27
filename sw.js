{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const CACHE_NAME = 'mill-v1';\
const ASSETS = [\
  './',\
  './mill.html',\
  './manifest.json',\
  './icon.png',\
  'https://cdn.jsdelivr.net/npm/marked/marked.min.js'\
];\
\
// \uc0\u23433 \u35013 \u26102 \u32531 \u23384 \u25991 \u20214 \
self.addEventListener('install', (e) => \{\
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));\
\});\
\
// \uc0\u25318 \u25130 \u35831 \u27714 \u65292 \u20248 \u20808 \u20174 \u32531 \u23384 \u35835 \u21462 \
self.addEventListener('fetch', (e) => \{\
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));\
\});}