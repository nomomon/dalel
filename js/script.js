//  KaTeX
const options = {
    // "displayMode":false,
    "delimiters":[
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false},
        {left: "\\[", right: "\\]", display: true},
    ],
    "ignoredTags":["script", "noscript", "style", "textarea", "pre", "code"]
}

// post template
let temp = (a) => `
<div class="problem_preview" title="${a.title}" href="">
    <div class="problem_preview_title">
        <b>${a.title}</b>
    </div>
    <div class="problem_preview_source">
        <b>Source</b>: ${a.source}
    </div>
    <div class="problem_preview_text">
        ${a.text}
    </div>
</div>`;