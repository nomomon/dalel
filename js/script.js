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
<a href="#${a.link}" style="text-decoration:none;">
<div class="problem_preview" title="${a.title}">
    <div class="problem_preview_title">
        <b>${a.title}</b>
    </div>
    <div class="problem_preview_source">
        <b>Source</b>: ${a.source}
    </div>
    <div class="problem_preview_text">
        ${a.text}
    </div>
</div>
</a>`;

// black wraper
const show = ()=>{
    let a = document.querySelector(".black-wraper");
    console.log(a.style.display)
    a.style.display = (a.style.display == "none" || !a.style.display)? "block":"none";
}

// newpost
const postForm = document.querySelector("#new-post")

postForm.addEventListener('submit', e=>{
    e.preventDefault()
    
    // get user info
    const title = postForm['title'].value;
    const source  = postForm['source'].value;
    const text = postForm['text'].value;

    // post
    post({title, source, text}).then(() => {
        show();
        postForm.reset();
    })
})
