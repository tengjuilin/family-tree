/*
Replace the tags with custom tags.
First argument uses regular expression of
`/[word to replace]/g` to replace all.
The forward slash `/` is escaped by backslash `\`.
*/
var content = document.documentElement.innerHTML
content = content.replace(/<strong>男/g, '<individual class="male">')
content = content.replace(/<strong>女/g, '<individual class="female">')
content = content.replace(/<strong>/g, '<individual>')
content = content.replace(/<\/strong>/g, '</individual>')
content = content.replace(/<em>/g, '<box><couple>')
content = content.replace(/<\/em>/g, '</couple></box>')
document.documentElement.innerHTML = content