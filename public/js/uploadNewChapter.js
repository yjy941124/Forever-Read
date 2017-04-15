var quill = new Quill('#editor-container', {
    modules: {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
        ]
    },
    placeholder: 'This is where it all starts...',
    theme: 'snow'
});

var form = document.querySelector('form');
form.onsubmit = function() {
    var chapterContent = document.querySelector('input[name=chapterContent]');
    chapterContent.value = JSON.stringify(quill.getContents());
};