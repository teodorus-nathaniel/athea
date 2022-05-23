# Project content explanations

`overview.ts` consists of:

```
key: 'mr-sun' => the url of the page. with 'mr-sun' as the value, the detail url for this project will be https://athea.com/projects/mr-sun
title: 'MR SUN' => title of the project, before the `·` in the detail page
titleDesc: 'MR SUN' => title of the project, after the `·` in the detail page
subtitle: 'MANIFESTO · DIGITAL · VIDEO · 2021'
thumbnail: Thumbnail
```

`detail.ts` consists of:
Note: use backtick (`) if the text is multiline.

```
images: [Image1, Image1, Image1, Image1] => images inside the overview section
meta: [ => texts for the data in left of the thumbnail (in desktop view)
  { label: 'Client', value: "N'pure" },
  { label: 'Deliverables', value: 'Manifesto Video' },
  {
    label: 'Role',
    value: `Concept
      Video Production`,
  },
  { label: 'Date', value: '13 May 2021' },
]

overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`

credits: `Production of Athea Collective

  Director - Ivan Saputra Alam
  Producer - Naphtali Ivan
  Production Designer - Michelle Amadea
  Scriptwriter - Aaron Timothy Soeharto

  Starring - Abigail Gusmawan, Rayn Wijaya, Sebastian Teti, Latifah
  Supporting Talent - Odan, Holly Feristo, Yogie

  Director of Photography - Christopher Kuntjoro
  Offline Editor - Ida Bagus Gede Darma Putra
  Online Editor - Michelle Amadea
  Colorist - Riz Catleya
  Music Composer - Abel Huray
  Sound Designer - Lionel Judy`

relatedWorks: [npureOverview, glowgeneOverview] => import the overview.ts of the projects that you want to list under 'Related Works' section
```
